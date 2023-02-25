import { useEffect, useState } from "react";
import '../css/lessonpage.css';

const LessonPage = ({id, displayMain}) => {

    let lid = [];

    async function getContent() {
        let response = await fetch("http://localhost:8080/lessons/getAllLessons", {
            method: 'GET',
            headers: {"Content-Type": "application/json"}
        })
        let lesson_data = await response.json();
        console.log(lesson_data);

        Object.keys(lesson_data).some(function (key){
            console.log(lesson_data[key].id);
            if(lesson_data[key].id == id){
                lid = JSON.parse(lesson_data[key].content);
                console.log(lid);
                fetch_lesson(lid);
            }
        })
    }

    const [lesson, setLesson] = useState([]);
    const [current, setCurrent] = useState(0);
    const[input, setInput] = useState("");

    // fetch lesson object based on the id variable here
    const fetch_lesson = (lid) => {
        var result = [];

        for(var i in lid)
            result.push([i, lid [i]]);

        console.log(result);

        setLesson(result);
    }

    // This hook will call the fetch-lesson function when the page is first rendered
    useEffect(() => {
        getContent();
    }, [])

    const view_next = () => {
        let temp = document.getElementById('next-button').innerHTML;
        let temp2 = document.getElementById('correct-answer').innerHTML;
        if (temp === 'Finish Lesson') {
            displayMain();
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

    // const check_Answer = () => {
    //     let answer = lesson[current][0];
    //     if(answer == input){
    //         console.log("correct")
    //     }
    //     else
    //         console.log("incorrect")
    // }

    const handleInput = event => {
        setInput(event.target.value);
        console.log(input);
    }

    return (
        <div>
            {(lesson.length > 0 && current <= lesson.length) ? 
            <div className="lessonpage-wrapper">
                <div className="lessonpage-question">{lesson[current][1]}?</div>
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
