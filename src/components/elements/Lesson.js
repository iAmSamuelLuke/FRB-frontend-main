import '../../css/lesson.css';

const Lesson = ({number, id, marginLeft, color, shadow}) => {

    return (
        <div>
            <button style={{marginLeft: marginLeft}} className='lesson-graphic-wrapper'>
                <div className='lesson-text-wrapper'>{number}</div>
            </button>
        </div>
    )
}

export default Lesson;
