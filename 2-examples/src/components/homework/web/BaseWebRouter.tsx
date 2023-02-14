import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "../../common/Navigation/Navigation";

import FormAgent from "./Form/FormAgent";
import ListAgent from "./List/ListAgent";
import DetailAgent from "./Detail/DetailAgent";


interface IProps {
    setIsLogin: (value: boolean) => void;
}

function BaseWebRouter(props: IProps) {
    const { setIsLogin } = props;
    return (
        <>
            <BrowserRouter>
                <Navigation setIsLogin={setIsLogin} />
                <Routes>
                    <Route path="/" element={<ListAgent />} />
                    <Route path="/detail/:id" element={<DetailAgent />} />
                    <Route path="/form" element={<FormAgent />} />
                    <Route path="/form/:id" element={<FormAgent />} />
                    <Route
                        path="#"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>404 Page not found ☻☺</p>
                            </main>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default BaseWebRouter;