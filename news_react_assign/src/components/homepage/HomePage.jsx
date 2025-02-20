import React from 'react';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const newsData = [
  {
    title: 'Chess Championship',
    subtitle: 'Chess',
    description: 'The latest updates from the world of chess championships.'
  },
  {
    title: 'Kabaddi League',
    subtitle: 'Kabaddi',
    description: 'Highlights and scores from the recent Kabaddi league matches.'
  },
  {
    title: 'Cricket World Cup',
    subtitle: 'Cricket',
    description: 'News and updates from the ongoing Cricket World Cup.'
  },
  {
    title: 'Badminton Open',
    subtitle: 'Badminton',
    description: 'Results and news from the international Badminton Open.'
  },
  {
    title: 'Volleyball Tournament',
    subtitle: 'Volleyball',
    description: 'Coverage of the latest Volleyball tournaments and matches.'
  },
  {
    title: 'Chess Grandmaster',
    subtitle: 'Chess',
    description: 'Interviews and insights from top chess grandmasters.'
  },
  {
    title: 'Carroms Championship',
    subtitle: 'Carroms',
    description: 'Updates and results from the national Carroms championship.'
  },
];

const HomePage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Sports News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
        </Navbar.Collapse>
      </Navbar>

      <Container fluid>
        <Row className="mt-4">
          {newsData.map((news, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{news.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{news.subtitle}</Card.Subtitle>
                  <Card.Text>{news.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;