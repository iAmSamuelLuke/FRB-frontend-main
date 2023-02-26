import XPbar from "./elements/XPbar";
import '../css/profile.css';

const Profile = ({displayJobs, displayMindMap, displayMain, name, XP, experience, description, xpLevel, uid}) => {
  return (
    <div>
      <div className="wrapper">
    		<div className="row-wrapper">
        	<div className="profile-sidebar">
            <div className="profile-circle">
							<div style={{paddingLeft: '2.5vw', paddingTop: 75, width: '15vw'}}>your profile pic here</div>
            </div>
            <div className="user-info">
              <h3>{name}</h3>
            </div>
            <XPbar max={125} value={XP}/>
						<button className='continue-learning-button' onClick={() => displayMain(uid, name)}>Continue Learning</button>
        	</div>

					<div className='user-profile-links-wrapper'>	
						<div className='mega-button-wrapper'>
							<button className='mega-button' onClick={displayJobs}>
								Jobs
							</button>
							<p className='mega-button-desc'>Look through job opportunities that are in line with the language(s) you have been studying</p>
						</div>
						<div className='mega-button-wrapper'>
							<button className='mega-button' onClick={displayMindMap}>
								Mind Map
							</button>
							<p className='mega-button-desc'>Wondering what languages to start with? This diagram may be able to help you.</p>
						</div>
					</div>
    		</div>
			</div>
    </div>
  );
}

export default Profile;