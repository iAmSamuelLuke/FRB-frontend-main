import Login from './Login'
import RoadMap from './Roadmap';
import LessonPage from './LessonPage';

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

  const show_main = (id) => {
    setLesson(0);
    setLogin(0);
    SetlessonID(id);
    setMain(1);
    console.log(lesson_id);
  }

  const show_login = () => {
    setLesson(0);
    setMain(0);
    setLogin(1);
  }

  const show_lesson = (id) => {
    setMain(0);
    setLogin(0);
    setId(id);
    setLesson(1);
  }

  return (
    <div className="App">
      {(login === 1) ? <Login func={show_main}/> : null}
      {(main === 1) ? <RoadMap displayLesson={show_lesson} lid={lesson_id}/> : null}
      {(lesson === 1) ? <LessonPage id = {id}/> : null}
    </div>
  );
}

export default App;
