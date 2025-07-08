import React, { useState, useContext } from "react";
import Classes from "./Signup.module.css";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";


function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUP: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();



  const authHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      try {
        const userInfo = await signInWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signIn: false });
        navigate(navStateData?.state?.redirect || "/");
      } catch (err) {
        setError(err.message);
        setLoading({ ...loading, signIn: false });
      }
    } else {
      setLoading({ ...loading, signUP: true });
      try {
        const userInfo = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({
          type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({ ...loading, signUP: false });
        navigate(navStateData?.state?.redirect || "/");
      } catch (err) {
        setError(err.message);
        setLoading({ ...loading, signUP: false });
      }
    }
  };

  const validateForm = () => {
    if (!email || !password) {
      setError("Please fill in all fields");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      authHandler(e);
    }
  };

  return (
    <section className={Classes.login}>
      <Link to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon Logo"
        />
      </Link>
      <div className={Classes.login__container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
              <small
              style={{ 
                padding: "5px", 
                textAlign: "center", 
                color: "red", 
                fontWeight: "bold" }}>
                {navStateData?.state?.msg}
              </small>
            )}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            name="signin"
            className={Classes.login__signInBotton}
            disabled={loading.signIn || loading.signUP}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="button"
          onClick={handleSubmit}
          name="signup"
          className={Classes.login__registerButton}
          disabled={loading.signIn || loading.signUP}
        >
          {loading.signUP ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
