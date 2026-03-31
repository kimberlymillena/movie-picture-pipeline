import React from 'react';
import MovieList from './components/MovieList';
import './App.css';

export default function App() {
  return (
    <div className="container">
      <h1>Movie List</h1>
      <MovieList />
    </div>
  );
}
