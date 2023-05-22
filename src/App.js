import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [visible, setVisibile] = useState(true);
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];
  const handleChange = () => {
    setVisibile(!visible);
  };
  return (
    <div className="App">
      {/* {users.map((item)=>{
        return(
          <div>{item.name}</div>
        )
      })} */}
      <button onClick={handleChange}>{visible ? "Hide" : "Show"}</button>
      {visible && <div>{users.map((item) => item.name)}</div>}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
