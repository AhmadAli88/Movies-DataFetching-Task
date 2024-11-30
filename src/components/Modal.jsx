// import { Modal as BootstrapModal, Button } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// const Modal = ({ show, handleClose, movie }) => {
//   return (
//     <BootstrapModal show={show} onHide={handleClose}>
//       <BootstrapModal.Header closeButton>
//         <BootstrapModal.Title>Movie Details</BootstrapModal.Title>
//       </BootstrapModal.Header>
//       <BootstrapModal.Body>
//         {movie ? (
//           <>
//             <img src={movie.url} alt={movie.title} style={{ width: '100%' }} />
//             <h5>{movie.title}</h5>
//             <p>
//               <strong>ID:</strong> {movie.id}
//             </p>
//             <p>
//               <strong>Album ID:</strong> {movie.albumId}
//             </p>
//           </>
//         ) : (
//           <p>No movie details available</p>
//         )}
//       </BootstrapModal.Body>
//       <BootstrapModal.Footer>
//         <Button variant='secondary' onClick={handleClose}>
//           Close
//         </Button>
//       </BootstrapModal.Footer>
//     </BootstrapModal>
//   );
// };

// Modal.propTypes = {
//   show: PropTypes.bool.isRequired,
//   handleClose: PropTypes.func.isRequired,
//   movie: PropTypes.object, // Accept the selected movie details
// };

// export default Modal;

//Second Approach

import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Modal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state || {}; // Retrieve the movie details from the state

  const handleClose = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <BootstrapModal show={true} onHide={handleClose}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>Movie Details</BootstrapModal.Title>
      </BootstrapModal.Header>
      <BootstrapModal.Body>
        {movie ? (
          <>
            <img src={movie.url} alt={movie.title} style={{ width: '100%' }} />
            <h5>{movie.title}</h5>
            <p>
              <strong>ID:</strong> {movie.id}
            </p>
            <p>
              <strong>Album ID:</strong> {movie.albumId}
            </p>
          </>
        ) : (
          <p>No movie details available</p>
        )}
      </BootstrapModal.Body>
      <BootstrapModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </BootstrapModal.Footer>
    </BootstrapModal>
  );
};

Modal.propTypes = {
  movie: PropTypes.object,
};

export default Modal;

