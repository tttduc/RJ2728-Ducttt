import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import anh from "./picture/conuntry.webp";
import Blockui1 from "./components/homework/session02/Blockui1/Blockui1";
import BlockUI2 from "./components/homework/session02/blockui2/BlockUI2";
import BlockUI3 from "./components/homework/session02/Blockui3/BlockUI3";
import BlockUI4 from "./components/homework/session02/Blockui4/BlockUI4";
import BlockUI5 from "./components/homework/session02/Blockui5/BlockUI5";
import BlockUI6 from "./components/homework/session02/Blockui6/BlockUI6";
import BlockUI7 from "./components/homework/session02/Blockui7/BlockUI7";
import Ss03 from "./components/example/session03/session03";
import Btnlike from "./components/homework/session03/Buttonlike/Btnlike";
import Btnrate from "./components/homework/session03/Buttonlike/Btnrate";
import ImageViewer from "./components/homework/session03/Buttonlike/ImageViewer";
import Countdown from "./components/example/4-LifecycleComponent/Countdown";
import CountClass from "./components/example/4-LifecycleComponent/Countdown/CountClass";
import ChangeColor from "./components/example/ex/ChangeColor";
import ListUser from "./components/example/ListUser/User/ListUser";
import Tab from "./components/homework/session03/Ex4,5,6/Tab";
import Accordions from "./components/homework/session03/Ex4,5,6/Accordions";
import Gallery from "./components/homework/session03/Ex4,5,6/Gallery";
import UserForm from "./components/example/ListUser/Form/UserForm";
import Login from "./components/homework/web/Auth/Login";
import BaseWebRouter from "./components/homework/web/BaseWebRouter";
import FormAgent from "./components/homework/web/Form/FormAgent";
function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      {/* <FormAgent/> */}
      <>
        {isLogin ? (
          <BaseWebRouter setIsLogin={setIsLogin} />
        ) : (
          <Login setIsLogin={setIsLogin} />
        )}
      </>
      {/* <UserForm/> */}
      {/* <Detail/> */}
      {/* <Gallery/> */}
      {/* <ImageViewer/> */}
      {/* <Accordions/> */}
      {/* <Tab/> */}
      {/* <ListUser/> */}
      {/* <ChangeColor/> */}
      {/* <CountClass/> */}
      {/* <Countdown/> */}
      {/* <Btnrate/>  */}
      {/* <Btnlike/> */}
      {/*  <Ss03/>  */}
      {/* <Blockui1/> */}
      {/*  <BlockUI2/> */}
      {/* <BlockUI3/> */}
      {/* <BlockUI4/> */}
      {/* <BlockUI5/> */}
      {/* <BlockUI6/> */}
      {/* <BlockUI7/> */}
      {/* <div className="bigbox">
      <header>
        <h2>The pulpit rock</h2>
      </header>
      <div className="bottomm">
        <div className="row left col-12 col-md-3 col-content">
          <div className="The">
            <p className="p-4 mx-3 border-bottom">The Drive</p>
            <p className="p-4 mx-3 border-bottom">The Walk</p>
            <p className="p-4 mx-3 border-bottom">The Return</p>
            <p className="p-4 mx-3 border-bottom">The End</p>
          </div>
        </div>
        <div className=" mid col-12 col-md col-content">
          <div className="mid__word">
            <h1>The Walk</h1>
            <p>
              The walk to the Pulpit Rock will take you approximately two hours,
              give or take an hour depending on the weather conditions and your
              physical shape.
            </p>
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">s
                <div className="carousel-item active">
                  <img
                    src={anh}
                    className="anh1"
                  ></img>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="right col-12 col-md-3 col-content p-">
          <div className="right_word border bg-info p-2">
            <h2>What?</h2>
            <p>
              The Pulpit Rock is a part of a mountain that looks like a pulpit.
            </p>
            <h2>Where?</h2>
            <p>The Pulpit Rock is in Norway</p>
            <h2>Price?</h2>
            <p>The walk is free!</p>
          </div>
        </div>
      
    </div>
    </div>  */}
    </>
  );
}

export default App;
