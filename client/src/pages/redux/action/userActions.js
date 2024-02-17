import axios from "axios";
// import {message} from 'antd'
import swal from "sweetalert";
export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/login' , reqObj)
        localStorage.setItem('user' , JSON.stringify(response.data))
        
        localStorage.setItem('userid' , JSON.stringify(response.data._id))
        // message.success('Login success')
        swal("Wow!!!", "You are successfully sign up.", "success");
        
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            window.location.href='/home1'
         
        }, 500);
    } catch (error) {
        console.log(error)
        // message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const response = await axios.post('/api/users/register' , reqObj)
        
        localStorage.setItem('userid' , JSON.stringify(response.data._id))
        // message.success('Registration successfull')
        swal("Wow!!!", "You are successfully sign up.", "success");
        setTimeout(() => {
            window.location.href='/home1'
         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        // message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}