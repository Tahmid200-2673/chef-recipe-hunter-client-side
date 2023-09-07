import React, { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import './ReservationWidget.css'; // Import your custom CSS for styling

const ReservationWidget = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: 1,
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the reservation data as needed.
    alert('Reservation data submitted: ' + JSON.stringify(formData));
    // You can add further logic here to display a success message or reset the form.
  };

  return (
    <Container className="reservation-container" style={{marginTop:'22rem'}}>
      <h2 className="reservation-title">Make a Reservation</h2>
      <Form onSubmit={handleSubmit} className="reservation-form">
        <Row>
          <Col md={6}>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="time">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="partySize">
          <Form.Label>Party Size</Form.Label>
          <Form.Control
            type="number"
            name="partySize"
            value={formData.partySize}
            onChange={handleChange}
            min="1"
            required
          />
        </Form.Group>
        <Form.Group controlId="fullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="reservation-button mt-5">
          Reserve Now
        </Button>
      </Form>
    </Container>
  );
};

export default ReservationWidget;
