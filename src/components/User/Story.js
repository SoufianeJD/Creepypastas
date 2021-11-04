import React from 'react';
import axios from 'axios';

class ViewStory extends React.Component {

  constructor(props){
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeUser = this.onChangeUser.bind(this);
    this.onChangeStory = this.onChangeStory.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  
    this.state={
     title:'' , story:'', user:''
    }
  }

componentDidMount() {

  console.log(this.props.match.params.id)
  axios.get('https://escaperoomandcreepypastas.herokuapp.com//story/SelectStory/'+this.props.match.params.id)
    .then(response => {

      this.setState({
        title: response.data.title,
        story: response.data.story,
        user: response.data.user, 
        id:this.props.match.params.id
      })   })
    .catch((error)=> {
      console.log(error);
    })


console.log(this.state.id)

}



onChangeTitle(e){ this.setState({
  title:e.target.value
})
}


onChangeStory(e){ this.setState({
    story:e.target.value
  })
}
onChangeUser(e){  this.setState({
    user:e.target.value
  })
}


onSubmit(e){ e.preventDefault();
  const util={
    title:this.state.title,
    user:this.state.user,
    story:this.state.story,
    
  }

  console.log(util);

}




  render() {
  return (

<div className="container">
      
<br/><br/><br/><br/><br/>

<blockquote class="blockquote text-center">
<h1>{this.state.title}</h1><br/>
<footer class="blockquote-footer">By: {this.state.user} 🌹<br/><br/></footer>
  <p class="mb-0">{this.state.story} </p><br/><br/>
 



 <h3>The END.🥀</h3>
</blockquote>


<br/><br/><br/><br/>






    </div> 


  );
}
}
  
export default ViewStory;