defmodule ChatController do
  require Logger

  def messages(:init, state) do
    Logger.debug("Initialize channel form pid: #{inspect self}")
    case get_current_user(state) do
      nil ->
        Logger.debug("Shutdown Channel")
        {:shutdown}
      user ->
        ChatRoomServer.add_user(user)
        {:ok, %{state | use_topics: false}}
    end
  end

  def messages(:terminate, state) do
    case get_current_user(state) do
      user when user != nil ->
        ChatRoomServer.remove_user(user)
      _ -> :ok
    end
    :ok
  end

  #send p, {:text, {:info, "example text"}}
  def messages({:info, message}, state) do
    Logger.debug "Receive INFO message: '#{inspect message}' in pid: #{inspect self}"
    {:reply, {:text, Poison.encode!(message)}, state}
  end

  def messages(message, state)do
    Logger.debug "Receive message: '#{inspect message}' in pid: #{inspect self}"
    user = get_current_user(state)
    ChatRoomServer.add_message(message, user)
    {:reply, {:text, Poison.encode!(%{from: user, message: message})}, state}
  end

  defp get_current_user(state) do
    "token=" <> token = state.conn.query_string
    LoggedUserCache.get(token)
  end
end
