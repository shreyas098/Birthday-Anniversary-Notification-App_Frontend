import React from 'react';
import "./BirthdayCard.styles.css";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

export default function BirthdayCard() {
 

  return (
    <div className="birthday-card">
        <div className="birth-date">
            21 April, 2021
        </div>
        <div className="name">

            <h2>FirstName LastName</h2>
        </div>

        <div className="help-text">
            Send Firstname your Wishes!
        </div>
        <div className="message">
        <TextField
          id="outlined-full-width"
          style={{ margin: 2 }}
          multiline={true}
          rows={4}
          placeholder="Write your wishes here *"
          fullWidth
          margin="normal"
          variant="outlined"
          required
        />
          </div>

      <div className="submit-btn">
      <Button
        type="submit"
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
      >
        Send
      </Button>
      </div>

      <div className="birthday-svg-1">
          {/* <img alt="birthday svg" src={svg1} /> */}
      </div>
    </div>
  );
}