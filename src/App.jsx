import Home from "./components/Home/home"
import User from "./components/User/user"
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [darkmode, setdarkmode] = useState(null)
  const [data, setData] = useState("")
  const [value, setValue] = useState("")
  const [failed, setFailed] = useState(null)

  const getUser = () => {
    fetch(`https://api.github.com/users/${value}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setFailed(false)
      })
      .catch((error) => 
        setFailed(true)
      );
  };
  

  const handleDarkMode = () => {
    setdarkmode((prevDarkMode) => !prevDarkMode)
  }

  const handleChange = (event) => {
    setValue(event.target.value.split(" ").join('').toLowerCase())
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home handleChange={handleChange} data={data} value={value} getUser={getUser} darkmode={darkmode} handleDarkMode={handleDarkMode} failed={failed}/>} />
          <Route path="/User" element={<User data={data} value={value} getUser={getUser} darkmode={darkmode}/>} />
        </Routes>
      </Router>
    </>

  )
}

export default App

