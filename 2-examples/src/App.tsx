import React from 'react';
import logo from './logo.svg';
import './App.css';
import anh from './picture/LOKI.jpg';

function App() {
  return (
    <div className="bigbox">
    <div className="card" >
  <img src={anh} className="card-img"></img>
  <div className="card-body">
    <h5 className="card-title text-warning">Trương Thế Trần Đức</h5>
    <p className="card-text text-success">Trường Đại Học Duy Tân</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Chuyên ngành Công nghệ phần mềm</li>
    <li className="list-group-item">K26 TPM7</li>
    <li className="list-group-item">Hòa Cường Bắc - Hải Châu - Đà Nẵng</li>
  </ul>
</div>
</div>
  );
}

export default App;
