import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {

  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <Link to="/upload">Upload Question</Link>
          <Link to="/quiz">Take Quiz</Link>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Home;