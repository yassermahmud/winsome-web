import React from 'react';
import {
  Link,
} from 'react-router-dom';

const Login = (props) => {

	let {data} = props
	return(
		<div id='div1' >
			<div className='login '>
	  			<Link to={data.value}>{data.value}</Link>	
	   		</div>
	   		<div className={`loginImage ${data.styles}`}>
	   		</div>
		</div>
	)
}

export default Login