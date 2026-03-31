import React, { useEffect, useState } from 'react';

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const baseUrl = process.env.REACT_APP_MOVIE_API_URL || 'http://localhost:5000';
    fetch(`${baseUrl}/movies`)
      .then((res) => res.json())
      .then((data) => setMovies(data.movies || []))
      .catch(() => setMovies([]));
  }, []);

  return (
    <div>
      <ul>
        {movies.map((m) => (
          <li key={m.id || m.title} style={{ cursor: 'pointer' }}>
            {m.title}
          </li>
        ))}
      </ul>
    </div>
  );
}