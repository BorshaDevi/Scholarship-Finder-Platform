import {Link} from "react-router"
import useAxiosPrivate from "../hooks/usePrivate"
const SignUp=()=>{
    const axiosPrivate=useAxiosPrivate()
    const handleSignUp=async(e)=>{
        e.preventDefault()
        const form=e.target
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        const allUser={
            name,
            email,
            password,
            role:'user'
        }
        console.log(allUser)
        const signup=await axiosPrivate.post('/users',allUser)
         .then(res =>{
            if(res.data){
                const login={
                    email,
                    password
                }
                console.log(login)
                const loginUser= axiosPrivate.post('/loginUser',login)
                .then(res =>{
                    if(res.data.insertedId){
                        axiosPrivate.post('/jwt',{email:email})
                        .then(res=>{
                            if(res.data.token){
                                localStorage.setItem('token', res.data.token)
                                localStorage.setItem('user',email)
                                form.reset()
                            }
                            
                        }).catch(err =>console.log(err))
                    }
                })
                .catch(err => console.log(err))
            }
            }
        )
         .catch(err => console.log(err))

    }
    return(
        <>
       <div className=' mt-10  lg:mx-auto md:ml-64 mb-24 md:h-auto lg:container drop-shadow-2xl shadow-white  bg-green-300    md:w-80 md:p-5 '>
        <form onSubmit={handleSignUp} >
              <input type="text" name='name' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Name'></input>
              <br />
              <input type="email" name='email' required className='w-full border border-black mt-5 p-1' placeholder='Enter your email'></input>
              <br />
              <input type="password" name="password" required className='w-full border border-black p-1 mt-5' placeholder='Enter your password'  ></input>
              <br />
        <button className="  p-2  w-full mt-8 bg-green-400 font-bold hover:bg-green-800  text-white"><input type="submit"  value="Sign Up"/></button>
        </form>
        <p className="text-green-950">Already have any account? please <Link to='/signIn' className='text-sky-700 hover:underline'>Sign In</Link> </p>
      </div>
        
        </>
    )
}
export default SignUp;