import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
function Navbar2() {
  return (
    <Row noGutters={true}>
      <Col>
        <Button size="lg" variant="light" block>Review</Button>
      </Col>
      <Col>
        <Button size="lg" variant="light" block>Find Roommate</Button>
      </Col>
    </Row>
  );
}
export default Navbar2;
