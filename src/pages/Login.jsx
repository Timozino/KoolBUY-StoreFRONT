import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6"; 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customer_login,messageClear } from '../store/reducers/authReducer';
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';

const Login = () => {

    const navigate = useNavigate()
    const {loader,errorMessage,successMessage,userInfo } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [state, setState] = useState({ 
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
 
    const login = (e) => {
        e.preventDefault()
        dispatch(customer_login(state))
    }

    useEffect(() => { 
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())  
        } 
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())  
        } 
        if (userInfo) {
            navigate('/')
        }
    },[successMessage,errorMessage])


    return (
        <div>
             {
                loader && <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                    <FadeLoader/>
                </div>
            }
            <Header/>
    <div className='bg-orange-100 mt-4'>
        <div className='w-full justify-center items-center p-10'>
            <div className='grid grid-cols-2 w-[60%] mx-auto bg-[#000000] rounded-md'>
                <div className='px-8 py-8'>
            <h2 className='text-center w-full text-xl text-orange-600 font-bold'>Login </h2> 

    <div>
        <form onSubmit={login} className='text-white'>
    

    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="email">Email</label>
        <input onChange={inputHandle} value={state.email}  className='text-black w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="email" name="email" id="email" placeholder='Email' required />
    </div>


    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="password">Password</label>
        <input onChange={inputHandle} value={state.password}  className='text-black w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="password" name="password" id="password" placeholder='Password' required />
    </div>

    <button className='px-8 w-full py-2 bg-[#ff5821] shadow-lg hover:shadow-orange-500/40 text-[#000000] rounded-md'>Login</button>
 
        </form>
    <div className='flex justify-center items-center py-2'>
        <div className='h-[1px] bg-orange-600 w-[95%]'> </div>
        <span className='px-3 text-white'>Or</span>
        <div className='h-[1px] bg-orange-600 w-[95%]'> </div>
    </div>

    <button className='px-8 w-full py-2 bg-blue-600 shadow hover:shadow-indigo-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
        <span><FaFacebookF /> </span>
        <span>Login With Facebook </span>
    </button>

    <button className='px-8 w-full py-2 bg-red-600 shadow hover:shadow-red-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
        <span><FaGoogle  /></span>
        <span>Login With Google </span>
    </button> 
    </div>    

    <div className='text-center text-white pt-1'>
        <p>Don't Have An Account ? <Link className='text-[#ff5821]' to='/register'> Register</Link> </p>
    </div> 

     <a target='_blank' href="http://localhost:3000/login">
     <div className='px-8 w-full py-2 bg-[#ff5821] shadow hover:shadow-red-500/50 border border-white text-[#fff] rounded-md flex justify-center items-center gap-2 mb-3'>
            Login As a Seller
     </div>
     </a>
 
     <a target='_blank' href="http://localhost:3000/register">
     <div className='px-8 w-full py-2 bg-[#ff5821] shadow hover:shadow-red-500/50 border border-white text-white rounded-md flex justify-center items-center gap-2 mb-3'>
            Register As a Seller
     </div>
     </a>



            </div> 

        <div className= 'w-full h-full py-4 pr-4'>
            <img className='bg-orange-200' src="http://localhost:3000/images/login.jpg" alt="" />
         </div>    

         </div>
        </div>
    </div>        
            
            <Footer/>
        </div>
    );
};

export default Login;