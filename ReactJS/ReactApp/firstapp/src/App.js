import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    person : [
      {name:"Aman",age:23},
      {name:"Satyam",age:24},
      {name:"Lucky",age:25}
    ]
  }
  switchNameHandler = (newName) =>{
    //console.log("Was Clicked!");
    this.setState({
      person : [
        {name:newName,age:23},
        {name:"Satyam",age:24},
        {name:"Lucky",age:26}
      ]
    });
  }
  nameChangedHandler = (event) =>{
    this.setState({
      person : [
        {name:event.target.value,age:23},
        {name:"Satyam",age:24},
        {name:"Lucky",age:26}
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I am React App</h1>
        <button onClick={this.switchNameHandler.bind(this,"Alamjog2")}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}
        changed={this.nameChangedHandler}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}
          click={() => this.switchNameHandler("Nitin")}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}
        click={this.switchNameHandler.bind(this,"Alamjog")}> This should be the children</Person>
        <Person name="Satyam" age="23"/>

      </div>
    );
  }
}

export default App;
