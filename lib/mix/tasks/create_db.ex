defmodule Mix.Tasks.CreateDb do
  use Mix.Task

  alias Postgrex, as: Px

  @shortdoc "Create DB if not present"
  @moduledoc @shortdoc

  @database Application.get_env(:bar_sport, :database)
  @hostname @database[:hostname]
  @db_name @database[:database]

  def run(_) do
    Mix.shell.info "Staring creating db #{inspect @db_name}"
    open |> create |> fill |> close
    Mix.shell.info "Database created."
  end

  defp open(database \\ "template1") do
    {:ok, _ } = Application.ensure_all_started(:postgrex)
    {:ok, pid} = Px.start_link(hostname: @hostname, database: database)
    pid
  end

  defp close(pid) do
    # Px.stop(pid)
    :ok
  end

  defp create(pid) do
    [
      "DROP DATABASE IF EXISTS #{@db_name}",
      "CREATE DATABASE #{@db_name}",
    ] |> Enum.each(&(Px.query!(pid, &1, [])))

    :ok = close(pid)
    new_pid = open @db_name

    [
      "CREATE TABLE IF NOT EXISTS versions (id SERIAL PRIMARY KEY, version VARCHAR(255))",
      "CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))",
    ] |> Enum.each(&(Px.query!(new_pid, &1, [])))
    new_pid
  end

  defp fill(pid) do
    Px.query!(pid, "INSERT into Users (username, password) VALUES ('gpad', 'gpad')", [])
    Px.query!(pid, "INSERT into Users (username, password) VALUES ('mk', 'mk')", [])
    pid
  end
end
