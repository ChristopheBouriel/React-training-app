import React from "react";
import { FaSpinner} from 'react-icons/fa';

const Fetching = () => {
    return (
        <div className='fetching'>
        <FaSpinner className="spinner" />
        </div>
    )
}

export default Fetching

/** Le but de ce composant est seulement de simuler le temps de réponse
 *  du serveur après avoir reçu la requête demandant les données */