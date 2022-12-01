import { useState, React } from "react";
import Form from "../components/Form";

const Home = () => {
    console.log("hello");

    const [formDisplayed, setFormDisplayedTo] = useState(false);
    
    const displayForm = () => {
        if(formDisplayed === false){
            setFormDisplayedTo(true);
        }
    }

    const closeForm = () => {
        if(formDisplayed === true){
            setFormDisplayedTo(false);
        }
    }

    return (
        <div className="home-class-title">
            <h1>Bienvenue sur le site de la FSociety</h1>
            <p>Ici, une fois connecté, vous trouverez les réponses à toutes vos questions...</p>
        <div className="home-class">
            {formDisplayed === false && (<button onClick={displayForm}>Se connecter</button>)}
            {formDisplayed === true && (
                <div>
                    <button onClick={closeForm}>abandonner</button>
                    <Form/>
                </div>
            )}
        </div>
        </div>
    )
}

export default Home;