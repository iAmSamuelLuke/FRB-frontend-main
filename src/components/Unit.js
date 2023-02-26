import Lesson from "./elements/Lesson";
import '../css/unit.css';

const Unit = ({number, displayLesson, id, lid, username, theme}) => {
    return (
        <div className="unit-graphic-wrapper">
            <p className="unit-header">Unit {number} {theme}</p>
            <div className='unit-lessons'>
                <Lesson displayLesson={displayLesson} number={1} id={5*id + 1} marginLeft="calc(27.5vw - 30px)" username={username}></Lesson>
                <Lesson displayLesson={displayLesson} number={2} id={5*id + 2} marginLeft="calc(30.5vw - 30px)" username={username}></Lesson>
                <Lesson displayLesson={displayLesson} number={3} id={5*id + 3} marginLeft="calc(32vw - 30px)" username={username}></Lesson>
                <Lesson displayLesson={displayLesson} number={4} id={5*id + 4} marginLeft="calc(30.5vw - 30px)" username={username}></Lesson>
                <Lesson displayLesson={displayLesson} number={5} id={5*id + 5} marginLeft="calc(27.5vw - 30px)" username={username}></Lesson>
            </div>
        </div>
    )
}

export default Unit;