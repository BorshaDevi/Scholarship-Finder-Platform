import {Link, useNavigate} from "react-router"
import useAxiosPrivate from "../hooks/usePrivate"
const SignIn=()=>{
    const axiosPrivate=useAxiosPrivate()
    const navigation=useNavigate()
    
    const handleSignIn=async(e)=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        const login={
            email,
            password
        }
        console.log(login)
        const loginUser=await axiosPrivate.post('/loginUser',login)
        .then(res =>{
            if(res.data.insertedId){
                axiosPrivate.post('/jwt',{email:email})
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('token', res.data.token)
                        form.reset()
                        navigation('/')
                    }
                    
                }).catch(err =>console.log(err))
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <>
       <div className=' mt-10  lg:mx-auto md:ml-64 mb-24 md:h-60 lg:container drop-shadow-2xl shadow-white  bg-green-300    md:w-80 md:p-3 '>
        <form onSubmit={handleSignIn} >
              <input type="email" name='email' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Email'></input>
              <br />
              <input type="password" name="password" required className='w-full border border-black p-1 mt-5' placeholder='Enter your password'  ></input>
              <br />
        <button className="  w-full mt-8 bg-green-400 font-bold hover:bg-green-800  text-white p-2"><input type="submit"  value="Sing In"/></button>
        </form>
        <p className="text-green-950">Do not have any account? please <Link to='/signUp' className='text-sky-700 hover:underline'>Sign Up</Link> </p>
      </div>
        </>
    )
}
export default SignIn;