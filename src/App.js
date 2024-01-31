import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom"
import {useState, useEffect} from "react"

function App() {
    const [users, SetUsers] = useState([])

    useEffect(()=>{
      fetch("http://localhost:4000/users")
      .then((r)=>r.json())
      .then((data)=>SetUsers(data))
      .catch(error => console.log.error(error))
    }, [])

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Outlet context={users}/>
    </>
  );
};

export default App;
