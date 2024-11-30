// import { useState } from 'react';
// import { Card, Col, Container, Row } from 'react-bootstrap';
// import { useLocation, useParams } from 'react-router-dom';
// import Modal from './Modal';

// const List = () => {
//   const location = useLocation();
//   const { movieId } = useParams();
//   const { filteredMovies } = location.state || {}; // Access the passed state

//   const [show, setShow] = useState(false); // Control modal visibility
//   const [selectedMovie, setSelectedMovie] = useState(null); // Store selected movie details

//   const handleShow = (movie) => {
//     setSelectedMovie(movie); // Set the clicked movie
//     setShow(true); // Open the modal
//   };

//   const handleClose = () => {
//     setShow(false); // Close the modal
//     setSelectedMovie(null); // Clear selected movie
//   };

//   return (
//     <>
//       <div style={{ padding: '30px' }}>
//         <h3 className='mx-5'>List Component for Movie ID: {movieId}</h3>
//         {filteredMovies && filteredMovies.length > 0 ? (
//           <Container>
//             <Row>
//               {filteredMovies.map((movie) => (
//                 <Col lg={4} md={6} sm={12} key={movie.id} className='mb-4'>
//                   <Card style={{ cursor: 'pointer' }}>
//                     <Card.Body onClick={() => handleShow(movie)}>
//                       <Card.Title>
//                         <img
//                           src={movie.thumbnailUrl}
//                           alt={movie.title}
//                           width='100%'
//                         />
//                         <div style={{ fontSize: '16px' }} className='py-3'>
//                           Title:
//                           <span style={{ fontWeight: '100' }} className='mx-2'>
//                             {movie.title}
//                           </span>
//                         </div>
//                       </Card.Title>
//                     </Card.Body>
//                   </Card>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         ) : (
//           <p>No movies to display.</p>
//         )}
//       </div>

//       {/* Pass selectedMovie and handlers to the Modal */}
//       {selectedMovie && (
//         <Modal
//           show={show}
//           handleClose={handleClose}
//           movie={selectedMovie} // Pass selected movie details
//         />
//       )}
//     </>
//   );
// };

// export default List;


// Second Approach
import { useLocation, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const List = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { filteredMovies } = location.state || {}; // Get the state passed from the previous route

  const handleThumbnailClick = (movie) => {
    // Navigate to the Modal route and pass the selected movie's details as state
    navigate(`/modal/${movie.id}`, { state: { movie } });
  };

  return (
    <div style={{ padding: '30px' }}>
      <h3 className='mx-5'>List Component</h3>
      {filteredMovies && filteredMovies.length > 0 ? (
        <Container>
          <Row>
            {filteredMovies.map((movie) => (
              <Col lg={4} md={6} sm={12} key={movie.id} className='mb-4'>
                <Card style={{ cursor: 'pointer' }} onClick={() => handleThumbnailClick(movie)}>
                  <Card.Body>
                    <Card.Title>
                      <img src={movie.thumbnailUrl} alt={movie.title} width="100%" />
                      <div style={{ fontSize: '16px' }} className='py-3'>
                        Title:
                        <span style={{ fontWeight: '100' }} className='mx-2'>
                          {movie.title}
                        </span>
                      </div>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      ) : (
        <p>No movies to display.</p>
      )}
    </div>
  );
};

export default List;
