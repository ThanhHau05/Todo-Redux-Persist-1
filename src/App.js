import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { add, deletes, up, down, change } from "./redux/counter";
import { useRef, useState } from "react";
import { BiPencil } from "react-icons/bi";

function App() {
  const countRef = useRef();
  const [value, setValue] = useState("");
  const [bchange, setBChange] = useState(false);
  const counter = useSelector((state) => state.counter);
  const count = counter.value;
  const dispatch = useDispatch();
  const _handleAdd = () => {
    dispatch(add(value));
    setValue("");
    countRef.current.focus();
  };
  const _handleChange = (e, index) => {
    setValue(e);
    setBChange(true);
    countRef.current.focus();
    dispatch(change(index));
  };
  const _handlChangeText = () => {
    const InputElement = document.querySelector("#input-text");
    dispatch(change(InputElement.value));
    setValue("");
    setBChange(false);
  };
  return (
    <div className="App">
      <input ref={countRef} value={value} type="text" id="input-text" onChange={(e) => setValue(e.target.value)} />
      {!bchange ? <button onClick={_handleAdd}>ADD</button> : <button onClick={_handlChangeText}>CHANGE</button>}
      <ul id="ul-list">
        {count &&
          count.map((item, index) => (
            <li key={index}>
              <div className="container">
                <span className="text">{item}</span>
                {count.length !== 1 && !bchange && (
                  <div className="arrow-container">
                    {index !== 0 && <span onClick={() => dispatch(up(index))}>&and;</span>}
                    {index !== count.length - 1 && <span onClick={() => dispatch(down(index))}>&or;</span>}
                  </div>
                )}
                <BiPencil className="icon" onClick={() => _handleChange(item, index)} />
                {!bchange && <span onClick={() => dispatch(deletes(index))}>&times;</span>}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
