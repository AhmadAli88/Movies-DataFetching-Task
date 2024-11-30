import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Movies = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);

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

  return (
    <div>
      <h1>Movies</h1>
      <Container>
        <Row>
          {filteredMovies.map((movie) => (
            <Col lg={4} md={6} sm={12} key={movie.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={movie.thumbnailUrl}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
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
