use Mix.Config

config(:bar_sport, [
  {:database, [{:database, "barsport_dev"}, {:hostname, "localhost"}]},
  {:port, 8989}
])
