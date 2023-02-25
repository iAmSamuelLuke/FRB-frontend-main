import Lesson from "./elements/Lesson";
import '../css/unit.css';

const Unit = ({number, displayLesson, id}) => {
    return (
        <div className="unit-graphic-wrapper">
            <p className="unit-header">Unit {number}</p>
            <div className='unit-lessons'>
                <Lesson displayLesson={displayLesson} number={1} id={5*id + 1} marginLeft="calc(25vw - 30px)"></Lesson>
                <Lesson displayLesson={displayLesson} number={2} id={5*id + 2} marginLeft="calc(28vw - 30px)"></Lesson>
                <Lesson displayLesson={displayLesson} number={3} id={5*id + 3} marginLeft="calc(30vw - 30px)"></Lesson>
                <Lesson displayLesson={displayLesson} number={4} id={5*id + 4} marginLeft="calc(28vw - 30px)"></Lesson>
                <Lesson displayLesson={displayLesson} number={5} id={5*id + 5} marginLeft="calc(25vw - 30px)"></Lesson>
            </div>
        </div>
    )
}

export default Unit;