import Logo from '../Image/venta_logo.jpg'
import Google from '../Image/google.svg'
import React from 'react'
import { auth, provider } from '../Firebase/Firebase'
import { /*GoogleAuthProvider,*/ signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
//import Login from './Login'
//import Home from '../Views/Home'
//import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
//import Registro from '../Views/Registro'
//import { useAuthState } from 'react-firebase-hooks/auth'
//import Login from './Login'
//import Home from '../Views/Home'




function TargetLogin() {

    //const [ user] = useAuthState(auth)
    let navigate = useNavigate();
    const LoginEmail =  () => {
        
        const emailUser = document.getElementById("email").value;
        document.getElementById("email").value = '';

        const passUser = document.getElementById("pass").value;
        document.getElementById("pass").value = '';

        signInWithEmailAndPassword(auth,emailUser,passUser)
        .then((userCredential) => {
            navigate("/ventas", { replace: true })
            //const user = userCredential.user
        }).catch((error)=> {
            //const errorCode = error.code;
           // const errorMessage = error.message;
        })

        
    }
    const LoginGoogle = () => {
       
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate("/ventas", { replace: true })
                // This gives you a Google Access Token. You can use it to access the Google API.
                //const credential = GoogleAuthProvider.credentialFromResult(result);
                //const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;
                // ...
                
            }).catch((error) => {
                // Handle Errors here.
                //const errorCode = error.code;
                //const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                //const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                /*<Link to={Registro}>
                            Registrarse
                        </Link>*/
            });

    }

    //const [user] = useAuthState(auth);
    //if(user) return <Home/>

    return (
        <div className="Data">

            { /*user ?
                <Home></Home>
                :<Login></Login>*/
            }
            <div >
                <img src={Logo} className="img" 
                alt='logo'>
                </img>
            </div>
            <div className="BoxText">
                <div className="Input">

                    <input type='text' placeholder="Email" id="email"></input>
                </div>
                <div className="Input">

                    <input type='password' placeholder="Password" id="pass"></input>
                </div>

 

                <div className="Button">
                    <div className='cursor'>
                        <button className='Color_Button' onClick={LoginEmail}>
                            Login
                        </button>
                    </div>

                    <div className="Registro">
                        <nav>
                            <Link to='/Registro'>Registro</Link>
                        </nav>
                    </div>

                </div>
            </div>
            <div className="Division">
                _________________________
            </div>
            <div className='Button_firebase'>
                <button >
                    <img src={Google}
                        className="Login_img"
                        onClick={LoginGoogle}
                        alt='login'
                        >
                            
                    </img>
                </button>

            </div>
        </div>
    );
}

export default TargetLogin;