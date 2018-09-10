import React ,{Component} from 'react';

class ToDoForm extends Component{
  render(){
    return(
      <form>
        <input
          type='text'
          placeholder='Add a new item...'
        />
        <div>
          <button type='submit'>
            Add item
          </button>
        </div>
      </form>
    );
  }
}

export default ToDoForm;
