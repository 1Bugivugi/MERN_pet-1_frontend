import React, {Fragment, useState} from "react";
import {Link} from 'react-router-dom';

const Login = (props) => {

    const initialUserState = {
        name: '',
        id: ''
    }

    const [user, setUser] = useState(initialUserState)

    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    }

    const login = () => {
        props.login(user)
    }

    return (
        <Fragment>
            <div className="submit-form">
                <div>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input
                            type="text"
                            className={'form-control'}
                            id={'name'}
                            required
                            value={user.name}
                            onChange={handleInputChange}
                            name={'name'}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="id">ID</label>
                        <input
                            type="text"
                            className={'form-control'}
                            id={'id'}
                            required
                            value={user.id}
                            onChange={handleInputChange}
                            name={'id'}
                        />
                    </div>

                    <Link to={'/'} className={'btn btn-success mt-3'} onClick={login}>
                        Login
                    </Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
