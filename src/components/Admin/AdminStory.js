import React from 'react';
import axios from 'axios';
import GenListstory from './GenListstory';

class AdminStory extends React.Component {

constructor(props){
  super(props);
  this.delstory = this.delstory.bind(this)
  this.state={
    stories:[]
  }
}

componentDidMount() {
  axios.get('https://escaperoomandcreepypastas.herokuapp.com/story/Selectstory')
    .then(response => {
if (response.data.length>0){
      this.setState({
        stories:response.data})
}
    })
    .catch((error) => {
      console.log(error);
    })
}

delstory(id) {
  axios.delete('https://escaperoomandcreepypastas.herokuapp.com/story/Delstory/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
    stories: this.state.stories.filter(el => el._id !== id)
  })
}

storyList(){
return this.state.stories.map(storyCourant => {
return <GenListstory story={storyCourant} delstory={this.delstory}  key={storyCourant._id}/>;
})}

   render() {
    return (
      
      <div className="container">
        <br/> <br/> <br/> <br/> <br/>
      <h3>Story List</h3>
      <table className="table">
      <thead className="thead-light">
       <tr>
           <th>Title</th>
           <th>User</th>

       </tr>
     
      </thead>
      
      <tbody>
    {this.storyList()}
    
      </tbody>
      

      </table>
   
      </div> );
  }
}
  
export default AdminStory;