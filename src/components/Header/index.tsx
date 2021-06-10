import React, { ReactElement } from "react";
import { useHistory } from "react-router";

import "./Header.scss";

interface HeaderProps {
    loggedIn: boolean
}

const Header = (props: HeaderProps) : ReactElement => {
	const {loggedIn=false} = props;
	const {push} = useHistory();

	return (
		<div className='nav'>
			<div className='navbar-brand' onClick={() => push("/")}>
				<img  src="https://cdn.kickoffpages.com/assets/155209/bdff6848-0bb3-44b5-99ce-2b6475615ff8/gd6x0l965n86l2me0f25/porndora_logo_NoTag@2x.png" alt="porndora-logo" />
			</div>
			<div className='navbar-items'>
				{!loggedIn && <>
					<button type="button" >Join Now</button>
					<button type='button' className="tooltip" >
						<span>Sign In</span>
						<span  className='tooltiptext'>1</span>
					</button></>}
			</div>
		</div>
	);
};


export default Header;
