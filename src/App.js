import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header';
import './index.css';
import Singlestory from './components/Singlestory';
import Storiespage from './Storiespage';
import Politics from './components/Politics';
import Design from './components/Design';
import Header from './components/Header';
import Tech from './components/Tech';
import Health from './components/Health';
import New from './components/New';
import Culture from './components/Culture';
import Popular from './components/Popular';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
       Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';
import  $ from 'jquery';
import { HashRouter, Route, Link, NavLink } from 'react-router-dom';

 class App extends React.Component{

state={
	stories_data:[],
	
	single_story:[],
}
 

componentDidMount =()=>{

this.getData();

  	}
getData=(e)=>{
	
	$.ajax({
				url:'http://10.90.90.97:8000/get_data',
				method:'get',
				
				dataType:'json',
				success:function(res){
						console.log(res)
						if(res.status === 'success'){
							console.log('---------', res.user)
					       this.setState({stories_data:res.user});	

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
const data = this.state.stories_data.map((index)=>
			<Row>

            <Col sm="4">
                <img src="first.jpeg" height="100px" width="100px"/>
              </Col>
              <Col sm="8"><b>Title</b>:<p>{index.title}</p>
              <p><b>category</b>{index.category}</p>
              <NavLink  to="/viewstory">viewstory</NavLink>

          </Col>
            </Row>


	);

		return(
<HashRouter>
<div class="container">
	<div class="row">
		<div class="col-lg-3 ">
			<div class="text-left"><big><b>Medium</b></big></div>
			</div>
				
			<div class="col-lg-9 text-right ">
			
				<span class="m-2 "><small>Become a member</small></span>
				<span class="m-2 text-success">sign in</span>
				<button class="btn btn-outline-success btn-md">Get started</button>
			</div>
			
		</div>
		
  <nav class="navbar-fixed-top navbar-expand-lg  navbar-light mt-1 ">
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <NavLink to="/home" class='navlink'>Home</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/newstories" class='navlink'>THE NEW NEW</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/culture" class='navlink'>CULTURE</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/tech" class='navlink'>TECH</NavLink>
    </li>
     <li class="nav-item">
      <NavLink to="/health" class='navlink'>HEALTH</NavLink>
    </li>
    
    
    
    <li class="nav-item">
      <NavLink to="/politics" class='navlink'>POLITICS</NavLink>
    </li>
    <li class="nav-item">
      <NavLink to="/design" class='navlink'>DESIGN</NavLink>
    </li>
    
    <li class="nav-item">
      <NavLink to="/popular" class='navlink'>POPULAR</NavLink>
    </li>
    
    <li class="nav-item">
     <NavLink to="/collections" class='navlink'>COLLECTIONS</NavLink>
    </li>
    
  </ul>
</nav>

<div class="row">


	</div>
<hr/>


	
	

	

		<div>
       <Route exact path="/home"  component={Header}/>
			<Route exact path="/home"  component={Storiespage}/>
     
      
 
   <Route exact path="/viewstory"  component={Singlestory}/>
   <Route exact path="/politics"  component={Politics}/>
   <Route exact path="/design"  component={Design}/>
<Route exact path="/collections"  component={Storiespage}/>
<Route exact path="/tech"  component={Tech}/>
<Route exact path="/health"  component={Health}/>
<Route exact path="/newstories"  component={New}/>
<Route exact path="/culture"  component={Culture}/>
<Route exact path="/popular"  component={Popular}/>
		</div>
	

</div>

		</HashRouter>
	



			)


			
	}
}


export default App;

