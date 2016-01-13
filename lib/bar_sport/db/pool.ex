defmodule BarSport.Db.Pool do
  use GenServer
  require Logger

  # defp create_struct pid do
  #   Postgrex.Connection.query!(pid, "CREATE TABLE versions (
  #     version varchar(255) NOT NULL,
  #     created_at timestamp DEFAULT current_timestamp
  #   )", [])
  #   Postgrex.Connection.query!(pid, "CREATE TABLE accept_infos (
  #     id SERIAL PRIMARY KEY NOT NULL,
  #     ip varchar(40) NOT NULL,
  #     host varchar(255) NOT NULL,
  #     method varchar(40) NOT NULL,
  #     created_at timestamp DEFAULT current_timestamp
  #   )", [])
  #   Postgrex.Connection.query!(pid, "INSERT INTO
  #     Versions(version)
  #   VALUES ('1')", [])
  # end

  # defp update_struct pid, result do
  #   # IO.puts("Nothig to update #{IO.inspect(result)}")
  # end

  ##TODO gestione delle nostra GUARD!!!
  #defp is_missing_table reason do
  #  # IO.inspect reason
  #  true
  #end

  defp verify_version({:ok, pid}) do
    case Postgrex.Connection.query(pid, "SELECT * FROM versions", []) do
      {:ok, result} -> IO.puts("Nothig to update #{inspect result}")
      # {:error, reason} -> raise "ERROR reason: #{inspect reason.postgres.message}"
    end
    {:ok, pid}
  end

  def start_link(state) do
    GenServer.start_link __MODULE__, state, []
  end

  def init(_state) do
    ret = Postgrex.Connection.start_link(Application.get_env(:bar_sport, :database))
    |> verify_version
    Logger.info "CREATE connection -> #{inspect ret}"
    ret
  end

  def handle_call(cmd, from, state) do
    ret = cmd.(state)
    {:reply, ret, state}
  end

end
