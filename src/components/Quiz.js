import React from 'react'

export default function Quiz() {
  return (
    <div className='quizbody'>
      <div className="utils">
        <button className="timer"><span>30:00</span></button>
        <button className="submit-btn">Submit</button>
      </div>
      <div className="quiz-box">
        <div className="question-box">
          <p className='question-num'><span>1</span>.</p>
          <p className='question-title'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus perspiciatis eos doloribus?</p>
        </div>
        <div className="answer-box">
          <ul className="option-list">
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
      </div>
      <div className="buttons">
        <button className="next-btn">Next</button>
        <button className="save-next-btn">Save and Next</button>
      </div>
    </div>
  )
}
