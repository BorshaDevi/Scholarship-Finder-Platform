import axios from 'axios'

const useAxiosPrivate=()=>{
    const axiosPrivate=axios.create({
        baseURL:'http://localhost:5000'
    })
    return axiosPrivate;
}
export default useAxiosPrivate;