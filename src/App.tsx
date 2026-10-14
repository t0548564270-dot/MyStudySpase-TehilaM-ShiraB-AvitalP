import './App.css';
import StudyChecklist from './components/StudyChecklist';
import StudyTime from './components/StudyTime';
import Motivation from './components/Motivation';

function App() {
  return (
    <div className="app-container">
      <h1>My Study Space💖</h1>
   <div className="components-row">
        <div className="checklist-wrapper"><StudyChecklist /></div>
        <div className="time-wrapper"><StudyTime /></div>
        <div className="motivation-wrapper"><Motivation /></div>
      </div>
    </div>
  );
}

export default App;