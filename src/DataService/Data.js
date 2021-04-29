import Axios from "axios";

/*
  Responsible for fetching data from the api
*/
class Data{

    /*
      Returns the current logged in associate data
    */
    getCurrentAssociate = async (token) =>{

        const requestOptions = {
            headers:{
              'Authorization' : 'Bearer '+token
            }
          }
   
           try{
                const response = await Axios.get("https://birthdaycelebration-demo.azurewebsites.net/api/Associate/getcurrentassociate",requestOptions)
                return response; 
           }
   
           catch(err){
             return;
           }
    }
    
    /*
      Returns the associates data whose birthday is in any upcoming days
    */
    getupComingBirthdays = async(token)=>{

      const requestOptions = {
        headers:{
          'Authorization' : 'Bearer '+token
        }
      }

       try{
            const response = await Axios.get("https://birthdaycelebration-demo.azurewebsites.net/api/Associate/getupcomingbirthdays",requestOptions)
            return response
       }

       catch(err){
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
        const response = await Axios.get("https://birthdaycelebration-demo.azurewebsites.net/api/Associate/getcurrentbirthdays",requestOptions)
       return response
      }

      catch(err){
        console.log("Error ! " + err)
        return;
      }
    }

    /*
        Responsible for posting the birthday wishes to the api
    */

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
          const response = await Axios.post("https://birthdaycelebration-demo.azurewebsites.net/api/Greeting/sendgreetings",data,requestOptions)
        return response
        }

        catch(err){
          return;
        }

    }
}

export default new Data();