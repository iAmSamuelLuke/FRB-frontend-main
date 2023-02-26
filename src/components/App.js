import Login from './Login'
import RoadMap from './Roadmap';
import LessonPage from './LessonPage';
import Profile from './Profile';
import JobPage from "./JobPage";
import MindMap from './elements/MindMap';

import { useState } from 'react';

function App() {
  // Whether or not the user is at the login page
  const [login, setLogin] = useState(1);

  // Whether or not we are currently at the main page
  const [main, setMain] = useState(0);

  // Whether or not we are currently rendering a lesson
  const [lesson, setLesson] = useState(0);

  // id of the lesson that the user has clicked on
  const [id, setId] = useState(1);

  // Lesson that the user is ready for
  const [lesson_id, SetlessonID] = useState(null);

  // Whether or not we are currently rendering the profile page
  const [profile, setProfile] = useState(0);

  //Whether or not we are currently rendering the Jobs page
  const [jobs, setJobs] = useState(0);

  // Whether or not we are currently displaying the mindmap
  const [mindmap, setMindMap] = useState(0);

  const[xp, setXP] = useState(0);


  // The username that is currently logged in 
  const [user, setUser] = useState('');

  const show_main = (id, username) => {
    setMindMap(0);
    setJobs(0);
    setProfile(0);
    setUser(username);
    setLesson(0);
    setLogin(0);
    SetlessonID(id);
    setMain(1);
  }

  const show_login = () => {
    setMindMap(0);
    setJobs(0);
    setProfile(0);
    setLesson(0);
    setMain(0);
    setLogin(1);
  }

  const show_lesson = (id) => {
    setMindMap(0);
    setProfile(0);
    setJobs(0);
    setMain(0);
    setLogin(0);
    setId(id);
    setLesson(1);
  }

  const show_profile = () => {
    setMindMap(0);
    setJobs(0);
    setLogin(0);
    setLesson(0);
    setMain(0);
    setProfile(1);
  }

  const show_jobs = () => {
    setMindMap(0);
    setProfile(0);
    setLogin(0);
    setLesson(0);
    setMain(0);
    setJobs(1);
  }

  const show_mindmap = () => {
    setJobs(0);
    setProfile(0);
    setLogin(0);
    setLesson(0);
    setMain(0);
    setMindMap(1);
  }

  console.log(xp);

  return (
    <div className="App">
      {(login === 1) ? <Login func={show_main} setUserXP={setXP}/> : null}
      {(main === 1) ? <RoadMap displayLesson={show_lesson} displayProfile={show_profile} lid={lesson_id} logout={show_login} username={user} userXp={xp}/> : null}
      {(lesson === 1) ? <LessonPage id={id} displayMain={show_main} setUserXP={setXP} currXP={xp} username={user} userID={lesson_id}/> : null}
      {(profile === 1) ? <Profile name={user} XP={xp} displayJobs={show_jobs} displayMain={show_main} displayMindMap={show_mindmap} uid={lesson_id}/> : null}
      {(jobs === 1) ? <JobPage displayProfile={show_profile}/> : null}
      {(mindmap === 1) ? <MindMap back={show_profile}/> : null}
    </div>
  );
}

export default App;
