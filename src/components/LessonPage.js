import { useEffect, useState } from "react";
import '../css/lessonpage.css';

const LessonPage = ({id, displayMain, username}) => {

    const [lesson, setLesson] = useState([])
    const [current, setCurrent] = useState(0);
    const [correct, setCorrect] = useState('');
    const [xp, setXP] = useState(0);

    // fetch lesson object based on the id variable here
    const fetch_lesson = async () => {
        setLesson([
            {
                question: 'first question',
                answer: 'first answer'
            }
            // {
            //     question: 'second question', 
            //     answer: 'second answer'
            // },
            // {
            //     question: 'third question',
            //     answer: 'third answer'
            // }
        ]);
    }

    // This hook will call the fetch-lesson function when the page is first rendered
    useEffect(() => {
        fetch_lesson();
    }, [])

    const view_next = () => {
        let temp = document.getElementById('next-button').innerHTML;
        let temp2 = document.getElementById('correct-answer').innerHTML;
        if (temp === 'Finish Lesson') {
            displayMain(1, username);
        }
        else if (current === lesson.length - 1) {
            document.getElementById('next-button').innerHTML = 'Finish Lesson';
        }
        else if (correct === 'Correct!') {
            console.log(temp2);
            setCurrent(current + 1);
            setCorrect('');
            document.getElementById('answer').value = '';
        }
    }

    const check_answer = () => {
        let attempt = document.getElementById('answer').value.toUpperCase();
        if (attempt === lesson[current].answer.toUpperCase()) {
            setCorrect('Correct!');
            setXP(xp + 5);
        }
        else setCorrect('Sorry, try again');
    }

    return (
        <div>
            {(lesson.length > 0 && current <= lesson.length) ? 
            <div className="lessonpage-wrapper">
                <div className="lessonpage-question">{lesson[current].question}?</div>
                <div className='lessonpage-answer-form'>
                    <div className='lessonpage-answer-label'>Type your answer: </div>
                    <input className='lessonpage-answer-input' id='answer'></input>
                </div>
                <div className='lessonpage-button-pane'>
                    <button className='lessonpage-button' onClick={check_answer} id='check-button'>Check Answer</button>
                    <button className='lessonpage-button' onClick={view_next} id='next-button'>Next Question</button>
                </div>
                <div id='correct-answer'>{correct}</div>
            </div> : null
            }
        </div>
    )
}

export default LessonPage;
