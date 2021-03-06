import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [points, setPoints] = useState(Array.apply(null, Array(anecdotes.length)).map(Number.prototype.valueOf,0));

  const [selected, setSelected] = useState(0);

  const handleClick = () => {
    const random = Math.floor(Math.random() * (anecdotes.length - 1));
    return setSelected(random);
  }

  const voteThis = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  }

  const max = points.reduce(function(a, b) { return Math.max(a, b); });
  const indexOfMax = points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <button onClick={voteThis}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfMax]} has {max} votes</p>
    </div>
  );
}

export default App;
