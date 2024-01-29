import { useEffect, useState } from 'react';
import '../index.css';
import Col from 'react-bootstrap/Col';
import axios from "axios";


function Test() {

    const randomSatneLuohka = () => {
        const satneLuohkat = ["ol1pres",
        "ol2pres",
        "ol3pres",
        "gl1pres",
        "gl2pres",
        "gl3pres",
        "ml1pres",
        "ml2pres",
        "ml3pres",
        "ol1pret",
        "ol2pret",
        "ol3pret",
        "gl1pret",
        "gl2pret",
        "gl3pret",
        "ml1pret",
        "ml2pret",
        "ml3pret"]

        const randomNumber = Math.floor(Math.random() * satneLuohkat.length);
        return satneLuohkat[randomNumber];
    }

    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [score, setScore] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showScore, setShowScore] = useState(false);
    const [satnit, setSatnit] = useState([{"vearba": "leat"}]);
    const [currentSatni, setCurrentSatni] = useState<number>(0);
    const maxQuestions : number = 10;
    const [satneLuohka, setSatneLuohka] = useState<string>(randomSatneLuohka);

    useEffect(() => {
        axios.get('/satnis/vearba.json').then(response => {
            setSatnit(response.data);
            setCurrentSatni(Math.floor(Math.random() * 3));
        });
    }, []);

    // setCurrentSatni(Math.floor(Math.random() * satnis.length));
    
    const handleAnswerSelection = (questionIndex : number, selectedAnswer : string) => {
        const updatedAnswers : string[] = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);
    };


    const handleNextQuestion = () => {
        if (answers[currentQuestion] === satnit[currentSatni][satneLuohka] ) {
          setScore(score + 1);
        }
        if (currentQuestion + 1 < maxQuestions) {
            setCurrentQuestion(currentQuestion + 1);
            setCurrentSatni(Math.floor(Math.random() * satnit.length));
            console.log(Math.floor(Math.random() * satnit.length), satnit);
            setSatneLuohka(randomSatneLuohka);
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
            <p>{answers}</p>
        </div>
            ) : (
            <div>
                <h2>Question {currentQuestion + 1}</h2>
                <h3>{satnit[currentSatni]['vearba']}</h3>
                <p>{satneLuohka}</p>
                <div>
                <input
                    type="text"
                    onChange={(e) =>
                    handleAnswerSelection(currentQuestion, e.target.value)
                    }
                    className="custom-input"
                />
                </div>
                
                <button onClick={handleNextQuestion} className="btn btn-primary mt-4">Next Question</button>
            </div>
            )}
        </Col>
      </>
    )
  }
  
  export default Test