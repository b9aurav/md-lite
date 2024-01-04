import "./App.css";
import { MdInfoOutline } from "react-icons/md";

function App() {
  return (
    <div className="main center-items">
      <div className="header">
        <button><MdInfoOutline /></button>
        <label>
          Demo editor by <a href="https://github.com/b9aurav">Gaurav</a>
        </label>
        <button className="float-right">Save</button>
      </div>
      <div className="textarea center-items">
        <textarea></textarea>
      </div>
    </div>
  );
}

export default App;
