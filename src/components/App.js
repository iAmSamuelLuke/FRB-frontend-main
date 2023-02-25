import Login from './Login'
import RoadMap from './Roadmap';
import LessonPage from './LessonPage';

import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(1);
  const [main, setMain] = useState(0);
  const [lesson, setLesson] = useState(0);
  const [id, setId] = useState(1);
  const [lesson_id, setLessonID] = useState(0);

  const show_main = (id) => {
    setLessonID(id);
    setLesson(0);
    setLogin(0);
    setMain(1);
    console.log(lesson_id)
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
        {(login === 1) ? <Login func={show_main} /> : null}
        {(main === 1) ? <RoadMap displayLesson={show_lesson} lid={lesson_id}/> : null}
        {(lesson === 1) ? <LessonPage id={id}/> : null}
      </div>
  );
}

export default App;
