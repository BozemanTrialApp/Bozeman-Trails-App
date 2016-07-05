var React = require('react');
var UserLog = require('./userLog.js');

var UserLogData = React.createClass({

	getInitialState: function(){
		return {
			hikeName: '',
			date: '',
			miles: ''
		}
   
    },
	onHikeNameChange: function(e){
		this.setState({ hikeName: e.target.value })
	},
	onDateChange: function(e){
		this.setState({ date: e.target.value })
	},
	onMilesChange: function(e){
		this.setState({ miles: e.target.value })
	},
	handleUserLogSubmit: function(e){
		e.preventDefault();

		var user = {};

		user.profileSchema.hikeName = this.state.profileSchema.hikeName;
		user.date = this.state.date;
		user.miles = this.state.miles;
		this.props.getOneUserFromServer(user);
		this.setState({ hikeName: '', date: '', miles: ''});
	},
	render: function(){
		return (
			<div>	
        		<UserLog />
				
     		 </div>
			)
	}
});

module.exports = UserLogData;