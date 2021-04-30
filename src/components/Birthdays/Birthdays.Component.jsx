import { useState, useEffect } from "react";
import InfoCard from "../InfoCard/InfoCard.component";
import Data from "../../DataService/Data";
import "./Birthdays.styles.css";

/*
    Responsible for providing the Ordinal [like 10th, 3rd]
*/
const getNumberWithOrdinal = (n)=> {
    var s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

const Birthdays = ()=>{

    
    const [isLoading, updateIsLoading] = useState(true);
    /*
        To avoid unmounted component state update
    */
    const [isMounted, updateMounted] = useState(true);

    /*
        Assoicate data for upcoming birthdays
    */
    const [birthdays, updateBirthdays] = useState({});

    var months = [ "Jan", "Feb", "March", "April", "May", "June", 
           "July", "August", "Sept", "Oct", "Nov", "Dec" ];

    /*
        To fetch data on mounting and cleanup on unmount
    */
    useEffect(()=>{
        Data.getupComingBirthdays(localStorage.getItem("token"))
        .then(res=>{ 
          if(res) 
          {
              if(isMounted) // fix unmount state update error
                updateBirthdays(res.data)
                updateIsLoading(false)
          }
        });

        return ()=>{
            updateMounted(false); //cleanup
        }
      },[isMounted])
    
    return (
    <>
    <h1 className="title">Upcoming Birthdays</h1>
    <div className="info-cards">
    {
        isLoading?"Loading ..":
            birthdays.length?
            birthdays.map(({assoicateId, associateName, dob, designation})=>{

                // Getting the date and month from datetime
                const date = dob.split("T")[0];
                dob = getNumberWithOrdinal(Number(date.split("-")[2])) + " " + months[Number(date.split("-")[1] - 1)]
                
                return  <InfoCard key={assoicateId} id={assoicateId} designation={designation} name={associateName} date={dob}/>
            })
            
            : <div className="no-birthday-found">
                    <h2 className="error">Looks like no one is left</h2>
              </div>
    }
    </div>
    </>
    )

}

export default Birthdays;