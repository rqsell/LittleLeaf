import React, { Fragment, useState } from 'react';
import actions from '../../api/index'


function LogIn(props){
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        console.log(email, password)
        actions.logIn({email, password}).then(user=> {
            console.log(user.data)
            props.setUser({...user.data})  
        }).catch( response => console.error(response));

    }
    return (
        <Fragment>
            <h2 className="artimus">Log-In</h2>
            <form onSubmit={handleSubmit} className="artimusCousin">
                <input name="email" type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                <input name="password" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <input type="submit" value="Log In"/>
            </form>
        </Fragment>
    )
}

export default LogIn;

