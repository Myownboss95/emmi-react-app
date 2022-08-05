import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imageFile from './images/Image-01.jpeg';

const PostComponent = ({posts}) => {
  
  return (
          <Row>
            {/* <h2>{name}</h2> */}
             
                          {
              posts.map(
                (post) => (

                  <Col xs={12} md={4} lg={3} key={post.id}>
                    <Card style={{ width: '18rem', margin: '10px' }}>
                      <Card.Img variant="top" src={imageFile} />
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <small>Written by {post.author}</small>
                        <Card.Text>
                          {post.body}
                        </Card.Text>
                        <Button variant="outline-primary">Read More</Button>
                        {/* <Button variant="danger" onClick={()=>deletePost(post.id)}>Delete Post</Button> */}
                      </Card.Body>
                    </Card>
                  </Col>
                )
              )
            } 
  </Row>
     );
}

export default PostComponent;