import { Component, OnInit } from '@angular/core';

interface Todo{
  title:string;
  completed:boolean
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todos:Todo[]=[


  ];

  addTodo(todo):void{
    if(todo.value.length){
      let newTodo:Todo = {title:todo.value,completed:false};
      this.todos.push(newTodo);
      todo.value ="";

    }
  }

  removeTodo(i){
    this.todos.splice(i,1);
  }

  completed(i){
    if(this.todos[i].completed){
      this.todos[i].completed = false;

    }else{
      this.todos[i].completed=true;
    }
  }




  constructor() { }

  ngOnInit(): void {

  }

}
