import React from "react";

class ToDo extends React.Component {
    render() {
        return (
            <li className="list-group-item d-flex align-items-center justify-content-between">
                {this.props.task.name} 
                <button className="btn btn-sm btn-outline-success">&#x2713;</button>
            </li>
        )
    }
}

export default ToDo