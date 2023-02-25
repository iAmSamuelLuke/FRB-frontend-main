import Unit from "./Unit";
import '../css/roadmap.css';

const RoadMap = ({displayLesson, lid, logout}) => {
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

				<div className='profile-dropdown'>
					<button className='profile-dropdown-button'>My Profile</button>
					<div className='profile-dropdown-content'>
						<p className='profile-dropdown-link'>Profile</p>
						<p className='profile-dropdown-link' onClick={logout}>Log Out</p>
					</div>
				</div>

			</div>
    </div>
  )
}

export default RoadMap;