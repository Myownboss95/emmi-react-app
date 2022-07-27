import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import imageFile from './images/Image-01.jpeg';

const PostComponent = (data) => {
  console.log(data);
  const posts = data.posts;

  return (
          <Row>
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