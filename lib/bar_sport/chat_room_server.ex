defmodule ChatRoomServer do
  use GenServer

  @name :chat_room_server

  def start_link() do
    GenServer.start_link(__MODULE__, [], [name: @name])
  end

  def stop() do
    GenServer.stop(@name)
  end

  def add_user(user, owner \\ self) do
    GenServer.call(@name, {:add_user, %{user: user, pid: owner}})
  end

  def remove_user(user) do
    GenServer.call(@name, {:remove_user, user})
  end

  def get_users() do
    GenServer.call(@name, {:get_users})
  end

  def add_message(message, from) do
    GenServer.call(@name, {:add_message, message, from})
  end

  def handle_call({:add_user, user}, _from, state) do
    {:reply, :ok, [user | state]}
  end

  def handle_call({:remove_user, user}, _from, state) do
    {:reply, :ok, Enum.filter(state, fn u -> u.user.id != user.id end) }
  end

  def handle_call({:get_users}, _from, state) do
    {:reply, state, state}
  end

  def handle_call({:add_message, message, from}, _, state) do
    dispatch(state, message, from)
    {:reply, :ok, state}
  end

  defp dispatch(state, message, from) do
    state
      |> Enum.filter(fn u -> u.user.id != from.id end)
      |> Enum.map(fn u ->
        send(u.pid, {:text, {:info, %{from: from, message: message}}})
      end)
  end


end
