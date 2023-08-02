import React , { useState ,useEffect } from 'react';
import LoginField from './LoginField';
import { validate } from './validate';

const LoginForm = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
    })

const changeHandler = (event)=>{
        if(event.target.name === "isAccepted"){
        setData({...data , [event.target.name]:event.target.checked})

        } else{
            setData({...data,[event.target.name]:event.target.value })
            console.log(data);
        }
    }
const[ errors , setErrors] = useState({}) ;

console.log(errors);
useEffect( ()=>{
    setErrors(validate(data))
} ,[data])

    return (
        <div>
            <h1>welcome</h1>
            <h1>please interduce your self to us :</h1>
            <LoginField label="name" type="text" name="name" value={data.name} onChange={changeHandler}/>
            <h1>{errors.name}</h1>
            <LoginField label="email" type="text" name="email" value={data.email} onChange={changeHandler}/>
            <h1>{errors.email}</h1>
            <LoginField label="password" type="password" name="password" value={data.password} onChange={changeHandler}/>
            <h1>{errors.password}</h1>
            <LoginField label="confirmPassword" type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler}/>
            <h1>{errors.confirmPassword}</h1>
            <LoginField label="I accept terms and pravicy policy " type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}/>
            <h1>{data.isAccepted ? ""  : errors.isAccepted }</h1>

        </div>
    );
};

export default LoginForm;