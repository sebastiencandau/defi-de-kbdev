import React from "react";
import { useNavigate } from 'react-router-dom'


const Form = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/connected');
    }

    return (
    <div className="form-class">
            <h2>Se connecter</h2>
        <div className="form-section">
                <h4>Utilisateur</h4>
            <div>
                <span>Nom: </span><input type="text"></input>
            </div>
            <div>
                <span>Prénom: </span><input type="text"></input>
            </div>
            <div>
                <span>Age: </span><input type="text"></input>
            </div>
            <div>
                <span>Nationalité </span><input type="text"></input>
            </div>
            <div>
                <span>Genre: </span><input type="text"></input>
            </div>
            {/* METTEZ D'AUTRES TRUCS J'EN PEUX DEJA PLUS */}
        </div>
            <button onClick={handleClick}>GO</button>
    </div>
    )
}

export default Form