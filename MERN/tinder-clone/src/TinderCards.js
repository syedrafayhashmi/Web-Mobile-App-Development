import {React,useState} from 'react'
import "./TinderCards.css"
import TinderCard from 'react-tinder-card'
function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg"

        },
        {
            name:"Jeff Bezos",
            url:"https://media.newyorker.com/photos/5c5daf63ae58262aa8c4a1b6/1:1/w_1708,h_1708,c_limit/Cassidy-Bezos.jpg" 

        },

]);
    return (

        
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map( (person) => (
                <TinderCard 
                className="swipe"
                key={character.name}
                preventSwipe={["up","down"]}
                onSwipe={(dir)=> swiped(dir, character.name)}
                onCardLeftScreen={()=> outOfFrame(character.name)}
                >

                </TinderCard>           
            ))}

            </div>


            
        </div>
    );
}

export default TinderCards
