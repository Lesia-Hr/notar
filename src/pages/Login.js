import React, { useState } from 'react';
import { useHistory, Redirect } from "react-router-dom";

import { ADMIN_USER_NAME, ADMIN_PASSWORD } from '../config/constants';
import { isAuthorized } from '../helpers/login';
// import UserPage from './Config'

function Login() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const history = useHistory();

    const submitHandler = (e) => {
        e.preventDefault();

        if ( ADMIN_USER_NAME === username && ADMIN_PASSWORD === password ) {
            document.cookie = 'isAuthorized=1';

            history.push('/config');
        } else {
            document.cookie = 'isAuthorized=0';

            alert('Ви ввели невірний логін або пароль!');
        }
    };

    if ( isAuthorized() ) {
        return <Redirect to='/config' />;
    }

    return (
        <div>
            <div className="first-screen main-backgraund-img overlay main-height">
                <div className="container">
                    <div className="notar-form-wrapper">
                        <form onSubmit={submitHandler}>
                            <h2>Авторизуйтесь будь ласка!</h2>
                            <div>
                                <input className="notar-form-input" type="text" name="username" placeholder="Введіть логін" value={username} onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div>
                                <input className="notar-form-input" type="password" name="password" placeholder="Введіть пароль" value={password} onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div>
                                <input className="notar-form-input" type="submit" name="submit" value="Увійти" />
                            </div>
                        </form>
                    </div>
                </div>  
            </div> 
        </div>
        
    )
}


export default Login;