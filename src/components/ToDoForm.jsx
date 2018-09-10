import React ,{Component} from 'react';

class ToDoForm extends Component{
  handleSubmit(e){
    e.preventDefault();
    console.log('Create new item');
  }



  render(){
    return(
      <form onSubmit={this.handleSubmit}>
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
