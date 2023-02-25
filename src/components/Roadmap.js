import Unit from "./Unit";

const RoadMap = ({displayLesson}) => {
    return (
        <div>
            <Unit displayLesson={displayLesson} number={1} id={0}/>
            <Unit displayLesson={displayLesson} number={2} id={1}/>
        </div>
    )
}

export default RoadMap;