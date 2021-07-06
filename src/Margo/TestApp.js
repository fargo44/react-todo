import React from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/Form"
import "./App.css";
import firebase from "./firestore";

class TestApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        }
        this.getData();
    }

    async getData() {
        this.state.todos = [];
        const items = await firebase.firestore().collection("todos").get()
        items.forEach(doc => {
            console.log(doc.data())
            const description = doc.data().description;
            const done = doc.data().done;
            const newTodos = [...this.state.todos, {description, done}]
            this.setState({
                todos: newTodos
            })
        })
    }

    addTodo = (description, done) => {
        const db = firebase.firestore();
        const userRef = db.collection("todos").doc(description).set({
          description: description,
          done: false
        });
        this.getData();
      };
    
    completeTodo = description => {
        console.log("mark as complete")
        const db = firebase.firestore();
    
        const dbObj = db.collection("todos").doc(description).update({
            description: description, 
            done: true
        })
        this.getData();
      };
    
    removeTodo = description => {
        const db = firebase.firestore();
        const userRef = db.collection("todos").doc(description).delete();
        this.getData();
      };

    render() {
        return (
            <div className="app">
            <div className="todo-list">
                {this.state.todos.map((todo) => (
                <Todo
                    todo={todo}
                    done={todo.done}
                    completeTodo={this.completeTodo}
                    removeTodo={this.removeTodo}
                />
                ))}
                <TodoForm addTodo={this.addTodo} />
            </div>
            </div>
        )
    }

}

export default TestApp