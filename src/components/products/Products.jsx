import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css' 
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
  
const Products = ({title,products}) => {
    
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    }

    const ButtonGroup = ({next,previous}) => {
        return (
            <div className='flex justify-between items-center'>
                <div className='text-xl font-bold text-orange-600'> {title} </div>
                <div className='flex justify-center items-center gap-3 text-white'>
                    <button onClick={()=>previous()} className='w-[30px] h-[30px] flex justify-center items-center bg-orange-600 border border-slate-200'>
                        <IoIosArrowBack />
                    </button>
                    <button onClick={()=>next()} className='w-[30px] h-[30px] flex justify-center items-center bg-black border border-slate-200'>
                    <IoIosArrowForward /> 

                    </button>
                </div>

            </div>
        )

    }


    return (
        <div className='flex gap-8 flex-col-reverse'>
            <Carousel
                    autoPlay={false}
                    infinite={false}
                    arrows={false} 
                    responsive={responsive}
                    transitionDuration={500}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup/>}
                >
       {
        products.map((p,i)=> {
            return(
                <div key={i} className='flex flex-col justify-start gap-2'>
               {
                p.map((pl, j) =>  <Link key={j} className='flex justify-start items-start' to='#'>
                <img className='w-[110px] h-[110px]' src={pl.images[0]} alt="" />
                <div className='px-3 flex justify-start items-start gap-1 flex-col text-orange-600'>
                    <h2>{pl.name} </h2>
                    <span className='text-lg font-bold'>&#8358;{pl.price}</span> 
                </div>  
            </Link>
                 )
               }
            </div>   
            )
        })
       }         
                
                </Carousel>   
        </div>
    );
};

export default Products;