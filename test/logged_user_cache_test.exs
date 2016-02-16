defmodule LoggedUserCache.Test do
  use ExUnit.Case

  test "Add user by token" do
    token = "akhas"
    user = %{a: 1}
    assert LoggedUserCache.put(token, user) == :ok
    assert LoggedUserCache.get(token) == user
  end
end
