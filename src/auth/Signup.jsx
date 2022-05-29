import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const dataRecord = {
        fname: '',
        lname: '',
        email: '',
        password: ''
    }
    const [state, setState] = useState(dataRecord)
    const [state1, setState1] = useState([]);
    const inputEvent = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setState((prevVal)=>{
            if(name === 'fName'){
              return{
                fname: value,
                lname: prevVal.lname,
                email: prevVal.email,
                password: prevVal.password,
              }  
            }else if(name === 'lName'){
                return{
                  fname: prevVal.fname,
                  lname: value,
                  email: prevVal.email,
                  password: prevVal.password,
                }
            }else if(name === 'Email'){
                return{
                  fname: prevVal.fname,
                  lname: prevVal.lname,
                  email: value,
                  password: prevVal.password,
                }
            }else if(name === 'Password'){
                return{
                  fname: prevVal.fname,
                  lname: prevVal.lname,
                  email: prevVal.email,
                  password: value,
                }
            }            
        })
    }

    const buttonClicked = (e) =>{
        e.preventDefault();
        setState1({...state1, state});
        console.log(state1);
        localStorage.setItem("data1", JSON.stringify(state1));
    }
    return (
        <>
            
            <div className="d-flex justify-content-end mt-2 me-4">Go back to sign in page
                <button type="button" onClick={()=> navigate('/')} className="btn btn-primary ms-2">Sign in</button>
            </div>

            <div className=" mt-4 pt-4 d-flex justify-content-center">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInput1" className="form-label">First name</label>
                        <input type="text" name="fName" onChange={inputEvent} value={state.fname} className="form-control form-control-lg" id="exampleInput1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInput2" className="form-label">Last name</label>
                        <input type="text" name="lName" onChange={inputEvent} value={state.lname} className="form-control form-control-lg" id="exampleInput2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="Email" onChange={inputEvent} value={state.email} className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name="Password" onChange={inputEvent} value={state.password} className="form-control form-control-lg" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Save Password</label>
                    </div>
                    <div className=' ms-5 ps-4'>
                        <button type="submit" onClick={buttonClicked} className="btn btn-primary btn-lg">Sign up</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Signup