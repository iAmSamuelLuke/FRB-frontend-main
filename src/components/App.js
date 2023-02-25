import Login from './Login'
import RoadMap from './Roadmap';

import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(1);
  const [main, setMain] = useState(0);

  let lessonID = 0;

  const show_main = (lesson_id) => {
    setLogin(0);
    setMain(1);
    lessonID = lesson_id;
  }

  const show_login = () => {
    setMain(0);
    setLogin(1);
  }

  return (
    <div className="App">
      {(login === 1) ? <Login func={show_main} /> : null}
      {(main === 1) ? <RoadMap lid={lessonID} /> : null}
    </div>
  );
}

export default App;
