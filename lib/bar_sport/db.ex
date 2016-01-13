defmodule BarSport.Db do
  require Logger

  def stats do
    execute("SELECT COUNT(pid) FROM pg_stat_activity", [])
      |> get_scalar
  end

  def execute(query, params) do
    execute fn pid ->
      Postgrex.Connection.query!(pid, query, params)
    end
  end

  def execute(cmd) do
    :poolboy.transaction(:db_pool, fn worker -> GenServer.call(worker, cmd) end)
 end

  defp get_scalar result do
    hd hd result.rows
  end

end
