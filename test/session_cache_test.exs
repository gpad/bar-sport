defmodule SessionCache.Test do
  use ExUnit.Case

  test "save token" do
    assert SessionCache.put(1, "gino") == "gino"
    assert SessionCache.get(1) == "gino"
  end
end
