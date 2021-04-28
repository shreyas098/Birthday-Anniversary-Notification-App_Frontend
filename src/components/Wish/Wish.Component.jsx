import BirthdayCard from "../BirthdayCard/BirthdayCard.component";
import "./Wish.styles.css";
import Data from "../../DataService/Data";
import {useEffect, useState} from "react";


const Wish = (props)=>{

    // For the associate data whose birthday is tommorrow
    const [birthdayAssociates, updateBirthdayAssociates] = useState({});
    
    useEffect(()=>{
        Data.getCurrentBirthdays(localStorage.getItem("token"))
      .then(res=>{updateBirthdayAssociates(res.data)})
      },[])
    
    return (
        <div className="add-wishes">
        <h1 className="title">Birthdays Tommorow</h1>
        <div className="birthday-cards" > 

            {
                birthdayAssociates.length?
                birthdayAssociates.filter(({assoicateId})=>(
                    assoicateId!==props.currentUserId
                )).map(({assoicateId, associateName, dob, imageUrl})=>{
                    
                   
                    dob = new Date().getFullYear() - Number(dob.split("T")[0].split("-")[0])

                    return <BirthdayCard key={assoicateId} id={assoicateId} img = {imageUrl} name={associateName} date={dob}/>
                })
                :
               
                <div className="no-birthday-found">
                  <h2 className="error">Looks like no one was born on this date</h2>
                </div>
                
            }

        </div>

        </div>
    )
}

export default Wish;