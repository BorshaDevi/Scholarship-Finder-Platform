import {Link} from "react-router"
const SignUp=()=>{
    const handleSignUp=(e)=>{
        e.preventDefault()
    }
    return(
        <>
       <div className=' mt-10  lg:mx-auto md:ml-64 mb-24 md:h-auto lg:container drop-shadow-2xl shadow-white  bg-green-300    md:w-80 md:p-5 '>
        <form onSubmit={handleSignUp} >
              <input type="text" name='name' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Email'></input>
              <br />
              <input type="email" name='email' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Name'></input>
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