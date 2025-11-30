import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/FrogetPass";
import Profile from "./pages/Profile";
import Short from "./pages/Short";
import Own from "./pages/Own";

function App() {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path="/home" element={<Home />}/>
  <Route path="/" element={<SignUp />}/>
  <Route path="/signin" element={<Signin />}/>
  <Route path="/forgot" element={<ForgetPass />}/>
  <Route path="/short" element={<Short />}/>
  <Route path="/profile" element={<Profile />}/>
  <Route path="/own" element={<Own />}/>
 </Routes>
 </BrowserRouter>
 </>
  );
}

export default App;
