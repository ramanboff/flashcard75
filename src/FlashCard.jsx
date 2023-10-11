const FlashCard = ({questions}) => {
  return ( 
    <div className="flashcards">
 {questions.map((question) => (
  <div>
    <p>{question.question}</p>
  </div>
 ))}
    </div>
   );
}
 
export default FlashCard;