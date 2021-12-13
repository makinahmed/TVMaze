import React from 'react';
import { Card, Col, } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SingleShow = (props) => {
  const { id, name, type, language, image, genres, rating } = props.singleShow.show;
  return (

    <Col xs="12" md="4" className='my-4'>
      <Card style={{ width: '18rem' }}>
        <div style={{ height: "200px" }} >
          <Card.Img variant="top" height="100%" src={image.medium} />
        </div>
        <Card.Body>
          <h2 className='m-0 p-0'>{name}</h2>
          <Card.Text >
            <p className='my-0 py-0'>Language: {language}</p>
            <p className='my-0 py-0'>Genres: {genres[0]},{genres[1]}</p>
            {
              rating.average && <p>Rating: {rating.average}</p>
            }
          </Card.Text>
          <Link style={{ display: 'block', textDecoration: 'none', color: 'white', borderRadius: '3px' }} className='bg-secondary p-2' to={`/explore/${id}`}>Explore</Link>
        </Card.Body>
      </Card>
    </Col>

  );
};

export default SingleShow;



