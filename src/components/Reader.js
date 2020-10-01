import React, { Component } from 'react'

class Reader extends Component {
    
    
    state = {
        texts : [
            {
            titre : "Le premier texte"
            ,pages : ["La premiere page du premier texte", "la deuxieme page", "La troisieme page"] 
            },
            
            {
                titre : "Le deuxieme texte"
                ,pages : ["La premiere page du deuxieme texte", "la deuxieme page"] 
            },
        ],
        page : 0
    }
    
    getNextPage = () =>{
        this.setState({
            page : this.state.page + 1 
        })
    }

    getPreviousPage = () =>{
        this.setState({
            page : this.state.page - 1 
        })
    }
    
    render() {

        var previousButton = this.state.page === 0 ? null : (<button onClick = {this.getPreviousPage}>&lt; Précedent</button>) ;
        var nextButton = 
            this.state.page === this.state.texts[this.props.textNumber].pages.length - 1 ? null : (<button onClick = {this.getNextPage}>Suivant &gt;</button>) ;

        return (
            <div>
                <header>
                    <h1>{this.state.texts[this.props.textNumber].titre}</h1>
                </header>

                <div className = "reading-screen">
                    <p>{this.state.texts[this.props.textNumber].pages[this.state.page]}</p>
                </div>
                
                <div className = "reader-buttons">
                    {previousButton}
                    {nextButton}
                </div>
                
                <button onClick = {() => this.props.changeMenu(0)}>Retour</button>
            </div>
        )
    }
}

export default Reader;