/*
    Component responsible for displaying all the birthday cards whose birthday is tommorrow
*/

import BirthdayCard from "../BirthdayCard/BirthdayCard.component";
import "./Wish.styles.css";
import Data from "../../DataService/Data";
import {useEffect, useState} from "react";


const Wish = (props)=>{

    // For the associate data whose birthday is tommorrow
    const [birthdayAssociates, updateBirthdayAssociates] = useState({});

    // To avoid unmount update error
    const [isMounted, updateMounted] = useState(true);

    /*
        Fetch and clean
    */
    useEffect(()=>{
    Data.getCurrentBirthdays(localStorage.getItem("token"))
        .then(res=>{ 
            if(res) 
            {
                if(isMounted)
                updateBirthdayAssociates(res.data)
            }
        });

        return ()=>{
        updateMounted(false);
        }
    },[isMounted])
    
    return (
        <div className="add-wishes">
            <h1 className="title">Birthdays Tommorow</h1>
            <div className="birthday-cards" > 
                {
                    /*
                        Get all the cards and filter out the current user's own card.
                    */
                    birthdayAssociates.length?
                    birthdayAssociates.filter(({assoicateId})=>(
                        assoicateId!==props.currentUserId
                    )).map(({assoicateId, associateName, dob, imageUrl})=>{
                        
                        // Calculate the age 
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