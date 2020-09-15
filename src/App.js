import React, { useState } from 'react';
import github from './github.jpg';
import './App.css';

function App() {

  const [search, setSearch] = useState();
  const [userData, setUserData] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
      .then(response => response.json())
      .then(userResponse => setUserData(userResponse));
  }

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form onSubmit={handleSubmit} >
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              required
              value={search}
              onChange={handleChange}
            ></input>
            <span className="input-group-btn"></span>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="py5">
        {!userData && (
          <img src={github} className="responsive rounded-circles" alt="" height="200px"></img>

        )}

        {userData && (
          <div>

            <img src={userData.avatar_url} 
            className="responsive rounded-circles" 
            alt="" 
            height="200px"></img>

            <h1>
              <a href="https://github.com/danicampos01" target="new">
                {userData.name}
</a>
            </h1>
            <h3> {userData.location}</h3>
            <p>
              <a href={userData.blog} target="new" className="text-info">
              {userData.blog}
</a>
            </p>
          </div>

        )}




      </div>
    </div>
  );
}

export default App;
