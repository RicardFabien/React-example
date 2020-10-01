import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Reader from './components/Reader';
import Quizz from './components/Quizz'

class App extends React.Component {
  
  state = {
    menu : 0,
    text : 0,
    victories : 0,
    losses : 0
  }

  changeMenu = menuNumber => {
    this.setState({
        menu : menuNumber
    })
  }

  changeText = textNumber => {
    this.setState({
      text : textNumber
    })
  }

  addResult = result => {
    if(result === "v")
      this.setState({
        victories : this.state.victories +1
      })
    else if(result === "d")
    this.setState({
      losses : this.state.losses +1
    })
  }

  render(){

    var show;

    if(this.state.menu === 0 )
      show = (
      <div>
        <Menu changeMenu = {this.changeMenu} changeText = {this.changeText} />
        <p>Nombre de réussite = {this.state.victories}</p>
        <p>Nombre d'échec = {this.state.losses}</p>
      </div>
       )
    else if(this.state.menu === 1)
      show = (<Reader changeMenu = {this.changeMenu} textNumber = {this.state.text}/>)
    else if(this.state.menu === 2)
      show = (<Quizz changeMenu = {this.changeMenu} addResult = {this.addResult}/>)

    return (
    <div className="App">
      {show}
    </div>
    );
  }
  
}

export default App;
