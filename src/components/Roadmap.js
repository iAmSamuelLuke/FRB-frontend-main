import Unit from "./Unit";
import '../css/roadmap.css';
import XPbar from "./elements/XPbar";

const RoadMap = ({displayLesson, lid, logout, username}) => {
  return (
    <div className='roadmap-wrapper'>
			<div className='main-left-side-menu'>
				<div className='roadmap-menu-wrapper'>
					<div><button className='website-name'>Codelingo</button></div>
					<div className='roadmap-left-side-link'>
						<div className='profile-dropdown'>
							<button className='profile-dropdown-button'>Learn</button>
							<div className='profile-dropdown-content'>
								<button className='profile-dropdown-link'>JavaScript</button>
								<button className='profile-dropdown-link'>HTML</button>
							</div>
						</div>
					</div>
				</div>
			</div>
      <div style={{paddingTop: "4vh"}}>
        <Unit displayLesson={displayLesson} number={1} id={0} username={username}/>
        <Unit displayLesson={displayLesson} number={2} id={1} username={username}/>
      </div>
			<div className='main-right-side-menu'>
				<div className='profile-dropdown-wrapper'>
					<div style={{height: "40vh"}}>
						<div className='profile-dropdown'>
							<button className='profile-dropdown-button'>{username}</button>
							<div className='profile-dropdown-content'>
								<button className='profile-dropdown-link'>Profile</button>
								<button className='profile-dropdown-link' onClick={logout}>Log Out</button>
							</div>
						</div>
					</div>
					<div style={{margin: 'auto', width: 'fit-content'}}><XPbar max={125} value={80}/></div>
				</div>
			</div>
    </div>
  )
}

export default RoadMap;

/*
// /*wrapper class for entire side menu*/
// .outer-page-class .left-side-menu{
// 	background: rgb(104, 5, 5);
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	width:225px;
// 	height: 100%;
// 	padding: 20px 0;
// 	transition: all 0.5s ease;
// }
// /* styling for the items/buttons in the left side
// 	menu list - codelingo, lesson1, lesson2, etc..*/
// .outer-page-class .left-side-menu
// .left-side-menu-list ul li a{
// 	display: block;
// 	padding: 13px 30px;
// 	border-bottom: 1px solid #8d1010;
// 	color: rgb(241, 237, 237);
// 	font-size: 16px;
// 	position: relative;
// }
// /*styling for the icons in the left side menu list*/
// .outer-page-class .left-side-menu
// .left-side-menu-list ul li a .icon{
// 	color: #ffffff;
// 	width: 30px;
// 	display: inline-block;
// }




// <div class="left-side-menu">
// 			<div class="left-side-menu-list">
// 					<ul>
// 							<li>
// 									<a href="#" class="active">
// 											<span class="icon"><i class="fas fa-home"></i></span>
// 											<span class="item">codelingo</span>
// 									</a>
// 							</li>
// 							<li>
// 									<a href="#" class="active">
// 											<span class="icon"><i class="fa-solid fa-code"></i></span>
// 											<span class="item">Learn</span>
// 									</a>
// 							</li>
// 							<li>
// 									<a href="#" class="active">
// 											<span class="icon"><i class="fas fa-terminal"></i></span>
// 											<span class="item">Print Statements</span>
// 									</a>
// 							</li>
// 							<li>
// 									<a href="#" class="active">
// 											<span class="icon"><i class="fas fa-file-code"></i></span>
// 											<span class="item">Functions</span>
// 									</a>
// 							</li>
// 					</ul>
// 			</div>
// 	</div>
// */