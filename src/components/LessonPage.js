import { useEffect, useState } from "react";
import '../css/lessonpage.css';

const LessonPage = ({id, displayMain, setUserXP, currXP, username, userID}) => {

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

            if(lesson_data[key].id === id){
                console.log((lesson_data[key].content))
                lid = JSON.parse(lesson_data[key].content);
                console.log(lid);
                fetch_lesson(lid);
            }
        })
    }

    const [lesson, setLesson] = useState([]);
    const [current, setCurrent] = useState(0);
    const [correct, setCorrect] = useState('');
    const [xp, setXP] = useState(0);
    const [cancontinue, setCanContinue] = useState(false);



    // fetch lesson object based on the id variable here
    const fetch_lesson = (/*lid*/) => {

        setLesson([
            ['q1', 'a1'], ['q2', 'a1'], ['q3', 'a1'], ['q4', 'a1']
        ]);
    }

    // This hook will call the fetch-lesson function when the page is first rendered
    useEffect(() => {
        // getContent(); use getContent if you are connected to sql
        fetch_lesson();
    }, [])

    const updateCoins = async (username) => {

        let user = {username};

        let response = await fetch('http://localhost:8080/users/setCoins', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        });

        let data = await response.json();
        console.log(data);

    }

    const view_next = () => {
        let temp = document.getElementById('next-button').innerHTML;
        let temp2 = document.getElementById('correct-answer').innerHTML;
        if (temp === 'Finish Lesson') {
            displayMain(1, username);
        }
        else if (current === lesson.length - 1 && temp2 === 'Correct!') {
            console.log(current)
            console.log(lesson.length)
            document.getElementById('next-button').innerHTML = 'Finish Lesson';
            updateCoins(username)
        }
        else if (correct === 'Correct!') {
            console.log(temp2);
            setCurrent(current + 1);
            setCanContinue(false);
            setCorrect('');
            document.getElementById('answer').value = '';
        }
    }

    const check_answer = () => {
        let attempt = document.getElementById('answer').value.toUpperCase();
        let temp = document.getElementById('correct-answer').innerHTML;
        if (attempt === lesson[current][1].toUpperCase()) {
            setCorrect('Correct!');
            setCanContinue(true);
            if (temp!=='Correct!') {
                setUserXP(currXP + 5);
                // updateXP(username, currXP); Leave this in if you are connected to SQL
            }
        }
        else {setCorrect('Sorry, try again'); setCanContinue(false); }
    }

    const updateXP = async (username, xp) => {

        let user = {username, xp};

        let response = await fetch('http://localhost:8080/users/setXP', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(user)
        });

        let data = await response.json();
        console.log(data);
    }


    return (
        <div>
            {(lesson.length > 0 && current <= lesson.length) ?
            <div className="lessonpage-wrapper">
                <div className="lessonpage-question">{lesson[current][0]}?</div>
                <div className='lessonpage-answer-form'>
                    <div className='lessonpage-answer-label'>Type your answer: </div>
                    <input className='lessonpage-answer-input' id='answer'></input>
                </div>
                <div className='lessonpage-button-pane'>
                    <button className='lessonpage-button' onClick={() => displayMain(userID, username)} id='return-button'>Back to Main</button>
                    <button className='lessonpage-button' onClick={check_answer} id='check-button'>Check Answer</button>
                    <button className='lessonpage-button' onClick={view_next} id='next-button' disabled={!cancontinue} 
                        style={{cursor: (cancontinue === false) ? 'not-allowed' : 'pointer'}}>Next Question</button>
                </div>
                <div id='correct-answer'>{correct}</div>
            </div> : null
            }
        </div>
    )
}

export default LessonPage;
