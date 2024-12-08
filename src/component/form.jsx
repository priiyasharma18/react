
import React, { useState } from "react";
import './form.css'
const Form = () => {

    const [formdata,setFormdata]=useState({
        name:"",
        email:"",
        contact:"",
        password:"",
        confirm:""
    })
    const [error,setErr]=useState({
        name:"",
        email:"",
        contact:"",
        password:"",
        confirm:""
    })
    const handleSubmit= async (e)=>{
        e.preventDefault()
      
        // Prevents the form's default submit behavior
        console.log('submit function called')
        console.log(formdata)
        console.log(error)
        
        // const data=new FormData
        
        // data.append("name",formdata.name)
        // data.append("email",formdata.email)
        // data.append("conatct",formdata.contact)
        // data.append("password",formdata.password)
        // data.append("confirm",formdata.confirm)
        // console.log(data,'form data ')

      const response=await fetch("http://localhost:8081/user",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': "application/json"
        },

        body:JSON.stringify({
            name:formdata.name,
            email:formdata.email,
            contact:formdata.contact,
            password:formdata.password,
            confirm:formdata.confirm
        })
        })

        const data=await response.json()
       console.log(data,'import data ')
    }

    const inpValidation=(type)=>{
        console.log(type,"type of switch")
 switch(type){
     case "name":
        const regEx=/^[a-zA-Z]*$/
       if(formdata.name.trim()==''){
            setErr({...error,name:"Input feild cannot be left empty"})
        } else if
        (!regEx.test(formdata.name)){
            setErr({...error,name:"Invalid username"})
        }
        else{
            setErr({...error,name:""})
        }
        break;

        case "email":
            const emailRegex=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]*$/
            if(!emailRegex.test(formdata.email)){
                setErr({...error,email:"Invalid email"})
            }else if(formdata.email.trim()==''){
                setErr({...error,email:"email field cannot be left empty"})
            }else{
                setErr({...error,email:""})
            }
            break;
            case "contact":

            const contactRegex=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/

            if(!contactRegex.test(formdata.contact)){
                setErr({...error,contact:"Invalid number"})
            }else if(formdata.contact.trim()==''){
                setErr({...error,contact:" fill this input field"})
            }else{
                setErr({...error,contact:""})
            }
            break;

            case "password":
                const passRegex=/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@$%^&*\-_]).{8,}$/
                if(!passRegex.test(formdata.password)){
                    setErr({...error,password:"enter strong password"})
                }else if(formdata.password.trim()==''){
                    setErr({...error,password:" empty field"})
                }else{
                    setErr({...error,password:""})
                }
                break;


                case "confirm":
                    if(formdata.password!==formdata.confirm){
                        setErr({...error,confirm:"mismatch password"})
                    }else if(formdata.confirm.trim()==''){
                        setErr({...error,confirm:"enter password"})
                    }else{
                        setErr({...error,confirm:""})
                    }
                break;
 }
    }
   
    return (
        <>
            <h1>Form validation</h1>
            <form onSubmit={handleSubmit}>
                <div className="form">
                    <div className="wrap">
                        <input type="text"
                         placeholder="Username" 
                         value={formdata.name}
                         onChange={(e)=>setFormdata({...formdata,name:e.target.value})} 
                         onBlur={()=> inpValidation("name")} />
                        
                    </div>
                    <span>{error.name}</span>
                    <div className="wrap">
                        <input type="text"
                         placeholder="Email" 
                         value={formdata.email} 
                         onChange={(e)=>setFormdata({...formdata,email:e.target.value})}
                         onBlur={()=> inpValidation("email")} />
                        
                    </div>
                    <span>{error.email}</span>
                    <div className="wrap">
                        <input type="text"
                         placeholder="Contact" 
                         value={formdata.contact} 
                         onChange={(e)=>setFormdata({...formdata,contact:e.target.value})}
                         onBlur={()=> inpValidation("contact")}/>
                    </div>
                    <span>{error.contact}</span>
                    <div className="wrap">
                        <input type="text" 
                        placeholder="Password"  
                        value={formdata.password} 
                        onChange={(e)=>setFormdata({...formdata,password:e.target.value})} 
                        onBlur={()=> inpValidation("password")}/>
                    </div>
                    <span>{error.password}</span>
                    <div className="wrap">
                        <input type="text" 
                        placeholder="confirm password" 
                        value={formdata.confirm} 
                        onChange={(e)=>setFormdata({...formdata,confirm:e.target.value})}
                        onBlur={()=> inpValidation("confirm")}/>
                    </div>
                    <span>{error.confirm}</span>
                    <div className="wrap">
                        <button className="submit" 
                        disabled={!(formdata.name.length && formdata.email.length && formdata.contact.length && formdata.password.length && formdata.confirm.length)}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>

        </>
    )
}

export default Form