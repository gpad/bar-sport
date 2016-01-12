defmodule Mix.Tasks.CreateDb do
  use Mix.Task

  alias Postgrex.Connection, as: Px

  @shortdoc "Create DB if not present"
  @moduledoc @shortdoc

  @db_name "barsport"

  def run(_) do
    Mix.shell.info "Staring creating db #{@db_name}"
    open |> create |> fill |> close
    Mix.shell.info "Database created."
  end

  defp open(database \\ "template1") do
    :ok = Application.ensure_started :postgrex
    {:ok, pid} = Px.start_link(hostname: "localhost", database: database)
    pid
  end

  defp close(pid) do
    Px.stop(pid)
  end

  defp create(pid) do
    [
      "DROP DATABASE IF EXISTS #{@db_name}",
      "CREATE DATABASE #{@db_name}",
    ] |> Enum.each(&(Px.query!(pid, &1, [])))

    :ok = Px.stop(pid)
    new_pid = open @db_name

    [
      "CREATE TABLE IF NOT EXISTS Users (id SERIAL PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))",
    ] |> Enum.each(&(Px.query!(new_pid, &1, [])))
    new_pid
  end

  defp fill(pid) do
    Px.query!(pid, "INSERT into Users (username, password) VALUES ('gpad', 'gpad')", [])
    Px.query!(pid, "INSERT into Users (username, password) VALUES ('mk', 'mk')", [])
    pid
  end
end
