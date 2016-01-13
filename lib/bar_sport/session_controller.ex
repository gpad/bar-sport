defmodule BarSport.SessionController do

  def login(%{"username" => username, "password" => password}) do
    BarSport.User.login(username, password)
  end
end
