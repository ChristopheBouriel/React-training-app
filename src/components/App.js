import React from "react";
import ToDoList from './ToDoList';
import NavBar from './Footer';
import AddTask from "./addTask";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

class App extends React.Component {
    render() {
      return (
        <section id="toDo">
            <h1 className="m-3">Liste de tâches</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="add-task" element={<AddTask />} />
                    <Route path="/:filter" element={<ToDoList />}/>
                </Routes>
                <NavBar />
            </BrowserRouter>
        </section>
      )
    }
  }

  export default App