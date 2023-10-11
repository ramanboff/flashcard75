import { useState } from "react";

const FlashCard = ({questions}) => {

const [selectedId, setSelectedId] = useState(9103)

  return ( 
    <div className="flashcards">
 {questions.map((question) => (
  <div key={question.id}>
    <p>{question.id === selectedId ? question.answer : question.question}</p>
  </div>
 ))}
    </div>
   );
}
 
export default FlashCard;