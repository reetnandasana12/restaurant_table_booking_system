// import { message } from 'antd';
import axios from 'axios';

export const getAllHotels=()=>async dispatch=>{

    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.get('/api/hotels/getallhotels')
        dispatch({type: 'GET_ALL_HOTELS', payload:response.data})
        dispatch({type: 'LOADING' , payload:false})
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }

}