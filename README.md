# BarSport

Simple chat server, a similar experimento to **Bar Sport** is [dbeck](dbeck.github.io/Scalesmall-Experiment-Begins/).An interesting point could be _riak core_. An explanation about it can be foudn [here](http://basho.com/posts/business/introducing-riak-core/).

## Requirments

Execute `npm install -g webpack` to install webpack. We suggest at least node v4.xx. We use postgreSQL as DB and we need the username and password to connect to DB as environment variable `PGUSER` and `PGPASSWORD`. Launch `mix create_db` to create sample database **(We DROP it if it's exist)**. And also `MIX_ENV=test mix create_db` to create DB for tests.

Execute `npm install` to install all the packages required by webpack and react. Execute `mix deps.get` to get all required packages. To lanch the server execute `mix --no-halt`. If ou modify the elxir sources it will be automaticcaly recompiled and loaded in your server and also in your console, if it is executed as `iex -S mix`.


## Development

Execute `npm install` to install all the packages required by webpack and react.
Execute `mix deps.get` to install all the packages required by exlixir.

To watch the modify of js for recompile with webpack run `webpack --progress --colors --watch`

To lanch the server execute `mix run --no-halt`

## Questions
- Is possible execute custom tasks after some standard tasks for ex: `mix deps.get`? If it's possible we can attach `npm install` ot it.
