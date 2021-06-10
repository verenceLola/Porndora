import React, { ReactElement } from "react";

interface HeaderProps {
    loggedIn: boolean
}

const Header = (props: HeaderProps) : ReactElement => {
	const {loggedIn=false} = props;

	return (
		<div >
			<div>
				<img  src="https://cdn.kickoffpages.com/assets/155209/bdff6848-0bb3-44b5-99ce-2b6475615ff8/gd6x0l965n86l2me0f25/porndora_logo_NoTag@2x.png" alt="porndora-logo" />
			</div>
			<div className='justify-content-end'>
				{!loggedIn && <>
					<button type="button"  className='rounded-pill mx-2' >Join Now</button>
					<button type='button' className='rounded-pill' >
						<span className='sr-only'>Sign In</span>
						<span>1</span>
					</button></>}
			</div>
		</div>
	);
};


export default Header;
