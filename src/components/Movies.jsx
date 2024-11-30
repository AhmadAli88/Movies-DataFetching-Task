import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const data = await response.json();

        // Set of albumIds to filter
        const albumIdsToFilter = new Set([1]); // Add the album IDs you want

        // Filter items using the Set for quick lookups
        const filterData = data.filter((item) =>
          albumIdsToFilter.has(item.albumId)
        );

        console.log('Filtered Data:', filterData);
        setFilteredMovies(filterData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleMovieClick = (id) => {
    // Navigate to the List component with filteredMovies passed as state
    navigate(`/list/${id}`, { state: { filteredMovies } });
  };

  return (
    <div>
      <h1>Movies</h1>
      <Container>
        <Row>
          {filteredMovies.map((movie) => (
            <Col lg={4} md={6} sm={12} key={movie.id} className="mb-4">
              <Card
                onClick={() => handleMovieClick(movie.id)}
                style={{ cursor: 'pointer' }}
              >
                <Card.Body>
                  <Card.Title>{movie.id}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
