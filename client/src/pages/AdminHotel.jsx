
import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllHotels } from './redux/action/hotelActions'
import { Button, Col, Row } from 'antd'
import {Link} from 'react-router-dom'
// import { DeleteOutlined, EditOutlined } from "@ant-design/icons";





const AdminHotel = () => {

  const {hotels} = useSelector(state=>state.hotelsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getAllHotels())
  }, [])



    
  

  return (
    // <DefaultLayout>
    //     <ul className='featured-car-list' style={{margin:'200px'}}>
    //   {hotels.map((hotel) => (
    //     <div>
    //         <h1>{hotel.name}</h1>
    //         {/* <h2>{hotel.}</h2> */}
            
    //     </div>
    //   ))}
    // </ul>
    // </DefaultLayout>
    <section className="bg-gray-200 py-10 px-12">
      <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {hotels.map((post, index) => (
          <div
            key={index}
            className="my-8 rounded bg-white duration-300 hover:-translate-y-1"
          >
            <a href="#link" className="cursor-pointer">
              <figure>
                <img
                  src={post.image}
                  className="rounded-t h-72 w-full object-cover"
                  alt="Post"
                />
                <figcaption className="p-4">
                  <h2 className="text-lg text-gray-900 font-medium title-font">
                    {post.name}
                  </h2>
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font mb-4">
                    Category
                    {post.foodType}
                  </h3>
                  <p className="leading-relaxed text-base">
                    {post.capacity}
                  </p>
                </figcaption>
              </figure>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminHotel;