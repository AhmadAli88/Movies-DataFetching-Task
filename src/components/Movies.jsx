import { useEffect, useState } from 'react';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();

        // Set of albumIds to filter
        const albumIdsToFilter = new Set([1]); // Add the album IDs you want

        // Filter items using the Set for quick lookups
        const filterData = data.filter((item) => albumIdsToFilter.has(item.albumId));

        console.log('Filtered Data:', filterData);
        setFilteredMovies(filterData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.thumbnailUrl} alt={movie.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
