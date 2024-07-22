import React, { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebookF, FaList, FaLock, FaUser } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; 
import { useDispatch, useSelector } from 'react-redux';
import { get_card_products, get_wishlist_products } from '../store/reducers/cardReducer';

const Header = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {categorys} = useSelector(state => state.home) 
    const {userInfo} = useSelector(state => state.auth) 
    const {card_product_count,wishlist_count} = useSelector(state => state.card) 

    const {pathname} = useLocation()
     
    const [showShidebar, setShowShidebar] = useState(true);
    const [categoryShow, setCategoryShow] = useState(true);
     

    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState('')

    const search = () => {
        navigate(`/products/search?category=${category}&&value=${searchValue}`)
    }

    const redirect_card_page = () => {
        if (userInfo) {
            navigate('/card')
        } else {
            navigate('/login')
        }
    } 

    useEffect(() => {
        if (userInfo) {
            dispatch(get_card_products(userInfo.id))
            dispatch(get_wishlist_products(userInfo.id))
        }  
    },[userInfo])

    return (
        <div className='w-full bg-white'>
            <div className='header-top bg-[#000000] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-orange-600'>
                        <ul className='flex justify-start items-center gap-8 font-semibold text-black'>
                            <li className='flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#ff5821] after:-right-[16px]'>
                                <span className='text-orange-600'><MdEmail /></span>
                                <span className='text-orange-600'>support@koolbuy.com</span>
                            </li>

                            <li className='flex relative justify-center items-center gap-2 text-sm '>
                                <span className='text-orange-600'><IoMdPhonePortrait  /></span>
                                <span className='text-orange-600'>+(234) 9012386698</span>
                            </li> 
                        </ul>

                        <div>
                            <div className='flex justify-center items-center gap-10'>
                                <div className='flex justify-center items-center gap-4 text-white '>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /> </a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaGithub /> </a> 
                                </div>
        <div className='flex group cursor-pointer text-orange-600 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#ff5821] before:w-[1px] before:-left-[20px]'>
            <img className='text-orange-600' src="http://localhost:3000/images/language.png" alt="" />
            <span><IoMdArrowDropdown /></span>
            <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
            <li>English</li>
            <li>French</li>
            </ul>
        </div>

        {
            userInfo ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-orange-600' to='/dashboard'>
                <span> <FaUser/> </span>
                <span> {userInfo.name} </span>
                 </Link> : <Link to='/login' className='flex cursor-pointer justify-center items-center gap-2 text-sm text-orange-600'>
                <span> <FaLock /> </span>
                <span>Login </span>
                 </Link>
        }
 
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>


        <div className='w-orange-600'>
         <div className='w-[85%] lg:w-[90%] mx-auto'>
            <div className='h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap'>
              
                <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
                    <div className='flex justify-between items-center'>
 
                <Link to='/'>
                    <img src="http://localhost:3000/images/kbb.png" alt="" />
                </Link>
                <div className='justify-center items-center w-[30px] h-[30px] bg-orange text-orange-600 border border-orange rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden' onClick={() => setShowShidebar(false)}>
                    <span className='text-orange-600'> <FaList/> </span>
                </div>
                </div> 
                </div>
 
            <div className='md:lg:w-full w-9/12'>
                <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8'>
                    <ul className='flex justify-start items-start gap-8 text-sm font-bold uppercase md-lg:hidden'>
                        <li>
                            <Link className={`p-2 block ${pathname === '/' ?  'text-[#000000]' : 'text-red-600'} `} >Home</Link>
                        </li>

                        <li>
                            <Link to='/shops' className={`p-2 block ${pathname === '/shops' ?  'text-[#000000]' : 'text-red-600' } `} >Shop</Link>
                        </li>
                        <li>
                            <Link className={`p-2 block ${pathname === '/blog' ?  'text-[#000000]' : 'text-red-600'} `} >Blog</Link>
                        </li>
                        <li>
                            <Link className={`p-2 block ${pathname === '/about' ?  'text-[#000000]' : 'text-red-600' } `} >About Us</Link>
                        </li>
                        <li>
                            <Link className={`p-2 block ${pathname === '/contact' ?  'text-[#000000]' : 'text-red-600' } `} >Contact Us</Link>
                        </li>

                    </ul>

                <div className='flex md-lg:hidden justify-center items-center gap-5'>
                    <div className='flex justify-center gap-5'>
       
  <div onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login') } className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#000000]'>
                            <span className='text-xl text-white'><FaHeart /></span>

            {
                wishlist_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] '>
                {wishlist_count}
                </div>
            }                  
                     
                 </div>

                        <div onClick={redirect_card_page} className='relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full bg-[#000000]'>
                            <span className='text-xl text-white'><FaCartShopping  /></span>
            
                {
                    card_product_count !== 0 && <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] '>
                        {
                            card_product_count
                        }
                     </div> 
                } 
                               
                        </div> 
                    </div> 
                </div> 


                </div> 
            </div>




            </div> 
            </div>
        </div>


    <div className='hidden md-lg:block'>
        <div onClick={()=> setShowShidebar(true)} className={`fixed duration-200 transition-all ${showShidebar ? 'invisible' : 'visible'} hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20 `}>  
        </div> 

        <div className={`w-[300px] z-[9999] transition-all duration-200 fixed ${showShidebar ? '-left-[300px]' : 'left-0 top-0'} overflow-y-auto bg-[#000000] h-screen py-6 px-8 `}>
                <div className='flex justify-start flex-col gap-6'>
                <Link to='/'>
                    <img src="http://localhost:3000/images/logo.png" alt="" />
                </Link>
    <div className='flex justify-start items-center gap-10'>
    <div className='flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute '>
            <img src="http://localhost:3000/images/language.png" alt="" />
            <span><IoMdArrowDropdown /></span>
            <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
            
            <li>English</li>
            </ul>
        </div>
        {
            userInfo ? <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-black' to='/dashboard'>
                <span> <FaUser/> </span>
                <span>{ userInfo.name }</span>
                 </Link> : <Link className='flex cursor-pointer justify-center items-center gap-2 text-sm text-black' to='/login'>
                <span> <FaLock /> </span>
                <span>Login </span>
                 </Link>
        } 

    </div>

    <ul className='flex flex-col justify-start items-start text-sm font-bold uppercase'>
                        <li>
                            <Link className={`py-2 block ${pathname === '/' ?  'text-[#059473]' : 'text-slate-600' } `} >Home</Link>
                        </li>

                        <li>
                            <Link to='/shops' className={`py-2 block ${pathname === '/shops' ?  'text-[#059473]' : 'text-slate-600' } `} >Shop</Link>
                        </li>
                        <li>
                            <Link className={`py-2 block ${pathname === '/blog' ?  'text-[#059473]' : 'text-slate-600' } `} >Blog</Link>
                        </li>
                        <li>
                            <Link className={`py-2 block ${pathname === '/about' ?  'text-[#059473]' : 'text-slate-600' } `} >About Us</Link>
                        </li>
                        <li>
                            <Link className={`py-2 block ${pathname === '/contact' ?  'text-[#059473]' : 'text-slate-600' } `} >Contact Us</Link>
                        </li>

                    </ul>
    <div className='flex justify-start items-center gap-4 text-black'>
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /> </a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaGithub /> </a> 
        </div>

        <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
        <div className='w-[48px] h-[48px] rounded-full flex bg-[#000000] justify-center items-center '>
        <span><FaPhoneAlt /></span>
        </div>
        <div className='flex justify-end flex-col gap-1'>
            <h2 className='text-sm font-medium text-slate-700'>+2349012486698</h2>
            <span className='text-xs'>24/7 Customer Support</span> 
        </div>
        </div>

        <ul className='flex flex-col justify-start items-start gap-3 text-[#1c1c1c]'>
            <li className='flex justify-start items-center gap-2 text-sm'>
             <span className='text-[#000000]'><MdEmail /></span>
             <span className='text-[#000000]'>oyin@koolbuy.com</span>
            </li>

        </ul> 

                </div> 
            </div>  
    </div>


    <div className='w-[85%] lg:w-[90%] mx-auto'>
        <div className='flex w-full flex-wrap md-lg:gap-8'>
            <div className='w-3/12 md-lg:w-full'>
                <div className='bg-[#000000] relative'>
                   <div onClick={() => setCategoryShow(!categoryShow) } className='h-[50px] bg-[#000000] text-orange-600 flex justify-center md-lg:justify-between md-lg:px-6 items-center gap-3 font-bold text-md cursor-pointer'>
            <div className='flex justify-center items-center gap-3'>
                <span><FaList/></span>
                <span>All Category </span>
            </div>
            <span className='pt-1'><IoIosArrowDown /></span>
                    </div>

        <div className={`${categoryShow ? 'h-0' : 'h-[400px]'} overflow-hidden transition-all md-lg:relative duration-500 absolute z-[99999] bg-orange-200 w-full border-x`}>
            <ul className='py-2 text-slate-600 font-medium'>
                {
                    categorys.map((c,i) => {
                        return (
                         <li key={i} className='flex justify-start items-center gap-2 px-[24px] py-[6px]'>
                            <img src={c.image} className='w-[30px] h-[30px] rounded-full overflow-hidden' alt="" />
                            <Link to={`/products?category=${c.name}`} className='text-sm block'>{c.name}</Link>
                         </li>
                        )
                    })
                }
            </ul>

        </div>


                </div>
            </div>

        <div className='w-9/12 pl-8 md-lg:pl-0 md-lg:w-full'>
            <div className='flex flex-wrap w-full justify-between items-center md-lg:gap-6'>
                <div className='w-8/12 md-lg:w-full'>
                    <div className='flex border h-[50px] items-center relative gap-6'>
                        <div className='relative after:absolute after:h-[25px] after:w-[1px] after:bg-[#afafaf] after:-right-[15px] md:hidden'>
                        <select onChange={(e) => setCategory(e.target.value)} className='w-[150px] text-orange-600 font-semibold bg-transparent px-2 h-full outline-0 border-none' name="" id="">
                            <option value="">Select Category</option>
                            {
                                categorys.map((c, i) => <option key={i} value={c.name}> {c.name} </option> )
                            }
                        </select>
                        </div>
                        <input className='w-full relative bg-transparent text-slate-500 outline-0 px-3 h-full' onChange={(e)=> setSearchValue(e.target.value)} type="text" name='' id='' placeholder='search your needs' />
                        <button onClick={search} className='bg-[#000000]  right-0 absolute px-8 h-full font-semibold uppercase text-white'>Search</button>
                    </div> 
                </div>

                <div className='w-4/12 block md-lg:hidden pl-2 md-lg:w-full md-lg:pl-0'>

                <div className='w-full flex justify-end md-lg:justify-start gap-3 items-center'>
        <div className='w-[48px] h-[48px] rounded-full flex bg-[#f5f5f5] justify-center items-center '>
        <span><FaPhoneAlt /></span>
        </div>
        <div className='flex justify-end flex-col gap-1'>
            <h2 className='text-md font-medium text-slate-700'>09012486698</h2>
            <span className='text-sm'>247 Customer Support</span> 
        </div>
        </div>

                </div>


            </div>
            </div>    




        </div> 
    </div>





           
        </div>
    );
};

export default Header;