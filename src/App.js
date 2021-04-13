import React, {Component} from 'react';
import Greet from './greet'



class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:'',
      list:[]
    }
  }


//For adding Local storage
updateInput(key,value){
  //update react state
  this.setState({
  [key]:value
  });
}


//Add Item Function
addItem(){
  //create item with unique ID
  const newItem={
    id:1+ Math.random(),
    value: this.state.newItem.slice()
  };

  //Copy of current list items
  const list = [...this.state.list];

  //add new item to list
  list.push(newItem);

  //update state with new list and reset newItem input
  this.setState({
    list,
    newItem:''
  });
}


//Delete item Function
deleteItem(id){
  //copy current list of items
  const list = [...this.state.list];

  //filter out the deleted item
  const updatedList=list.filter(item=>item.id !==id);
  this.setState({list:updatedList});
}

editItem(id){
  //copy current list of items
const editlist = [...this.state.list];

  //update Editted item
 
}
//Add item section
  render() {
    return (
      <div className='app'>
        <div>
          
        <div className='greet'>
          <Greet/>
        </div>

          Add a todo item..
          <br></br>
          <input
            type='text'
            placeholder='type item here...'
            value={this.state.newItem}
            onChange={e => this.updateInput('newItem', e.target.value)}
          />
          <button onClick={()=>this.addItem()}>
            Add
          </button>
          <br/>
          <div>

          </div>

          <ul>
            {this.state.list.map(item=>{
              return(
                <li key={item.id}>
                  {item.value}
                  <button onClick={()=> this.deleteItem(item.id)}
                  >Delete</button>

                
                  <button onClick={()=> setTodoEditing(item.id)}>Edit</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
