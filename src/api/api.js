import  axios from 'axios'



export const getValutes = () => {
   return  axios.get("p24api/pubinfo?json&exchange&coursid=5")
    

    
}