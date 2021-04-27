import Axios from "axios";

class Data{

    getCurrentAssociate = async (token, dataUpdater) =>{

        const requestOptions = {
            headers:{
              'Authorization' : 'Bearer '+token
            }
          }
   
           try{
                const response = await Axios.get("/api/Associate/getcurrentassociate",requestOptions)
                return response; 
           }
   
           catch(err){
             console.log("Error ! " + err)
             return;
           }
    }
}

export default new Data();