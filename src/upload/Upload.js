import React, { useState } from 'react';
import { Form, Card, Row, Col, FormControl, InputGroup, Button } from 'react-bootstrap';
import uploadQuestion from '../service/UploadQuestion';

const Upload = () => {
  const [question, setQuestion] = useState('');
  const [answerOne, setAnswerOne] = useState('');
  const [answerTwo, setAnswerTwo] = useState('');
  const [answerThree, setAnswerThree] = useState('');
  const [answerFour, setAnswerFour] = useState('');
  // const [correct, setCorrect] = useState(null); // original implementation with string
  const [correct, setCorrect] = useState(-1); // new implementation with index
  const [submitting, setSubmitting] = useState(false);

  function handleInput(setState, e) {
    // extra parsing goes here
    setState(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (correct >= 0 && correct <= 3) {
      // correct answer must be selected
      let incorrectAnswerArray = [
        answerOne,
        answerTwo,
        answerThree,
        answerFour
      ];
      // incorrectAnswerArray.splice(incorrectAnswerArray.indexOf(correct), 1); // original filter for correct answer
      incorrectAnswerArray.splice(correct, 1);
      setSubmitting(true);
      await uploadQuestion({
        question: question,
        correctAnswer: correct,
        incorrectAnswer1: incorrectAnswerArray[0],
        incorrectAnswer2: incorrectAnswerArray[1],
        incorrectAnswer3: incorrectAnswerArray[2],
      });
      setQuestion('');
      setAnswerOne('');
      setAnswerTwo('');
      setAnswerThree('');
      setAnswerFour('');
      setSubmitting(false);
    }
  }

  return (
    <Card>
      <Card.Header>Upload Question</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row}>
            <Col>
              <Form.Label>Question</Form.Label>
              <Form.Control type="text" placeholder="Enter your question"
                value={question}
                onChange={e => handleInput(setQuestion, e)}
              />
            </Col>
          </Form.Group>
          <InputGroup className="mb-3">
            <FormControl placeholder="Answer 1"
              value={answerOne}
              onChange={e => handleInput(setAnswerOne, e)}
            />
            <InputGroup.Append>
              <InputGroup.Radio name="correctAnswer"
                onChange={e => setCorrect(0)}
              />
            </InputGroup.Append>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Answer 2"
              value={answerTwo}
              onChange={e => handleInput(setAnswerTwo, e)}
            />
            <InputGroup.Append>
              <InputGroup.Radio name="correctAnswer"
                onChange={e => setCorrect(1)} />
            </InputGroup.Append>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Answer 3"
              value={answerThree}
              onChange={e => handleInput(setAnswerThree, e)}
            />
            <InputGroup.Append>
              <InputGroup.Radio name="correctAnswer"
                onChange={e => setCorrect(2)} />
            </InputGroup.Append>
          </InputGroup>
          <InputGroup className="mb-3">
            <FormControl placeholder="Answer 4"
              value={answerFour}
              onChange={e => handleInput(setAnswerFour, e)}
            />
            <InputGroup.Append>
              <InputGroup.Radio name="correctAnswer"
                onChange={e => setCorrect(3)} />
            </InputGroup.Append>
          </InputGroup>
          <Button type="submit" variant="primary" disabled={submitting}>
            {submitting ? 'Submitting...' : 'Upload'}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Upload;