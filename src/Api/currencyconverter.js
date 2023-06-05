import axios from "axios"
const api =`https://v6.exchangerate-api.com/v6/db244f59a299aefa84716cac/latest/USD`
let data = null
export const converter = async () => {

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