import React from 'react';
import  $ from 'jquery';

import Header from './Header'
import { HashRouter,  Router, Route, Link, NavLink } from 'react-router-dom';
import { ButtonInput,Modal,Button,Panel } from 'react-bootstrap';

export default class Singlestory extends React.Component{

state:{
	stories_data:[],
}


componentDidMount =()=>{

this.getstories();

  	}
getstories=(e)=>{
	
	$.ajax({
				url:'http://10.90.90.97:8000/Singlestory',
				method:'get',
				
				dataType:'json',
				success:function(res){
						console.log(res)
						if(res.status === 'success'){
							console.log('---------', res.user)
					       this.setState({stories_data:res.doc});	

						}
						else{
							this.setState({stories_data:[]})
						}
				}.bind(this)
				,error:function(err){
					console.log('err');
				}
 
			});
}




render(){

	return(


					<div className="container mt-4">
						
						 <div className="card w-75 h-25">
					    	<div className="card-header text-left">
							<p><a href="#"> Title</a>:</p>
						 	<p><a href="#">Category</a>:</p></div>
					    	<div className="card-body text-left">
					    	<p><a  href="#">Description</a>:</p>
							<p><a href="Singlestory">Content</a></p>
						</div> 
					 
					    	<div className="card-footer text-center">

					    	</div>
					  </div> 
					  
					</div>

		);

}

}