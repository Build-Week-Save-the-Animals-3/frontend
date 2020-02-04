import React, { useState } from "react";
import { connect } from "react-redux";
import { registerSupporter, registerOrganization } from "../actions/actions";
import { Link, Redirect } from "react-router-dom";

function Register(props) {
    const loggedIn = localStorage.getItem("token");
    const [info, setInfo] = useState({ username: "", password: "" })
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
        } else {
            event.preventDefault();
            props.registerOrganization(info);
            console.log(info, check);
        }
    }
    if(!loggedIn) {
        return (
            <form onSubmit={onSubmit}>
                <label>Username: </label>
                <input onChange={onChange} type="text" placeholder="Username" name="username" />
                <label>Password: </label>
                <input onChange={onChange} type="password" placeholder="Password" name="password" />
                <label>Organization? </label>
                <input onChange={onChangeBox} type="checkbox" checked={check.checked} />
                <button type="submit">Register</button>
                <Link to="/login">Need to login instead?</Link>
            </form>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
}

export default connect(null, { registerSupporter: registerSupporter, registerOrganization: registerOrganization })(Register);