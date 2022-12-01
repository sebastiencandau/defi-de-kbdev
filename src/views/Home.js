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
        <div>
            <h1>Bienvenue sur le home</h1>
            {formDisplayed === false && (<button onClick={displayForm}>Bouton de test</button>)}
            {formDisplayed === true && (
                <div>
                    <button onClick={closeForm}>close form</button>    
                    <Form/>
                </div>
            )}
        </div>
    )
}

export default Home;