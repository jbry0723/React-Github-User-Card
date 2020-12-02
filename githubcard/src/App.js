
import './App.css';
import React from 'react'
import axios from "axios"
import Followers from "./Followers"


class App extends React.Component {
  state={
    myGithub:{},
    followers:[{name:"test"}]


  }
  componentDidMount(){
    return axios.get("https://api.github.com/users/jbry0723")
    .then((resp)=>{
      console.log("resp1",resp)
      this.setState({
        myGithub:resp.data})
        return axios.get("https://api.github.com/users/jbry0723/followers")
        .then((resp)=>{
          console.log("resp2",resp)
          this.setState({
            followers:resp.data
          })
          
    
        })
    })
    .catch(err=>console.log(err))
  }

  


 render(){
    return (
    <div className="App">
     <div>
       <h1>Name:{this.state.myGithub.name}</h1>
       Company:{this.state.myGithub.company}{"\n"}
       Email:{this.state.myGithub.email}{"\n"}
       Blog:{this.state.myGithub.blog}{"\n"}
       Followers:{this.state.myGithub.followers}{"\n"}
       </div>
       <Followers followers={this.state.followers} />
    </div>
  );
  }
}

export default App;
