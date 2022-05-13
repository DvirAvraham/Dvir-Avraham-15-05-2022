import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const RemoveModal = ({isShow, closeModal, cityToRemove}) => {
  return (
    <>
      <Modal show={isShow} onHide={() => closeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete City</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove {cityToRemove?.LocalizedName} from
          your favorites?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => closeModal(false)}>
            Return
          </Button>
          <Button
            variant="danger"
            onClick={() => closeModal(true, cityToRemove)}
          >
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
