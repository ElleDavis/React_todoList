import React from 'react'

function Add_Item(props) {
    console.log(props)
    return (
        <div>
        Lets Get Started:
          <input
            type='text'
            placeholder='type item here...'
            value={props.newItem}
            onChange={e => props.updateInput('newItem', e.target.value)}
          />
    
          <button onClick={()=>props.addItem()}>
            Add 
          </button>
          
          </div>
    )
}

export default Add_Item
