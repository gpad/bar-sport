defmodule BarSportTest do
  use ExUnit.Case
  use Plug.Test

  doctest BarSport

  # test "send message via Api recevive notify via WS" do
  #test "send message via Api should return 200" do
  #  conn = conn(:post, "/messages", %{text: 'Hello!!!'})
  #  |> bar_sport.conn

  #  assert conn.state == :sent
  #  assert conn.status == 200
  #end
end
