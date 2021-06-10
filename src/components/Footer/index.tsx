import React, { ReactElement } from "react";

import "./Footer.scss";

const LicenseDetails = () : ReactElement => {
	const licenseDetails : Array<string> = ["2257", "DMCA", "Privacy Policy", "Terms of Service", "Shop"];

	return (
		<div className='license'>
			{licenseDetails.map((detail, index) => (
				<div key={index} className='license-detail'>
					<p>{detail}</p>
					<span>|</span>
				</div>
			))}
		</div>
	)
	;
};


const Footer = (): ReactElement => (
	<footer className='footer'>
		<div className='container'>
			<div className='copyright'>
				<div>
					<p>&copy;Porndora.com</p>
				</div>
				<div>
					<p>All Rights Reserved.</p></div>
			</div>
			<LicenseDetails />
		</div>
	</footer>
);

export default Footer;
