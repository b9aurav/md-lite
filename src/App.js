import "./App.css";
import { MdInfoOutline, MdOutlineSave } from "react-icons/md";

function App() {
  return (
    <div className="main center-items">
      <div className="header center-items">
        <button className="float-left"><MdInfoOutline /></button>
        <label>
          Demo editor by <br/><a href="https://github.com/b9aurav">Gaurav</a>
        </label>
        <button className="float-right"><MdOutlineSave/> Save</button>
      </div>
      <div className="textarea center-items">
        <textarea></textarea>
      </div>
    </div>
  );
}

export default App;
