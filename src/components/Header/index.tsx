import React, { ReactElement } from "react";
import { Image, Navbar, Button, Badge, Container } from "react-bootstrap";

const Header = () : ReactElement => (
	<Navbar bg='dark'>
		<Navbar.Brand href="#">
			<Image  fluid src="https://cdn.kickoffpages.com/assets/155209/bdff6848-0bb3-44b5-99ce-2b6475615ff8/gd6x0l965n86l2me0f25/porndora_logo_NoTag@2x.png" alt="porndora-logo" />
		</Navbar.Brand>
		<Container className='justify-content-end'>
			<Button type="button" size='sm' className='rounded mx-2' >Join Now</Button>
			<Button type='button' size='sm' variant='outline-primary'>
				<span className='sr-only'>Sign In</span>
				<Badge variant='dark' pill>1</Badge>
			</Button>
		</Container>
	</Navbar>
);


export default Header;
