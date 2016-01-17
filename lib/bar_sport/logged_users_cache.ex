defmodule LoggedUserCache do
  use GenServer

  def start_link do
    GenServer.start_link(__MODULE__, %{}, name: :session_cache)
  end

  def put(token, value) do
    GenServer.call(:session_cache, {:put, token, value})
  end

  def get(token, default \\ nil) do
    GenServer.call(:session_cache, {:get, token}) || default
  end

  def handle_call({:put, token, value}, _from, state) do
    {:reply, :ok, Map.put(state, token, value)}
  end

  def handle_call({:get, token}, _from, state) do
    {:reply, Map.get(state, token), state}
  end

end
