import React, { useEffect, useState } from 'react'


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
        <form onSubmit={handleSubmit}>
            <input type="text"
                defaultValue={userName}
                onChange={handleChangeUserName} 
            />

            <input type="password"
                defaultValue={password}
                onChange={handleChangePassword} />
            <button type="submit">Submit</button>
        </form>
    );
};
export default Login;