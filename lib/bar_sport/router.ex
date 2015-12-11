defmodule BarSport.Router do
  use Plug.Router
  use Plug.Debugger
  use WebSocket

  plug Plug.Static, at: "/", from: "./public", only: ["index.html"]
  plug Plug.Static, at: "/assets", from: "./public/assets"

  plug :match
  plug :dispatch

  socket "/chat", ChatController, :echo

  # root "/index.html"

  get "/" do
    put_resp_header(conn, "content-type", "text/html")
    |> send_file(200, "./public/index.html")
  end

  get "/health" do
    send_json(conn, %{status: :ok})
  end

  match _ do
    send_resp(conn, 404, "oops")
  end

  defp send_json(conn, body, status \\ 200) do
    put_resp_header(conn, "content-type", "application/json")
      |> send_resp(status, Poison.encode!(body))
  end
end
