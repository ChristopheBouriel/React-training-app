import React from "react";

class ToDo extends React.Component {

    state = {
        completed: this.props.task.completed
    }

    toggleCompleted = () => {
        this.setState(prevState => ({
            completed: !prevState.completed
        }))
        this.props.onToggleCompleted(this.props.task.id)
    }

    render() {
        return (
            <li className={"list-group-item d-flex align-items-center justify-content-between " + (this.state.completed ? 'bg-success': null)}>
                {this.props.task.name} 
                <button className={"btn btn-sm btn-outline-success " + (this.state.completed ? 'bg-success': 'btn-outline-success')} onClick={() => this.toggleCompleted()}>&#x2713;</button>
            </li>
        )
    }
}

export default ToDo
