import React, { useState } from "react";
import { connect } from "react-redux";
import { registerSupporter, registerOrganization } from "../actions/actions";
import { Link, Redirect } from "react-router-dom";

function Register(props) {
    const loggedIn = localStorage.getItem("token");
    const [info, setInfo] = useState({ name: "", password: "" })
    const [check, setCheck] = useState({ checked: false })
    const onChange = event => {
        setInfo({ ...info, [event.target.name]: event.target.value })
        console.log(info, check);
    }

    const onChangeBox = event => {
        setCheck({ checked: event.target.checked })
        console.log(info, check);
    }

    const onSubmit = event => {
        if(check.checked === false) {
            event.preventDefault();
            props.registerSupporter(info);
            console.log(info, check);
            setTimeout(() => {
                props.history.push("/");
            }, 3000)

        } else {
            event.preventDefault();
            props.registerOrganization(info);
            console.log(info, check);
            setTimeout(() => {
                props.history.push("/");
            }, 3000)
        }
    }
    if(!loggedIn) {
        return (
            <div className='news-container'>
            <nav className='nav-bar'>
                <span>Save The Animals Project</span>
            </nav>
            <h3 className="h3update">Welcome to our app! Please create an account to see all of the amazing campaigns hoping to raise money to save the animals!</h3>
            
            <form className='input-body' onSubmit={onSubmit}>
                <label>Username: </label>
                <input className="inputmargin" onChange={onChange} type="text" placeholder="Username" name="name" />
                <label>Password: </label>
                <input className="inputmargin" onChange={onChange} type="password" placeholder="Password" name="password" />
                <label>Organization? </label>
                <input className="inputmargin" onChange={onChangeBox} type="checkbox" checked={check.checked} />
                <button className="button" type="submit">Register</button>
                <Link to="/login">Need to login instead?</Link>
            </form>
            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
}

export default connect(null, { registerSupporter: registerSupporter, registerOrganization: registerOrganization })(Register);