import BirthdayCard from "../BirthdayCard/BirthdayCard.component";
import "./Wish.styles.css";

const Wish = ()=>{

    return (
        <div className="add-wishes">
        <h1>Birthdays Today</h1>
        <div className="birthday-cards">
            <BirthdayCard />

        </div>

        </div>
    )
}

export default Wish;