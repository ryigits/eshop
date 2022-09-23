import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route
                        path="/"
                        element={
                            <>
                                <Header />
                                <Home />
                            </>
                        }
                    />
                    <Route
                        path="/checkout"
                        element={
                            <>
                                <Header />
                                <Checkout/>
                            </>
                        }
                    ></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
