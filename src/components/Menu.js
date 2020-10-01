import React, { Component } from 'react'

class Menu extends Component {
    render() {
        return (
            <div className = "menu-holder">
                <button onClick = {() => {this.props.changeText(0);this.props.changeMenu(1);}}>Liseur texte 1</button>
                <button onClick = {() => {this.props.changeText(1);this.props.changeMenu(1);}}>Liseur texte 2</button>
                <button onClick = {() => this.props.changeMenu(2)}>Quizz</button>
            </div>
        )
    }
}

export default Menu;