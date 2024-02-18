import axios from "axios";
// import {message} from 'antd'
import swal from "sweetalert";
export const userLogin=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const type = localStorage.getItem("type");
        const response = await axios.post('/api/users/login' , reqObj)

        



        localStorage.setItem('user' , JSON.stringify(response.data))
        
        localStorage.setItem('userid' , JSON.stringify(response.data._id))
        swal("Wow!!!", "You are successfully sign up.", "success");
        
        dispatch({type: 'LOADING' , payload:false})
        setTimeout(() => {
            if(type === "admin"){
                window.location.href="/admin";
            }
            else if (type === "owner"){
                window.location.href='/owner';
            }
            else if (type === "user"){
                window.location.href='/home1';
            }
        }, 500);
    } catch (error) {
        console.log(error)
        dispatch({type: 'LOADING' , payload:false})
    }
}

export const userRegister=(reqObj)=>async dispatch=>{
    
    dispatch({type: 'LOADING' , payload:true})

    try {
        const type = localStorage.getItem("type");
        const response = await axios.post('/api/users/register' , reqObj)
        
        localStorage.setItem('user' , JSON.stringify(response.data))
        
        localStorage.setItem('userid' , JSON.stringify(response.data._id))
        swal("Wow!!!", "You are successfully sign up.", "success");
        setTimeout(() => {
            if(type === "admin"){
                window.location.href="/admin";
            }
            else if (type === "owner"){
                window.location.href='/owner'
            }
            else if (type === "user"){
                window.location.href='/home1'
            }

         
        }, 500);
       
        dispatch({type: 'LOADING' , payload:false})
        
    } catch (error) {
        console.log(error)
        // message.error('Something went wrong')
        dispatch({type: 'LOADING' , payload:false})
    }
}