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
                    <div className="question">{lesson[current].question}?</div>
                    <button className='' onClick={view_next}>Next Question</button>
                </div> : null
            }
        </div>
    )
}

export default LessonPage;
