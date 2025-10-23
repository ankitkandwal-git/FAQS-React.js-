import FaqsItem from '../FaqsItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faqs-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqsItem 
              key={eachFaq.id} 
              questionText={eachFaq.questionText}
              answerText={eachFaq.answerText}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs