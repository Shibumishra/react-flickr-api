import React from 'react';
import { Link } from 'react-router-dom';

const NotHere = () => {
	
	return (
		<div className="page-container">
        	<div></div>
        	<h1 className="title">404</h1>
			<Link to='/'>Go Home Page</Link>
      	</div>
	)
};

export default NotHere;