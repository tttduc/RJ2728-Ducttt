import React from 'react';
import logo from './logo.svg';
import './App.css';
import anh from './picture.svg';

function App() {
  let style = {
    width: 350
  }
  return (
    <div className="card" style={style}>
  <img src={anh} className="card-img-top"></img>
  <div className="card-body">
    <h5 className="card-title text-warning">Trương Thế Trần Đức</h5>
    <p className="card-text text-success">Trường Đại Học Duy Tân</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Chuyên ngành Công nghệ phần mềm</li>
    <li className="list-group-item">K26 TPM7</li>
    <li className="list-group-item">Yến Nê 1 - Hòa Tiến - Hòa Vang - Đà Nẵng</li>
  </ul>
</div>
  );
}

export default App;
