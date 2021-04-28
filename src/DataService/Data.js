import Axios from "axios";

/*
  Responsible for fetching data from the api
*/
class Data{

    /*
      Returns the current looged in associate
    */
    getCurrentAssociate = async (token) =>{

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
    
    /*
      Returns the associate data whose birthday is not tommorrow but in any upcoming days
    */
    getupComingBirthdays = async(token)=>{

      const requestOptions = {
        headers:{
          'Authorization' : 'Bearer '+token
        }
      }

       try{
            const response = await Axios.get("/api/Associate/getupcomingbirthdays",requestOptions)
            console.log(response)
       }

       catch(err){
         console.log("Error ! " + err)
         return;
       }
    }


    /*
      Returns the associate data whose birthday is tommorow
    */

    getCurrentBirthdays = async(token) =>{

      const requestOptions = {
        headers:{
          'Authorization' : 'Bearer '+token
        }
      }
      try{
        const response = await Axios.get("/api/Associate/getcurrentbirthdays",requestOptions)
       return response
      }

      catch(err){
        console.log("Error ! " + err)
        return;
      }
    }

    postBirthdayMessage = async(token, birthdayId, message) =>{

        const requestOptions = {
          headers:{
            'Authorization' : 'Bearer '+token
          }
        }
        const data = {
                receiverAssociateId: birthdayId,
                message: message
        }
        try{
          const response = await Axios.post("/api/Greeting/sendgreetings",data,requestOptions)
        return response
        }

        catch(err){
          console.log("Error ! " + err)
          return;
        }

    }
}

export default new Data();