import React from 'react';
import github from './github.jpg';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github profile</h1>
      <form >
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control" 
              required></input>
            <span className="input-group-btn"></span>
            <button type="submit" className="btn btn-success">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="py5"></div>
      <img src={github} className="responsive rounded-circles" alt="" height="200px"></img>
    </div>
  );
}

export default App;
