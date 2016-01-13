defmodule SessionCache do
  use GenServer

  def start_link do
    GenServer.start_link(__MODULE__, %{}, name: :session_cache)
  end

  def put(key, value) do
    GenServer.call(:session_cache, {:put, key, value})
  end

  def get(key, default \\ nil) do
    GenServer.call(:session_cache, {:get, key}) || default
  end

  def handle_call({:put, key, value}, _from, state) do
    {:reply, value, Map.put(state, key, value)}
  end

  def handle_call({:get, key}, _from, state) do
    {:reply, Map.get(state, key), state}
  end

end
