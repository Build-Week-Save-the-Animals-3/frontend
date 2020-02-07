import React, { useState } from "react";
import { connect } from "react-redux";
import { getSupporterLogin, getOrganizationLogin } from "../actions/actions";
import { Link, Redirect } from "react-router-dom";

function Login(props) {
    console.log(props);
    const [credentials, setCredentials] = useState({ username: "", password: "" })
    const [check, setCheck] = useState({ checked: false })
    const loggedIn = localStorage.getItem("token");
    const onChange = event => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
        console.log(credentials, check);
    }

    const onChangeBox = event => {
        setCheck({ checked: event.target.checked })
        console.log(credentials, check);
    }

    const onSubmit = event => {
        if(check.checked === false) {
            event.preventDefault();
            props.getSupporterLogin(credentials);
            console.log(credentials, check);
            props.history.push("/")
            
        } else {
            event.preventDefault();
            props.getOrganizationLogin(credentials);
            console.log(credentials, check);
            props.history.push("/")
            
        }
    }

    if(!loggedIn) {
        return (
            <div className='news-container'>
            <nav className='nav-bar'>
                <span>Save The Animals Project</span>
            </nav>
            <h3 className="h3update">Welcome to our app! Here you can login with an existing account to help save the animals!</h3>
            <form className="input-body" onSubmit={onSubmit}>
                
                <label>Username</label>
                <input className="inputmargin" onChange={onChange} type="text" name="username" placeholder="Username" />
            
            
                <label>Password</label>
                <input className="inputmargin" onChange={onChange} type="password" name="password" placeholder="Password" />
            
                <label>Organization?</label>
                <input className="inputmargin" onChange={onChangeBox} type="checkbox" checked={check.checked} />
                
                <button className="button" type="submit">Login</button>
                <Link to="/register">Need to register instead?</Link>
            </form>
            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
}

export default connect(null, { getSupporterLogin: getSupporterLogin, getOrganizationLogin: getOrganizationLogin })(Login);