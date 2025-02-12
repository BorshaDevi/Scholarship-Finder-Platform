import {Link} from "react-router"
const SignIn=()=>{
    const handleSignIn=(e)=>{
        e.preventDefault()
    }
    return(
        <>
       <div className=' mt-10  lg:mx-auto md:ml-64 mb-24 md:h-60 lg:container drop-shadow-2xl shadow-white  bg-green-300    md:w-80 md:p-3 '>
        <form onSubmit={handleSignIn} >
              <input type="email" name='email' required className='w-full border border-black mt-5 p-1' placeholder='Enter your Name'></input>
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