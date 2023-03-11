import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
export default function Login() {
    return (
        <>
            <div className='flex justify-around mt-10 md:flex-wrap '>
                <div className='box '>
                    <div className="text-manaheel w-80 text-4xl text-black ">
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter.typeString('Welcome To Our Website')
                                    .callFunction(() => {
                                        console.log('String typed out!');
                                    })
                                    .pauseFor(2500)
                                    // .deleteAll()
                                    .callFunction(() => {
                                        console.log('All strings were deleted');
                                    })
                                    .start();
                            }}
                        />
                    </div>

                    <p className='w-96 text-xs text'>Get suggestions from Grammarly while you write in desktop applications and sites across the web—as you move between apps, social media, documents, messages, and emails.</p>
                    <br />
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <img alt="" className=" shadow-2xl w-96 h-48 rounded-md" src="https://cdn.lynda.com/course/633849/633849-1601825798142-16x9.jpg" />
                </div>
                <div className='text'>
                    <div className='w-32 h-32 absolute  bg-gray-700 rounded-full'></div>
                    <div className='border-4 pt-20 p-5 rounded-md mt-12 ml-12 opacity-75 relative w-80 bg-no-repeat bg-gray-200'>
                        <p>UserName</p>
                        <input type="text" placeholder='Enter your name' className='border-2 w-64 h-10 rounded-md pl-5' />
                        <p className='mt-5'>Email</p>
                        <input type="text" placeholder='Enter your email' className='border-2 w-64 h-10 rounded-md pl-5' />
                        <p className='mt-5'>Password</p>
                        <input type="number" placeholder='Enter your Password' className='border-2 w-64 h-10 rounded-md pl-5' />
                        <p className='mt-5'>Confirm Password</p>
                        <input type="number" placeholder='Enter your Password' className='border-2 w-64 h-10 rounded-md pl-5' />
                       <br />
                        <Link className='text-sm '>Forget Password</Link><Link to={'/'} className='ml-5 text-xs'>Already have an account</Link><br />
                        <button className='border-black w-64 h-10 mt-10 ring-2 ring-black rounded-md shadow-black' >Sign In</button><hr />
                    
                    </div>
                </div>
            </div>
        </>
    )
}