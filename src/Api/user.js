import axios from "axios"
const api =`https://randomuser.me/api`
let data = null
export const getUsers = async () => {

        await axios.get(api)
        .then(res=>{
            console.log(res)
            data = res.data.results
        })
        .catch(err=>{
            console.log(err)
        })
    return data 
}