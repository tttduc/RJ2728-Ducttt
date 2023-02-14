import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Navigation from "../../common/Navigation/Navigation";

import UserForm from "../../example/ListUser/Form/UserForm";
import ListUser from "../../example/ListUser/User/ListUser";

interface IProps {
    setIsLogin: (value: boolean) => void;
}

function BaseWebRouter(props: IProps) { 
    const { setIsLogin } = props;
    return (
        <>
        <BrowserRouter>
            <Navigation setIsLogin={setIsLogin}/>
            <Routes>
                <Route path="/" element = {<ListUser/>} />
                {/* <Route path="/detail/:id" element = {<DetailUser/>} /> */}
                <Route path="/form" element = {<UserForm/>} />
                <Route path="/form/:id" element = {<UserForm/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
};

export default BaseWebRouter;