import React from "react";
import ToDo from './ToDo';
import { useParams } from 'react-router-dom';

const ToDoList = ({tasks, onToggleCompleted}) => {
    let params = useParams();
    let filteredTasks;

    switch (params.filter) {
        case 'completed': filteredTasks = tasks.filter(task => task.completed)
        break;
        case undefined: filteredTasks = tasks
        break;
        default: return <p className="m-3">Unhandled demand</p> 
    }

    if (filteredTasks.length === 0) {
        return (
            <p>Aucune tâche à afficher</p>
        )
    } else {
        return (
            /** Ci-dessous le racourci pour <React.Fragment> (car on ne peux retourner qu'un élément, donc il faut une div
            *   qui fasse office de container en quelque sorte)
            */
            <>
                <p className="mx-3">Si tu dois scroller... c'est que tu dois te bouger ^^</p>
                <ul className="list-group m-3">
                    {
                        filteredTasks.map((task) => <ToDo task={task} key={task.id} onToggleCompleted={onToggleCompleted} />)
                    }
                </ul>
            </>
        )
    }
}

export default ToDoList