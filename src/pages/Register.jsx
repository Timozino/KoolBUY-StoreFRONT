import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6"; 
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customer_register,messageClear } from '../store/reducers/authReducer';
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';
 
const Register = () => {
    const navigate = useNavigate()
    const {loader,errorMessage,successMessage,userInfo } = useSelector(state => state.auth)
 
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const dispatch = useDispatch()

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
 
    const register = (e) => {
        e.preventDefault()
        dispatch(customer_register(state))
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
    <div className='bg-slate-200 mt-4'>
        <div className='w-full justify-center items-center p-10'>
            <div className='grid grid-cols-2 w-[60%] mx-auto bg-white rounded-md'>
                <div className='px-8 py-8'>
            <h2 className='text-center w-full text-xl text-slate-600 font-bold'>Register </h2> 

    <div>
        <form onSubmit={register} className='text-slate-600'>
    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="name">Name</label>
        <input onChange={inputHandle} value={state.name} className='text-black w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" name="name" id="name" placeholder='Name' required />
    </div>

    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="email">Email</label>
        <input onChange={inputHandle} value={state.email}  className='text-black w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="email" name="email" id="email" placeholder='Email' required />
    </div>


    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="password">Password</label>
        <input onChange={inputHandle} value={state.password}  className='text-black w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="password" name="password" id="password" placeholder='Password' required />
    </div>

    <button className='px-8 w-full py-2 bg-[#059473] shadow-lg hover:shadow-green-500/40 text-white rounded-md'>Register</button>
 
        </form>
    <div className='flex justify-center items-center py-2'>
        <div className='h-[1px] bg-slate-300 w-[95%]'> </div>
        <span className='px-3 text-slate-600'>Or</span>
        <div className='h-[1px] bg-slate-300 w-[95%]'> </div>
    </div>

    <button className='px-8 w-full py-2 bg-indigo-500 shadow hover:shadow-indigo-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
        <span><FaFacebookF /> </span>
        <span>Login With Facebook </span>
    </button>

    <button className='px-8 w-full py-2 bg-red-500 shadow hover:shadow-red-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
        <span><FaGoogle  /></span>
        <span>Login With Google </span>
    </button> 
    </div>    

    <div className='text-center text-slate-600 pt-1'>
        <p>You Have No Account? <Link className='text-blue-500' to='/login'> Login</Link> </p>
    </div> 

    <a target='_blank' href="http://localhost:3000/login">
     <div className='px-8 w-full py-2 bg-[#02e3e0] shadow hover:shadow-red-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
            Login As a Seller
     </div>
     </a>

     <a target='_blank' href="http://localhost:3000/register">
     <div className='px-8 w-full py-2 bg-[#ad2cc4] shadow hover:shadow-red-500/50 text-white rounded-md flex justify-center items-center gap-2 mb-3'>
            Register As a Seller
     </div>
     </a>


            </div> 

        <div className='w-full h-full py-4 pr-4'>
            <img src="http://localhost:3000/images/login.jpg" alt="" />
         </div>    

         </div>
        </div>
    </div>        
            
            <Footer/>
        </div>
    );
};

export default Register;