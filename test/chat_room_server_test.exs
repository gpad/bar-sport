defmodule ChatRoomServerTest do
  use ExUnit.Case, async: false

  setup do
    on_exit fn ->
       ChatRoomServer.stop()
    end
    :ok
  end

  test "add user to room" do
    user = BarSport.User.create("test", "password")
    assert ChatRoomServer.add_user(user) == :ok
    assert ChatRoomServer.get_users() == [%{pid: self, user: user}]
  end

  test "remove user from room" do
    u1 = BarSport.User.create("test", "password")
    u2 = BarSport.User.create("t2", "password")
    assert ChatRoomServer.add_user(u1) == :ok
    assert ChatRoomServer.add_user(u2) == :ok
    assert ChatRoomServer.remove_user(u1) == :ok
    assert ChatRoomServer.get_users() == [%{pid: self, user: u2}]
  end

  test "add message and receive message" do
    u1 = BarSport.User.create("test", "password")
    u2 = BarSport.User.create("t2", "password")
    ChatRoomServer.add_user(u1)
    ChatRoomServer.add_user(u2)

    ChatRoomServer.add_message("ciaooo da u1", u1)

    assert_receive {:text, {:info, %{from: u1, message: "ciaooo da u1"}}}
  end

end
