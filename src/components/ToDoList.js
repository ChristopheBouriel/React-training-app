import React from "react";

const ToDoList = () => {
    return (
        /** Ci-dessous le racourci pour <React.Fragment> (car on ne peux retourner qu'un élément, donc il faut une div
        *   qui fasse office de container en quelque sorte)
        */
        <>
            <p>Si tu dois scroller... c'est que tu dois te bouger ^^</p>
            <ul className="list-group m-3">
                <li className="list-group-item d-flex align-tiems-center">
                    Ranger la vaisselle 
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center">
                    Répondre appel d'offres
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center">
                    Signer contrat
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
                <li className="list-group-item d-flex align-tiems-center">
                    Ranger la salon
                    <button className="btn btn-sm ml-auto btn-outline-success">&#x2713;</button>
                </li>
            </ul>
        </>
    )
}

export default ToDoList