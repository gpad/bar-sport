defmodule BarSport.Router do
  use Plug.Router
  use Plug.Debugger
  use WebSocket

  plug Plug.Static, at: "/", from: "./public", only: ["index.html"]
  plug Plug.Static, at: "/assets", from: "./public/assets"
  plug Plug.Static, at: "/dist", from: "./public/dist"
  plug Plug.Parsers, parsers: [:urlencoded, :json],  pass: ["application/*"], json_decoder: Poison
  plug Plug.Logger

  plug :match
  plug :dispatch

  socket "/chat", ChatController, :messages

  # root "/index.html"

  get "/" do
    put_resp_header(conn, "content-type", "text/html")
    |> send_file(200, "./public/index.html")
  end

  get "/health" do
    send_json(conn, %{status: :ok})
  end

  post "/sessions" do
    token = BarSport.SessionController.login(conn.body_params)
    send_json(conn, %{result: :ok, token: token })
  end

  match _ do
    send_resp(conn, 404, "oops")
  end

  defp send_json(conn, body, status \\ 200) do
    put_resp_header(conn, "content-type", "application/json")
      |> send_resp(status, Poison.encode!(body))
  end
end
