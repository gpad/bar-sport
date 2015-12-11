defmodule ChatController do
  def echo(:init, state) do
    IO.puts "#{__MODULE__} init"
    {:ok, %{state | use_topics: false}}
  end

  def echo(:terminate, state) do
    IO.puts "#{__MODULE__} terminate"
    :ok
  end

  def echo(message, state)do
    IO.puts "#{__MODULE__} message #{inspect message}"
    {:reply, {:text, String.reverse(message) |> String.upcase }, state}
  end
end
