import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import bee from '../bee.svg';
import './Home.css';

const Home = () => {

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Tri-Bee-a React Demo</h1>
      <img src={bee} className="logo" alt="logo" />
      <Card>
        <Card.Body>
          <Card.Text className="d-flex flex-column justify-content-center align-items-center">
            <Link to="/upload">Upload Question</Link>
            <Link to="/quiz">Take Quiz</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Home;