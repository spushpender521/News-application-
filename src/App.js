
import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
   pagesize=15
  

   state={
    progress: 0
   }

setprogress=(progress)=>{
      this.setState({
         progress:progress
      })
  }
   

  render() {
    return (
      <div>
         <Router>
         <Navbar/>
         <LoadingBar
          height={3}
           color='black'          
           progress={this.state.progress}/>
         <Routes>
          <Route exact path="/General" element={ <News  setprogress={this.setprogress}    key={"general"} pagesize={this.pagesize}  country={"us"}   category={"general"}/>}/> 
          <Route exact path="/Business" element={ <News setprogress={this.setprogress}    key={"business"} pagesize={this.pagesize}  country={"us"}   category={"business"}/>}/> 
          <Route exact path="/Entertainment" element={<News setprogress={this.setprogress}  key={"entertainment"} pagesize={this.pagesize}  country={"us"}   category={"entertainment"}/>}/> 
          <Route exact path="/Health" element={ <News  setprogress={this.setprogress}    key={"health"} pagesize={this.pagesize}  country={"us"}   category={"health"}/>}/> 
          <Route exact path="/Science" element={ <News setprogress={this.setprogress}   key={"science"} pagesize={this.pagesize}  country={"us"}   category={"science"}/>}/> 
          <Route exact path="/Technology" element={ <News setprogress={this.setprogress}   key={"technology"} pagesize={this.pagesize}  country={"us"}   category={"technology"}/>}/> 
          </Routes>
         </Router>
      </div>
    )
  }
}

export default App


