import Axios from "axios";

class Auth{


    /*
        The backend api is configured to return current associate data
        at /api/Associate/getcurrentassociate withtoken in the header

        Function uses the token earler recevied by the client to request
        for current associate data.

        dataUpdater : the hook updator function that will update the current user data.
        Currently it is a bool value to indicate if the data fetching was successfull
    */
   validateToken = async(token,statusUpdater)=>{

       const requestOptions = {
         headers:{
           'Authorization' : 'Bearer '+token
         }
       }

        try{
             await Axios.get("/api/Associate/getcurrentassociate",requestOptions)
             statusUpdater(true);  
        }

        catch(err){
          console.log("Error ! " + err)
          statusUpdater(false);  // fetching failed (Do not allow current component to be displayed)
          return;
        }
    }

    /*
        The backend api is configured to return jwt at /api/Login/token with parameters as suername and password

        updateSigned: Inform the main App (use state hook at App.js) if sign in was successfull or a failure

        updateError: Inform the signin Component (use state hook at Signin.component.jsx) if user
        credentials were wrong and to display an error message.

    */
    signIn = async (username, password,updateSigned, updateLoading, updateError) => {
        
        const requestOptions = {
            headers: { 
              'Content-Type': 'application/json',
             }, 
          }
        
          const body = JSON.stringify({
            username:username,
            password:password
          })

        try{

          const response = await Axios.post('/api/Login/token',body, requestOptions);
          localStorage.setItem("token", response.data.token)
          updateSigned(true)   // signin was successfull
        }

        catch(err){
          console.log("Error ! " + err)
          updateError(true);
          updateLoading(false);
          updateSigned(false) // signin was unsucessfull.
        }

        
       
    }

    
    signOut = (updateSigned)=>{
      localStorage.removeItem("token");
      /*
        Redirection is handled by calling component.
    */
      updateSigned(false);
    }
}

export default new Auth();