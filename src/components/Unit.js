import Lesson from "./elements/Lesson";
import '../css/unit.css';

const Unit = ({number}) => {
    return (
        <div className="unit-graphic-wrapper">
            <p className="unit-header">Unit {number}</p>
            <div className='unit-lessons'>
                <Lesson number={1} marginLeft="calc(25vw - 30px)" color="rgb(4, 160, 4)" shadow="0 7px rgb(0, 132, 0)"></Lesson>
                <Lesson number={2} marginLeft="calc(28vw - 30px)"></Lesson>
                <Lesson number={3} marginLeft="calc(30vw - 30px)"></Lesson>
                <Lesson number={4} marginLeft="calc(28vw - 30px)"></Lesson>
                <Lesson number={5} marginLeft="calc(25vw - 30px)"></Lesson>
            </div>
        </div>
    )
}

export default Unit;