import React from "react";
import { Navigate } from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { addTask } from '../actions/index';
class AddTask extends React.Component {

    handleSubmit = (e) => {
        let item = {
            id: uuidv4(),
            name: this.newTask.value,
            completed: false
        }
        e.preventDefault()
        this.props.addTask(item)
    }

    render() {
        return (
            <section>
                {this.newTask && (<Navigate to="/" replace={true} />)}
                <h1 className="m-3">Nouvelle tâche</h1>
                <div className="card mx-3">
                    <form className="card-body" onSubmit={(e) => {this.handleSubmit(e)}}>
                        <div className="form-group">
                            <label form="taskName">Nom de la tâche</label>
                            <input type="text" className="form-control" name="taskName" id="taskName" required 
                            ref={input => this.newTask = input} />
                        </div>
                        <button type="submit" className="btn btn-primary">Créer</button>
                    </form>
                </div>
            </section>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (item) => {
            dispatch(addTask(item))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTask)