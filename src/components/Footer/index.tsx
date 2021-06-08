import React, { ReactElement } from "react"
;
import { Col, Container, Row } from "react-bootstrap";

const Footer = (): ReactElement => (
	<footer className='footer mt-auto py-3 bg-dark'>
		<Container style={{color: "white"}}>
			<Row>
				<Col>
					<p>&copy;Porndora.com</p>
				</Col>
				<Col>
					<p>All Rights Reserved</p></Col>
			</Row>
			<Row>
				<Col>
					<p>2257</p>
				</Col>
				<Col>
					<p>DMCA</p>
				</Col>
				<Col>
					<p>Privacy Policy</p>
				</Col>
				<Col>
					<p>Terms of Service</p>
				</Col>
				<Col>
					<p>Shop</p>
				</Col>
			</Row>
		</Container>
	</footer>
);

export default Footer;
