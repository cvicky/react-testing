var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

//state
//lifescycle event
//ui



class Banner extends React.Component{
	render(){
		return(
			<div> 
				<h1> 10 out of 2500 activated </h1>
			</div>
		)
	}
}

class Users extends React.Component{
	render(){
		return(
			<div>
				<h4>Name  Email	Date Signed Up </h4>
				<ul>
					<li>Beyonce yonce@4.com 4/4/4 </li>
					<li> JT		JT@jt.com 	5/1/17 </li>
				</ul> 
			</div>
		)
	}
}

class Both extends React.Component{
	render(){
		return(
			<div>
				<Banner/>
				<Users/>
			</div>
			)
	}
}


ReactDOM.render(
	<Both/>, 
	document.getElementById('app')
	)