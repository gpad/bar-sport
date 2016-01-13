use Mix.Config

config(:bar_sport, [
  {:database, [{:database, "barsport_test"}, {:hostname, "localhost"}]},
  {:port, 9889}
])

config :bar_sport, :db_pool, [{:size, 5}, {:max_overflow, 0}]

config :logger, :console, level: :error
