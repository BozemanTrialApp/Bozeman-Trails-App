//TrailsApp
	//AllTrailsData
		//AllTrails
			//TrailsList  
	//ViewTrailData
		//TrailCard
			//TrailComments

 
var React = require('react');
var Link = require('react-router').Link;
var TrailComments = require('./trailComments.js');


var TrailCard = React.createClass({
		render: function(){
			console.log(this.props.oneTrail.comments);
	// 	  	var trailComments = this.props.oneTrail.comments.map(function(item){
	// 	return <TrailComments date = {item.date}
	// 						user = {item.user}
	// 						body = {item.body}
	// 						key = {item._id}
	// 						id = {item._id}
	// 						getId = {this.props.getId}/>
	
	// });
			var listOfComments = this.props.oneTrail.comments.map(function(item){
				console.log(item.body)
				return (
					<div>
						{item.body}
					</div>
				)
			})


			
			return(
				<div>
					<div>
						<div className =  'row'>
							<div className = 'col s12 m7'>
								<div className = 'card grey darken-4 z-depth-2'>
									<div className = 'card-content white-text'>
										<span className = 'card-title'>{this.props.oneTrail.trailName}</span>
										<ul>
											<li className = 'white-text'>Difficulty: {this.props.oneTrail.difficulty} </li>
											<li className = 'white-text'>Length: {this.props.oneTrail.length} </li>
											<li className = 'white-text'>Location: {this.props.oneTrail.location} </li>
											<li className = 'white-text'>{this.props.oneTrail.directions}</li>
											<li className = 'white-text'>Comments: {listOfComments}</li>
										</ul>
											<p className = 'white-text'> {this.props.oneTrail.description} </p>
											<div className = 'card-action'>
												<a onClick = {this.props.toggleActiveComp.bind(null, 'allTrails')}>Back to Trails</a>
											
											</div>
									</div>
								</div>
							</div>
						</div>
				    				

									<div>
										<iframe height = '600px' width ='600px' src = {this.props.oneTrail.mapUrl}/>
									</div>

									
					</div>
											
				</div>
				)



		}
		


}); 


module.exports = TrailCard;

 