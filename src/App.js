/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./components/store/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  console.log(ctx.isLoggedIn);

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // // Check local storage for info
  // const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  // useEffect(() => {
  //   if (storedUserLoggedInInformation === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);

  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways

  //   // Save credentials into localstorage
  //   localStorage.setItem("isLoggedIn", "1");

  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;
