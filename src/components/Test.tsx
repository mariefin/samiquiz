import { useState } from 'react';
import '../index.css';
import Col from 'react-bootstrap/Col';


function Test() {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
          question: 'Who is the CEO of Tesla?',
          type: 'input',
          answer: 'Elon Musk',
        },
        {
          question: 'Share your feedback about this quiz:',
          type: 'input',
          answer: 'Nice',
        }
        // Add more questions here
      ];
    const handleAnswerSelection = (questionIndex : number, selectedAnswer : string) => {
        console.log(questionIndex, selectedAnswer);
        const updatedAnswers : string[] = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);
    };

    const handleNextQuestion = () => {
        console.log(answers[currentQuestion], questions[currentQuestion].answer);
        if (
          answers[currentQuestion] === questions[currentQuestion].answer ||
          JSON.stringify(answers[currentQuestion]) ===
            JSON.stringify(questions[currentQuestion].answer)
        ) {
            console.log('what');
          setScore(score + 1);
        }
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowScore(true);
        }
    };
    return (
      <>
        <Col>
            <h2>Test</h2>
            <p>Quiz</p>
            {showScore ? (
        <div>
            <h2>Quiz Complete!</h2>
            <h3>Your Score: {score}</h3>
        </div>
            ) : (
            <div>
                <h2>Question {currentQuestion + 1}</h2>
                <h3>{questions[currentQuestion].question}</h3>
                {questions[currentQuestion].type === 'input' && (
                <input
                    type="text"
                    onChange={(e) =>
                    handleAnswerSelection(currentQuestion, e.target.value)
                    }
                />
                )}
                <button onClick={handleNextQuestion} className="btn btn-primary">Next Question</button>
            </div>
            )}
        </Col>
      </>
    )
  }
  
  export default Test