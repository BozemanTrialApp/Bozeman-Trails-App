var React = require('react');
var Link = require('react-router').Link;
var Trails = require('./trails.js');

var Profile = require('./profile.js');



var Home = React.createClass({
	render: function(){
		return(
			<div>
			<div className = "homecontainer"> 
			<div className = "maindivhome">
			<div className = "container homepage">
				
				

				<div className>
				<Link to='/trails'> 
						<button className=" btn waves-effect waves-dark btn-med mainbuttonhome">T r a i l s</button>
				</Link>

				</div>
				{this.props.children}

			</div>

			</div>
			</div>
			</div>
			
			)
	}
});
module.exports = Home;