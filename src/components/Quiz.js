import React from 'react'
import data from './Question';

export default function Quiz() {
  const {questions} = data;
  const [queCount, setQueCount] = React.useState(0);
  const [counter, setCounter] = React.useState(600);
  React.useEffect(() => {
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1),1000);
    return () => clearInterval(timer);
  }, [counter]);
  const minutes = Math.trunc(counter/60);

  function submit() {
    console.log('Quiz submitted.')
  }
  function prevQue(){
    console.log('getting to the previous question');
    if(queCount === 0){
      setQueCount(questions.length -1)
    }else{
      setQueCount(queCount -1);
    }
  };
  function nextQue(){
    console.log('getting to the next question');
    if(queCount === questions.length -1){
      setQueCount(0);
    }else{
      setQueCount(queCount +1);
    }
  };
  function save_nextQue(){
    console.log('saving and getting to the next question');
    if(queCount === questions.length -1){
      setQueCount(0);
    }else{
      setQueCount(queCount +1);
    }
  };
  return (
    <div className='w-full bg-[#205295]'>
      <div className='quizbody'>
      <div className="utils">
        <button className="timer"><span>{minutes}min {counter%60}s</span></button>
        <button className="submit-btn" onClick={submit}>Submit</button>
      </div>
      <div className="quiz-box">
        <div className="question-box">
          <p className='question-num'><span>{questions[queCount].num}</span>.</p>
          <p className='question-title'>{questions[queCount].question}</p>
        </div>
        <div className="answer-box">
          <ul className="option-list">
            <li>{questions[queCount].options[0]}</li>
            <li>{questions[queCount].options[1]}</li>
            <li>{questions[queCount].options[2]}</li>
            <li>{questions[queCount].options[3]}</li>
          </ul>
        </div>
      </div>
      <div className="buttons">
        <button className="prev-btn" onClick={prevQue}>Previous</button>
        <button className="next-btn" onClick={nextQue}>Next</button>
        <button className="save-next-btn" onClick={save_nextQue}>Save and Next</button>
      </div>
    </div>
    </div>
  )
}
