defmodule BarSportTest do
  use ExUnit.Case
  use Plug.Test

  doctest BarSport

  @opt BarSport.Router.init([])

  test "Login with username and password" do
    user = BarSport.User.create("test", "pwd")

    conn = conn(:post, "/sessions", Poison.encode!(%{username: user.username, password: user.password}))
    |> put_req_header("content-type", "application/json")
    |> BarSport.Router.call(@opt)

    assert conn.state == :sent
    assert conn.status == 200
    assert Poison.decode!(conn.resp_body) == %{"result" => "ok", "token" => BarSport.User.token(user)}
  end
end
