import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { Modal, Button, Row, Container } from 'react-bootstrap';
import { useSelector } from "react-redux";

export default function(props){
  const { posts } = useSelector((state) => state.posts);

  const [showModal, setShowModal] = React.useState(false);
  const [currentPost, setCurrentPost] = React.useState({});

  // ON ID CHANGE
  React.useEffect(() => {
    if (props.itemId !== -1)
        showEditModal(props.itemId);
  }, [props.itemId]);

  const showEditModal = (itemId) => {
    let item = getPostById(itemId);
    setCurrentPost(item);
    setShowModal(true);
}

  const getPostById = (id) => {
    return posts.find(function( post ) {
      return post.id === id;
    });
  }

  const closeModal = () => {
    props.resetItem();
    modalSwitch();
  };

  const modalSwitch = () => {
    setShowModal(!showModal);
  };

  return(
  <>
    <Modal
            show={showModal}
            onHide={closeModal}
            backdrop="static"
            keyboard={false}
            size="xl"
        >
            <Modal.Header closeButton>
                <Modal.Title>Post details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <span className="text-muted">User: </span> <span className="text-dark">{currentPost.userId}</span><br />
              <span className="text-muted">Id: </span> <span className="text-dark">{currentPost.id}</span><br />
              <span className="text-muted">Title: </span> <span className="text-dark">{currentPost.title}</span><br />
              <span className="text-muted">Details: </span> <span className="text-dark">{currentPost.body}</span><br />
              <Container>
                <Row className="justify-content-md-center">
                    <img src="https://picsum.photos/1000/300" class="img-fluid" alt="Responsive image"></img>
                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
                <form class="form-inline justify-content-between">
                  <Button onClick={closeModal}>Close</Button>
                </form>
            </Modal.Footer>
        </Modal>
  </>)
}

