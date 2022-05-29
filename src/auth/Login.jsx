import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="d-flex justify-content-end mt-2 me-4"><div className='fw-bold me-1'> New here </div> then sign up now
        <button type="button" onClick={()=> navigate('/signup')} className="btn btn-primary ms-2">Sign up</button>
        </div>

        
           <div className=" mt-5 pt-5 d-flex justify-content-center">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control form-control-lg" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Save Password</label>
                    </div>
                    <div className=' ms-5 ps-4'>
                    <button type="submit" className="btn btn-primary btn-lg">Sign in</button>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Login