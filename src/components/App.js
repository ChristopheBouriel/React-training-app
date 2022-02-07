import React from "react";
import ToDoList from './ToDoList';
import NavBar from './Footer';
import AddTask from "./addTask";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import initialData from '../initialData';
import uniqueId from "uniqueid";
import Fetching from './Fetching'

class App extends React.Component {

    state = {
      tasks: [],
      fetching: true
    }

    componentDidMount = () => {
      let delay = Math.floor(Math.random()*5000)

      setTimeout(() => {
        this.setState({
          fetching: false,
          tasks: initialData
        })
      }, delay)
    }

    onToggleCompleted = (taskId) => {
      let taskToUpdate = this.state.tasks.find(task => task.id === taskId)
      taskToUpdate.completed = ! taskToUpdate.completed

      this.setState(prevState => (
        prevState.tasks.map(task => {
          return task.id === taskId ? taskToUpdate : task
        })
      ))
    }

    onAddTask = (newTaskName) => {
      let newTask = {
        id: uniqueId(),
        name: newTaskName,
        completed: false
      }

      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask]
      }))
    }

    onDeleteCompleted = () => {
      this.setState(prevState => {
        let newState = prevState.tasks.filter(task => !task.completed)
        return {
          tasks: newState
        }
      })
    }

    render() {
      return (
        <section id="toDo">
          {this.state.fetching ? <Fetching /> : null}
            <h1 className="m-3">Liste de tâches</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/add-task" element={<AddTask onAddTask={this.onAddTask}/>} />
                    <Route path="/">
                      <Route path=":filter" element={<ToDoList tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                      <Route path="" element={<ToDoList tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted} />} />
                    </Route>
                </Routes>
                <NavBar onDeleteCompleted = {this.onDeleteCompleted}/>
            </BrowserRouter>
        </section>
      )
    }
  }

  export default App
