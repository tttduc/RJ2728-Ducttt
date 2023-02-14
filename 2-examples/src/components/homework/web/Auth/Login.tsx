import React, { useEffect, useState } from 'react'
import styles from "./Login.module.css"

interface IProps {
    setIsLogin: (value: boolean) => void;
}

const Login: React.FC<IProps> = (props) => { 
    
    const { setIsLogin } = props;
    /* const [searchParams, setSearchParams] = useSearchParams(); */
    const [userName, setUserName] = useState<string>();
    const [password, setPassword] = useState<string>();

    useEffect(() => {
        /* const useID = searchParams.get("id");
        console.log('useID', useID); */
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log( userName, password);
        if (userName === "aptech" && password === "aptech") {
            console.log(1);
            setIsLogin(true);
            alert("Login success !!!")
          } else {
            console.log(0);
            alert("Login fail !!!")
          }
    }

    const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        const tempValue = e.target.value;
        setPassword(tempValue);
    };

    return (
      <div className={styles.gradientborder}>
        <form 
      onSubmit={handleSubmit}
      className= {`{styles.formlayout},w-50 mx-auto border border-success mt-5 mb-5`}
    >
      <div className="mb-3 ms-5 me-5">
        <label className="form-label text-info">Name</label>
        <input
        className="form-control border-success"
          type="text"
          name="userName"
          defaultValue={userName}
          onChange={handleChangeUserName}
        />
      </div>
      <div className="mb-3 ms-5 me-5">
        <label className="form-label text-info">Password</label>
        <input
        className="form-control border-success"
          type="password"
          name="userAge"
          defaultValue={password}
          onChange={handleChangePassword}
        />
      </div>

      <button type="submit" className="btn btn-success ms-5 mb-5">Login</button>
    </form> 
    </div>
    );
};
export default Login;