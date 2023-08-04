import React , { useState ,useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './toast';
import styles from './LoginForm.module.css'


const LoginForm = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    })

const changeHandler = (event)=>{
        if(event.target.name === "isAccepted"){
        setData({...data , [event.target.name]:event.target.checked})

        } else{
            setData({...data,[event.target.name]:event.target.value })
        }
    }

const[ errors , setErrors] = useState({}) ;
const[touched,setTouched]= useState({});

useEffect( ()=>{
    setErrors(validate(data))
} ,[data,touched])

const focusHandler = event=>{
    setTouched({...touched, [event.target.name]:true})
}

const submitHandler = event=>{
    event.preventDefault();
    if (!Object.keys(errors).length) 
        {notify("you singed in successfully","success")}
    else{ notify("pay attention !!! fields have some problems ","error")
        setTouched({
        name:true,
        email:true,
        password:true,
        confirmPassword:true,
        isAccepted:true,
    })}
}

    return (
        <div className={styles.container}>
            <h1>welcome</h1>
            <h1>please interduce your self to us :</h1>
        <form onSubmit={submitHandler}>
            
            <label>name</label> 
            <input 
                placeholder='whats your name?' 
                type="text" 
                name="name" 
                value={data.name} 
                onChange={changeHandler} 
                onFocus={focusHandler} 
                className={!Object.values(data.name).length ? styles.unCompleteInput : styles.completedInput }
            />
                {errors.name  && touched.name && <span>{errors.name }</span>  }
            <label>email</label> 
            <input 
                placeholder='whats your email?'
                type="text" 
                name="email" 
                value={data.email} 
                onChange={changeHandler} 
                onFocus={focusHandler}
                className={!Object.values(data.email).length  && touched.email ? styles.unCompleteInput : styles.completedInput }

            />
                {errors.email && touched.email && <span>{errors.email}</span>}
            <label>set a password</label>
            <input 
                placeholder='set a password'
                type="password" 
                name="password" 
                value={data.password} 
                onChange={changeHandler} 
                onFocus={focusHandler}
                className={!Object.values(data.password).length  && touched.password ? styles.unCompleteInput : styles.completedInput }

            />
                {errors.password && touched.password && <span>{errors.password}</span>}
            <label>confirm Password </label>
            <input 
                placeholder='Retype that password'
                type="password" 
                name="confirmPassword" 
                value={data.confirmPassword} 
                onChange={changeHandler} 
                onFocus={focusHandler}
                className={!Object.values(data.confirmPassword).length   && touched.confirmPassword ? styles.unCompleteInput : styles.completedInput }

            />
                {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
            <div className={styles.checkBox}>
            <label>I accept terms and pravicy policy</label>
            <input  
                type="checkbox" 
                name="isAccepted" 
                value={data.isAccepted} 
                onChange={changeHandler} 
                onFocus={focusHandler}
                className={!Object.values(data.confirmPassword).length   && touched.confirmPassword ? styles.unCompleteInput : styles.completedInput }

            /></div>
                {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span> }
            <button type="submit" className={Object.keys(errors).length ? styles.redButton: styles.greenButton}>submit</button>
            <a href='#'>login</a>
        </form>
        <ToastContainer />
        </div>
    );
};

export default LoginForm;