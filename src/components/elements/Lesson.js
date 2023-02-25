import '../../css/lesson.css';

const Lesson = ({number, id, marginLeft, displayLesson}) => {

    return (
        <div>
            <button style={{marginLeft: marginLeft}} className='lesson-graphic-wrapper' onClick={() => displayLesson(id)}>
                <div className='lesson-text-wrapper'>{number}</div>
            </button>
        </div>
    )
}

export default Lesson;
