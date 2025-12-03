import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import ForgetPass from "./pages/FrogetPass";
import Profile from "./pages/Profile";
import Short from "./pages/Short";
import Own from "./pages/Own";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";

import { getAuth,onAuthStateChanged  } from "firebase/auth";
import { Navigate } from "react-router-dom";
import Spinner from "./component/Spinner";

function App() {

 const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

 if (loading) return <Spinner />; 
  return (
    <>
 <BrowserRouter>
 <Routes>
    <Route path="/" element={user ? <Navigate  to="/home" /> : <SignUp />} />

  <Route path="/home" element={<Home />}/>
  <Route path="/signin" element={<Signin />}/>
  <Route path="/forgot" element={<ForgetPass />}/>
  <Route path="/short" element={<Short />}/>
  <Route path="/profile" element={<Profile />}/>
    <Route path="/profiles" element={user ? <Navigate  to="/profile" /> : <SignUp />} />
  <Route path="/own" element={<Own />}/>
 </Routes>
 </BrowserRouter>
 <ToastContainer 
position="top-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
 </>
  );
}

export default App;
