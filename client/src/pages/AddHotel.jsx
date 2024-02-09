import { Col , Row , Form , Input} from 'antd'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import Spinner from '../components/Spinner'
import { addHotel } from './redux/action/hotelActions'
function AddHotel() {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer)

    function onFinish(values){

         values.bookedTimeSlots=[]

         dispatch(addHotel(values))
         console.log(values)
    }

    return (
        <DefaultLayout>
               {loading && (<Spinner />)}
               <Row justify='center mt-5'>
                   <Col lg={12} sm={24} xs={24} className='p-2'>
                       <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                           <h3>Add New Hotel</h3>
                           <hr />
                           <Form.Item name='name' label='Hotel name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           
                           <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='foodType' label='Food Type' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>

                           <div className='text-right'>
                           <button className='btn1'>ADD Hotel</button>
                           </div>

                       </Form>
                   </Col>
               </Row>

        </DefaultLayout>
    )
}

export default AddHotel;