import React ,{Component, createRef} from 'react';
class ToDoForm extends Component{
//to get the value of input elements when submitting a form, we need to create a reference
// References are created as properties of our class, by using the React.createRef() method.
// we need to change the binding of this for our event handler, so that we can access the instance of our component.
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  textInput = createRef();

  handleSubmit = e => {
    e.preventDefault();
    const text = this.textInput.current.value.trim();
    this.props.addToDo(text);
    e.currentTarget.reset();

  };

  //We extended the constructor to set the binding of this for our event handler.
  //created the reference textInput with createRef().
  //added the reference to the input field, by using the ref attribute.
  //added the value of the input reference to our console message in the event handler.

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Add a new item...'
          ref={this.textInput}
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
