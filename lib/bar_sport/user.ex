defmodule BarSport.User do

  defstruct id: nil, username: '', password: ''

  alias BarSport.Db, as: Db

  def create(username, password) do
    res = Db.execute("INSERT INTO USERS (username, password) values ($1, $2) RETURNING id, username, password", [username, password])
    [[id, u, p]] = res.rows
    %BarSport.User{id: id, username: u, password: p}
  end

  def login(username, password) do
    [user | _] = Db.execute("Select * from Users where username=$1 and password=$2", [username, password])
    |> create_users_from
    SessionCache.put(user.id, token(user))
  end

  def token(user) do
    :crypto.hash(:sha512, user.username <> user.password) |> Base.encode64
  end

  defp create_users_from(%Postgrex.Result{rows: rows}) do
    Enum.map(rows, fn [id, u, p] -> %BarSport.User{id: id, username: u, password: p} end)
  end
end
