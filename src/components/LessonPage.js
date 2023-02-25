import { useEffect, useState } from "react"
import Lesson from "./elements/Lesson"

const LessonPage = ({id}) => {

    const [lesson, setLesson] = useState([])

    // Async fetch lesson object based on the id variable here
    const fetch_lesson = async () => {
        setLesson([
            {
                question: 'first question',
                answer: 'first answer'
            },
            {
                question: 'second question',
                answer: 'second answer'
            }
        ]);
    }

    // This hook will call the fetch-lesson function when the page is first rendered
    useEffect(() => {
        fetch_lesson();
    }, [])


    return (
        <div>This is lesson {id}</div>
    )
}

export default LessonPage;