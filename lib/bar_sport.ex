defmodule BarSport do
  use Application

  @port Application.get_env(:bar_sport, :port)

  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Define workers and child supervisors to be supervised
      # worker(BarSport.Worker, [arg1, arg2, arg3]),
      Plug.Adapters.Cowboy.child_spec(:http, BarSport.Router, [], [port: @port, dispatch: BarSport.Router.dispatch_table])
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: BarSport.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
