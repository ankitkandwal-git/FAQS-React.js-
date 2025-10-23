import {Component} from 'react'

import './index.css'

const plusImage = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqsItem extends Component {
    state = {isAnswerVisible: false}
    
    toggleAnswer = () => {
        this.setState(prevState => ({
            isAnswerVisible: !prevState.isAnswerVisible
        }))
    }
    
    renderPlusMinusIcon = () => {
         const {isAnswerVisible} = this.state 
         const image = isAnswerVisible ? minusImage : plusImage
         return (
            <button className="icon-button" type="button" onClick={this.toggleAnswer}>
                <img src={image} alt="plus minus icon" className="icon" />
            </button>
         )
    }
    renderAnwerTheQuestion = () =>{
        const {isAnswerVisible} = this.state 
        const {answerText} = this.props
        if(isAnswerVisible){
           return(
            <div className="answer-container">
                <hr /> 
                <p className="answer-text">{answerText}</p>
            </div>
           )
        }
    }
    render(){
        const {questionText} = this.props
        return(
            <li className="faq-item">
                <div className="question-container">
                    <h1 className="question-text">{questionText}</h1>
                    {this.renderPlusMinusIcon()}
                </div>
                {this.renderAnwerTheQuestion()}
            </li>
        )
    }
}




export default FaqsItem