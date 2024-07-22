import React, { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import { useLocation } from 'react-router-dom';
import Stripe from '../components/Stripe';

const Payment = () => {

    const { state: {price,items,orderId}} = useLocation()
    const [paymentMethod, setPaymentMethod] = useState('stripe')


    return (
        <div>
           <Header/>
    <section className='bg-[#eeeeee]'>
        <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16 mt-4 '>
            <div className='flex flex-wrap md:flex-col-reverse'>
                <div className='w-7/12 md:w-full'>
                    <div className='pr-2 md:pr-0'>
                        <div className='flex flex-wrap'>
        <div onClick={() => setPaymentMethod('stripe')} className={`w-[20%] border-r cursor-pointer py-8 px-12 ${paymentMethod === 'stripe' ? 'bg-white':'bg-slate-100'} `} >
            <div className='flex flex-col gap-[3px] justify-center items-center'>
            <img src="http://localhost:3000/images/payment/stripe.png" alt="" />
            </div>
            <span className='text-slate-600'>Stripe</span> 
        </div>  

        <div onClick={() => setPaymentMethod('cod')} className={`w-[20%] border-r cursor-pointer py-8 px-12 ${paymentMethod === 'cod' ? 'bg-white':'bg-slate-100'} `} >
            <div className='flex flex-col gap-[3px] justify-center items-center'>
            <img src="http://localhost:3000/images/payment/cod.jpg" alt="" />
            </div>
            <span className='text-slate-600'>BYPL</span> 
        </div> 
        </div> 
          
           {
            paymentMethod === 'stripe' && <div>
                <Stripe orderId={orderId} price={price} /> 
            </div>
           }
        {
            paymentMethod === 'cod' && <div className='w-full px-4 py-8 bg-white shadow-sm'>
                
                <button onClick={() => window.location.href = 'https://forms.zohopublic.com/koolboks1/form/KOOLKREDIT/formperma/nw4FQAHfDH0jtcEUKaXo9vdl0msSrVx1_4IQU5tWRFA'} className='px-10 py-[6px] rounded-sm hover:shadow-green-500/20 hover:shadow-lg bg-[#059473] text-white'>BUY on Credit</button>
            </div>
        }
            
                </div> 
            </div> 

        <div className='w-5/12 md:w-full'>
            <div className='pl-2 md:pl-0 md:mb-0'>
                <div className='bg-white shadow p-5 text-slate-600 flex flex-col gap-3'>
        <h2 className='font-bold text-lg'>Order Summary </h2>
        <div className='flex justify-between items-center'>
            <span>{items} Items and Shipping Fee Included </span>
            <span>&#8358;{price} </span>
        </div>
        <div className='flex justify-between items-center font-semibold'>
            <span>Total Amount </span>
            <span className='text-lg text-green-600'>&#8358;{price}</span>
        </div>



                </div>
            </div>
        </div>

        </div> 
        </div>

    </section>


           <Footer/>
        </div>
    );
};

export default Payment;