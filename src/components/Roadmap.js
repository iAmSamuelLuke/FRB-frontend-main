import Unit from "./Unit";
import '../css/roadmap.css';

const RoadMap = ({displayLesson, lid}) => {
  return (
    <div className='roadmap-wrapper'>
			<div className='main-left-side-menu'>
				Content
			</div>
      <div style={{paddingTop: "4vh"}}>
        <Unit displayLesson={displayLesson} number={1} id={0}/>
        <Unit displayLesson={displayLesson} number={2} id={1}/>
      </div>
			<div className='main-right-side-menu'>
				Content
			</div>
    </div>
  )
}

export default RoadMap;