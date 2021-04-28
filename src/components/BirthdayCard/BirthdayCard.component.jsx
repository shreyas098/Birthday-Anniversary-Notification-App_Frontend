/*
        Card the holds data about the associate whose birthdate is tommorow and provides form to submit a message
*/

import React from 'react';
import "./BirthdayCard.styles.css";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


export default function BirthdayCard(props) {
 

  return (
    <div className="birthday-card">

      <div className="avatar">
        <img className="dp" src={props.img} alt="dp" />
      </div>  
        <div className="birth-date">
            Happy {props.date}! 
        </div>
        <div className="name">

            <h2>{props.name}</h2>
        </div>

        
        <div className="message">
        <TextField
          id="outlined-full-width"
          style={{ margin: 2 }}
          multiline={true}
          rows={4}
          placeholder={"Write " + props.name.split(" ")[0] + " your wishes here!"}
          fullWidth
          margin="normal"
          variant="outlined"
          className="wishes-text"
          required
        />
          </div>

      <div className="submit-btn-div">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="submit-btn"
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      </div>

      <div className="birthday-svg-1">
      </div>
    </div>
  );
}