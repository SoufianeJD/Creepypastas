import React from 'react';
import axios from 'axios';
import logo from '../../images/writestorylogo.png';


class AddStory extends React.Component {

    constructor(props) {
      super(props);


      this.onChangeStory = this.onChangeStory.bind(this);
      this.onChangeUser = this.onChangeUser.bind(this);
      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        story: '',
        title:'',
        user:''
      }
    }


    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      })
    }
    onChangeStory(e) {
      this.setState({
        story: e.target.value
      })
    }
    onChangeUser(e) {
      this.setState({
        user: e.target.value
      })
    }

    onSubmit(e) {
      e.preventDefault();
  
      const story = {
        story: this.state.story,
        title: this.state.title,
        user: this.state.user
      }
  
      console.log(story);
  
      axios.post('https://escaperoomandcreepypastas.herokuapp.com//story/Addstory', story)
        .then(res => console.log(res.data));
        
  
      this.setState({
        story: '',
        title:'',
        user:''
      })
      window.location = '/Stories';
    }
    
  
    render() {
      
      return (
        

        <div className="container">
 <br/> <br/> <br/> <br/>
        <div class="row">
        <div class="col-4">
            
        <img src={logo} alt="Logo" />
      
        </div>

        <div class="col-8"><br/>
         

  
          <form onSubmit={this.onSubmit}>
            <div className="form-group"> 
            <div class="col-10">
              <label>Story : </label>
          
                  
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="7" value={this.state.story}
                  onChange={this.onChangeStory}/>
                  
                  
                  </div>
<br/>
                  <div class="col-2">
<label>Title : </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle} /></div>
                  <br/>
<div class="col-2">
<label>Author : </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={this.state.user}
                  onChange={this.onChangeUser} /></div>

            </div>
            <br/>
            <div class="col-3">
            <div className="form-group">
              <input type="submit" value="Publish" className="btn btn-primary" /></div>
            </div>
          </form>
        </div>
    
        </div>
        <br/> <br/> <br/>
        </div>
        
      )
    }
  }
  
export default AddStory;