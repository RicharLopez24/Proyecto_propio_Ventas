//import { Alert } from '@mui/material';
import Logo from '../Image/venta_logo.jpg'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth, database } from '../Firebase/Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ref, set } from 'firebase/database';

function Registro() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [user] = useAuthState(auth)
    const dbUser = database

    const mensaje = () => {
        const emailUser = document.getElementById("email").value;
        document.getElementById("email").value = '';

        const passUser = document.getElementById("pass").value;
        document.getElementById("pass").value = '';

        setEmail(emailUser)
        setPass(passUser)

        console.log(emailUser, passUser);

        createUserWithEmailAndPassword(auth, emailUser, passUser)
            .then((userCredential) => {
                console.log('creacion de usuario');
                const user = userCredential.user;
                console.log(user);
                set(ref(dbUser, 'Tienda/users/' + user.uid), {
                    uid: user.uid,
                    email: emailUser,

                });
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                //Alert.alert(error.message)
            })

            console.log(email,pass,user)
    }

    return (
        <div className="App-header-registro">
            <div className='Target'>
                <div className='Data-re'>
                    <h1>Registro</h1>
                    <div >
                        <img src={Logo} className="img" alt='logo'>
                        </img>
                    </div>
                    <div className='BoxText'>
                        <div className="Input">

                            <input placeholder='email'
                                id="email"
                            ></input>
                        </div>

                        <div className="Input">

                            <input placeholder='pass'
                                id="pass" secureTextEntry={true}></input>
                        </div>



                        <div className="Button">

                            <button onClick={mensaje}>

                                <nav>
                                    <Link to='/'>resgistrase</Link>
                                </nav>
                            </button>
                            <button onClick={mensaje}>

                                <nav>
                                    <Link to='/'>cancelar</Link>
                                </nav>
                            </button>


                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Registro