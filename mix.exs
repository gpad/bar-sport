defmodule BarSport.Mixfile do
  use Mix.Project

  def project do
    [app: :bar_sport,
     version: "0.0.1",
     elixir: "~> 1.2",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  # Configuration for the OTP application
  #
  # Type "mix help compile.app" for more information
  def application do
    [applications: applications_for(Mix.env),
     mod: {BarSport, []}]
  end

  defp applications_for(:dev), do: applications_for(:all) ++ [:remix]
  defp applications_for(_), do: [:logger, :cowboy, :postgrex, :poolboy]

  # Dependencies can be Hex packages:
  #
  #   {:mydep, "~> 0.3.0"}
  #
  # Or git/path repositories:
  #
  #   {:mydep, git: "https://github.com/elixir-lang/mydep.git", tag: "0.1.0"}
  #
  # Type "mix help deps" for more examples and options
  defp deps do
    [
      {:plug, "~> 1.0.2"},
      {:poolboy, "~> 1.5"},
      {:cowboy, "~> 1.0.4"},
      {:poison, "~> 1.5"},
      # {:web_socket, git: "https://github.com/gpad/plug-web-socket.git", branch: "upgrade_plug"},
      {:web_socket, git: "https://github.com/gpad/plug-web-socket.git", branch: "GP_dev"},
      {:postgrex, "~> 0.11"},
      {:credo, "~> 0.1.9", only: [:dev, :test]},
      {:remix, "~> 0.0", only: :dev},
      {:credo, "~> 0.1.9", only: [:dev, :test]},
    ]
  end
end
