use Mix.Config

config(:bar_sport, [
  {:database, [{:database, "barsport"}, {:hostname, "localhost"}]},
  {:port, 4000}
])
