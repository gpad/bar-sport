defmodule BarSport.Mixfile do
  use Mix.Project

  def project do
    [app: :bar_sport,
     version: "0.0.1",
     elixir: "~> 1.1",
     build_embedded: Mix.env == :prod,
     start_permanent: Mix.env == :prod,
     deps: deps]
  end

  # Configuration for the OTP application
  #
  # Type "mix help compile.app" for more information
  def application do
    [applications: [:logger, :cowboy],
     mod: {BarSport, []}]
  end

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
      {:cowboy, "~> 1.0.4"},
      {:poison, "~> 1.5.0"},
      {:web_socket, path: "../plug-web-socket"},
      {:credo, "~> 0.1.9", only: [:dev, :test]}
    ]
  end
end
