import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './Home.css';

const Home = () => {

  return (
    <div>
      <h1>Bee Hired React Demo</h1>
    <Card>
      <Card.Body>
        <Card.Text className="home">
          <Link to="/upload">Upload Question</Link>
          <Link to="/quiz">Take Quiz</Link>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Home;