import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";

interface IProps {
  setIsLogin: (value: boolean) => void;
}
const Navigation: React.FC<IProps> = (props) => {
  const { setIsLogin } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.box}>
      <nav className="navbar navbar-expand-lg bg-dark rounded-3">
        <div className="container-fluid">
          <a className="navbar-brand text-warning">Valorant</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <Link className="nav-item text-white" to={"/"}>
                List
              </Link>
              <span>|||</span>
              <Link className="nav-item text-white" to={"/form"}>
                Form
              </Link>
              <button
                className={styles.button}
                onClick={() => 
                  {navigate(`/`)
                  setIsLogin(false)}}
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navigation;