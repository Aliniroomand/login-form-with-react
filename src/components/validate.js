export const validate = (data) =>{
    const errors ={}
 if (!data.name.trim()) {
        errors.name = "name is required "
        } else{
            delete errors.name
        }
if (!data.email.trim()){
        errors.email= "email is required"
        } else
    if(!( /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) ){
        errors.email="email is incorrect"
        } else{
            delete errors.email
        }
if (!data.password){
                errors.password="password is required"
            } else if(data.password.length < 6 ){
                errors.password="password should be more than 6 characters"
            } else{
                delete errors.password
            }
if (!data.confirmPassword){
            errors.confirmPassword="confirm Password is required "
        } else if (data.confirmPassword !== data.password){
            errors.confirmPassword="your password and confirm Password are not the same"
        } else{
            delete errors.confirmPassword
        }
if (!data.isAccepted){
        errors.isAccepted="you have accept our pravicy policies"
        }else{
            delete errors.isAccepted
        }
return errors;
 }