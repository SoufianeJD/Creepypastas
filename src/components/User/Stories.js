import React from 'react';
import axios from 'axios';
import GenListstoryuser from './GenListstoryuser';

class Stories extends React.Component {

constructor(props){
  super(props);
  this.delstory = this.delstory.bind(this)
  this.state={
    stories:[]
  }
}

componentDidMount() {
  axios.get('https://escaperoomandcreepypastas.herokuapp.com//story/Selectstory')
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
  axios.delete('https://escaperoomandcreepypastas.herokuapp.com//story/Delstory/'+id)
    .then(response => { console.log(response.data)});

  this.setState({
    stories: this.state.stories.filter(el => el._id !== id)
  })
}

storyList(){
return this.state.stories.map(storyCourant => {
return <GenListstoryuser story={storyCourant} delstory={this.delstory}  key={storyCourant._id}/>;
})}

   render() {
    return (

      <div className="container">
      <br/> <br/> <br/> <br/> <br/>
      <blockquote class="blockquote text-center">
      <h3>List Stories</h3>
      </blockquote>
      <table className="table">
      <thead className="thead-light">
       <tr>
           <th>Title</th>
           <th>Author</th>

       </tr>
     
      </thead>
      
      <tbody>
    {this.storyList()}
    
      </tbody>
    
      </table> 
   <br/><br/>
      </div> );
  }
}
  
export default Stories;