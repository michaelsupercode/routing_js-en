import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Nav from './Component/Nav';
// import { Outlet } from 'react-router-dom' // Part of Nested Route Required

function App() {
  const [api, setApi] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(json => {
        console.log(json)
        setApi(json)
      })

  }, [])

  return (
    <div className="App">


      <Nav />
      <h6>test</h6>
      {api.map((ele, i) => {
        return (
          <Link key={i} to={`/detail/${ele.id}`}>{ele.name}
            <br />Username: {ele.username}
            <br /></Link>
        )
      })}

      {/* <Outlet></Outlet>  part of nested route Required */}
    </div>
  );
}

export default App;