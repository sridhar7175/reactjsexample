import React,{Component} from 'react'
class Todos extends Component{
    constructor(){
        super();
        this.state={
            todos:[],
            todo:''  
        }
    }
    addTodo=()=>{
        var todo=this.state.todo;
        this.setState({
            todos:[
                ...this.state.todos,
                todo 
            ]
        },()=>{
            this.setState({
                todo:''

            })
        })
    }
        onChange=(e)=>{
            console.log(e.target.value)
            this.setState({
                todo:e.target.value

            })

        }
      render(){
          return(
              <div>
                  <h1>Todo</h1>
                  <input type="text"  value={this.state.todo} name="todo" onChange={this.onChange}/>
                  <button onClick={this.addTodo}>AddTodo</button>
                  <ul>
                  {
                          this.state.todos.map((todo)=>{
                             return<li key={todo}>{todo} </li>
                          })     
                      }
                  </ul>
              </div>
          )
      }
}
export default Todos