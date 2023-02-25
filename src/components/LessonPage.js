import { useEffect, useState } from "react";
import '../css/lessonpage.css';

const LessonPage = ({id}) => {

    const [lesson, setLesson] = useState([])
    const [current, setCurrent] = useState(0);

    // fetch lesson object based on the id variable here
    const fetch_lesson = async () => {
        setLesson([
            {
                question: 'first question',
                answer: 'first answer'
            },
            {
                question: 'second question', 
                answer: 'second answer'
            },
            {
                question: 'third question',
                answer: 'third answer'
            }
        ]);
    }

    // This hook will call the fetch-lesson function when the page is first rendered
    useEffect(() => {
        fetch_lesson();
    }, [])

    const view_next = () => {
        setCurrent(current + 1);
    }

    return (
        <div>
            {(lesson.length > 0 && current <= lesson.length) ? 
            <div className="lessonpage-wrapper">
                <div className="lessonpage-question">{lesson[current].question}?</div>
                <div className='lessonpage-answer-form'>
                    <div className='lessonpage-answer-label'>Type your answer: </div>
                    <input className='lessonpage-answer-input'></input>
                </div>
                <div className='lessonpage-button-pane'>
                    <button className='lessonpage-button'>Check Answer</button>
                    <button className='lessonpage-button' onClick={view_next}>Next Question</button>
                </div>
                <div>right/wrong</div>
            </div> : null
            }
        </div>
    )
}

export default LessonPage;
