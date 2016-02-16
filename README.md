# BarSport

**TODO: Add description**

- Is possible execute custom tasks after some standard tasks for ex: `mix deps.get`?

A similar experimento to **Bar Sport** is [dbeck](dbeck.github.io/Scalesmall-Experiment-Begins/).

An interesting point could be _riak core_. An explanation about it can be foudn here:


## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed as:

  1. Add bar_sport to your list of dependencies in `mix.exs`:

        def deps do
          [{:bar_sport, "~> 0.0.1"}]
        end

  2. Ensure bar_sport is started before your application:

        def application do
          [applications: [:bar_sport]]
        end

  3. Execute

## Requirments

`npm install -g webpack`

We use postgreSQL as DB and we need the username and password to connect to DB as environment variable `PGUSER` and `PGPASSWORD`.

Launch `mix create_db` to create sample database **(We DROP it if it's exist)**.

## Development

Execute `npm install` to install all the packages required by webpack and react.

To watch the modify of js for recompile with webpack run `webpack --progress --colors --watch`

To lanch the server execute `mix --no-halt`
