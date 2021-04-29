/*
        Card the holds data about the associate whose birthdate is tommorow and provides form to submit a message
*/

import Button from '@material-ui/core/Button';
import Data from "../../DataService/Data";
import Icon from '@material-ui/core/Icon';
import React, {useState} from 'react';
import "./BirthdayCard.styles.css";
import TextField from '@material-ui/core/TextField';


export default function BirthdayCard(props) {
 
  /*
    Determines if message is sent [used to show confirmation]
  */
  const [message, updateMessage] = useState(false);

  /*
    Responsible for calling the dataservices to send the birthday wish
  */
  const handleMessageSubmit = (event)=>{
      
    event.preventDefault();
    Data.postBirthdayMessage(localStorage.getItem("token"), props.id, event.target.message.value)
      
      .then((res)=>{
       
        updateMessage(true);
        setTimeout(()=>{
          updateMessage(false);
        },800)
      })
  }

  return (

    <div className="birthday-card">
      <div className="avatar">
        <img  className="dp" src={props.img} alt="dp" />
      </div>  
      <div className="birth-date">
          Happy {props.date}! 
      </div>
      <div className="name">

          <h2>{props.name}</h2>
      </div>

      <form className="message-form" action="#" method="post" onSubmit={(e)=>handleMessageSubmit(e)}>
        <div className="message">
      
          <TextField
          id="outlined-full-width"
          style={{ margin: 2 }}
          multiline={true}
          rows={4}
          placeholder={"Write " + props.name.split(" ")[0] + " your wishes here!"}
          fullWidth
          name="message"
          margin="normal"
          variant="outlined"
          className="wishes-text"
          onClick={()=>{updateMessage(false)}}
          required
          disabled={message}    
          />
        </div>
        <div className="submit-btn-div">
          <Button
          type="submit"
          variant="contained"
          color="primary"
          className="submit-btn"
          endIcon={<Icon>celebration</Icon>}
          disabled={message}
          >
            {
              message?"Wish Sent":"Wish"
            }
          </Button>
        </div>
      </form>
    </div>
  );
}