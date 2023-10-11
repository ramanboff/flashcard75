import { useState } from "react";

const FlashCard = ({questions}) => {

const [selectedId, setSelectedId] = useState(null)


const handleClick = (id) => {
  setSelectedId(id)
}

  return ( 
    <div className="flashcards">
 {questions.map((question) => (
  <div
   key={question.id} 
   className={question.id === selectedId? "selected": ""}
   onClick={() => handleClick(question.id)}
   >
    <p>{question.id === selectedId ? question.answer : question.question}</p>
  </div>
 ))}
    </div>
   );
}
 
export default FlashCard;