import React, { Component } from 'react'

 class Quizz extends Component {
    
    state = {
        quizz : [
            {
                question : "1+1",
                propositions : [1,2,3,4],
                answer : 2    
            },
            
            {
                question : "2+1",
                propositions : [2,3,"bateau"],
                answer : 3
            },
            
            {
                question : "3+1",
                propositions : [1,2,3,4],
                answer : 4
            }
        ],
        question : 0,
        victory : false,
        defeat : false
    }
    
    submitAnswer = (answer) => {
        if(answer === this.state.quizz[this.state.question].answer){
            if(this.state.question === this.state.quizz.length - 1){
                this.setState({
                    victory : true
                })
                this.props.addResult("v");
            }
            else
                this.setState({question : this.state.question + 1})
        }
        else{
            this.setState({defeat : true})
            this.props.addResult("d");
        }
            
    }

    render() {

        var questionNumber = this.state.question;

        var endGame = null;

        if(this.state.victory)
            endGame = "Victoire"
        if(this.state.defeat)
            endGame = "Perdu"

        return (
            <div>
                <header>
                    <h1>Quizz</h1>
                </header>

                <div>
                    Question : {this.state.quizz[questionNumber].question}

                    {
                        this.state.quizz[questionNumber].propositions.map((data, index) => {
                            return (<button onClick = {() => this.submitAnswer(data)} disabled = {this.state.victory || this.state.defeat}>{data}</button>)
                        })
                    }
                </div>

                    <p>{endGame}</p>
                <button onClick = {() => this.props.changeMenu(0)}>Retour</button>
            </div>
        )
    }
}

export default Quizz;
