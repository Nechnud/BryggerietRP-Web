import React from "react";
import { Container, Row, Card, Col } from "../utilities/components-bootstrap";

export default function Regler() {
  return (
    <Container className="standardCard">
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Regler</Card.Title>
              <Card.Text>
                <p>1. Du får inte använda någon form av hack eller liknande.</p>
                <p>2. Du får inte använda någon form av glitch.</p>
                <p>3. Du får inte använda någon form av exploit.</p>
                <p>4. Du får inte använda någon form av script.</p>
                <p>5. Du får inte använda någon form av mod.</p>
                <p>6. Du får inte använda någon form av macro.</p>
                <p>7. Du får inte använda någon form av tredjepartsprogram.</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
