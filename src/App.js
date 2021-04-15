import React, {Component} from 'react';
import StatusUpdate from './statusUpdate';
import AddItem from './add_Item';
import DeleteItem from './delete_Item';


// separate components
// pass props to new comp
// changes func to Arr Func

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      newItem:'',
      list:[]
    }
  }


//For adding Local storage
updateInput=(key,value)=>{
  //update react state
  this.setState({
  [key]:value
  });
}


//Add Item Function
addItem=()=>{
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
 deleteItem=(id)=>{
  //copy current list of items
  const list = [...this.state.list];

  //filter out the deleted item
  const updatedList=list.filter(item=>item.id !==id);
  this.setState({list:updatedList});
}

//Add item section
  render() {
    return (
      <div className='app'>
        <div>
          
        
        <div className='statusUpdate'>
        <StatusUpdate/>
        </div> 
        
        <div>
          <AddItem new_Item={this.state.newItem} updateInput={this.updateInput} addItem={this.addItem}/>
          </div>
          
          <div>
          <br></br>
            <DeleteItem deleteItem={this.deleteItem}/>
          </div>

          <ul>
          {this.state.list.map(item=>{ 
          return(
                <li key={item.id}> {item.value}
                  <button onClick={()=> this.deleteItem(item.id)}>Delete</button>
                </li>
          )})
        }
      </ul>
      
        </div>
      </div>
    );
  }
}

export default App;

