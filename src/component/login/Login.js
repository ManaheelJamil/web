import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';
export default function Login() {
    const [error, setError] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
               setError(true)
                // ..
            });
    }
    return (
        <>
            <div className='flex justify-between mt-10'>
                <div>
                    <div className="text-manaheel w-80 text-4xl text-black ">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Welcome To Our Website')
                                    .callFunction(() => {
                                        // console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    // .deleteAll()
                                    .callFunction(() => {
                                        // console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                        />
                    </div>

                    <p className='w-96 text-xs '>Get suggestions from Grammarly while you write in desktop applications and sites across the web—as you move between apps, social media, documents, messages, and emails.</p>
                    <br />
                    <img alt="" className=" shadow-2xl w-96 h-48 rounded-md" src="https://cdn.lynda.com/course/633849/633849-1601825798142-16x9.jpg" />
                </div>
                <div >
                    <div className='w-32 h-32 absolute  bg-gray-700 rounded-full'></div>
                    <div   className='border-4 pt-20 p-5 rounded-md mt-12 ml-12 opacity-75 relative w-80 bg-no-repeat bg-gray-200'>
                        <p className='mt-5'>Email</p>
                        <input type="email" placeholder='Enter your email' onClick={e=>setEmail(e.target.value)} className='border-2 w-64 h-10 rounded-md pl-5' />
                        <p className='mt-5'>Password</p>
                        <input type="password" placeholder='Enter your Password'onClick={e=>setPassword(e.target.value)} className='border-2 w-64 h-10 rounded-md pl-5' /><br />
                        <Link to="#" className='text-sm ml-1'>Forget Password</Link><Link to={"./SignUp"} className=' ml-24 text-xs'>SignUp</Link><br />
                        <button type={"submit"} onSubmit={handleLogin}  className='border-black w-64 h-10 mt-10 ring-2 ring-black rounded-md shadow-black' >Sign In</button><hr />
                        {/* {error && <span>Wrong email or password!</span>} */}
                    </div>
                </div>
            </div>
        </>
    )
}