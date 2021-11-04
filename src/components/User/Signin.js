import React from 'react';
import axios from 'axios';

class Signin extends React.Component {

constructor(props){
  super(props);

  this.onChangeUser = this.onChangeUser.bind(this);
  this.onChangePw = this.onChangePw.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state={
   user:'', pw:''
  }
}


componentDidMount() {
  axios.get('http://localhost:4000/Selectt')
    .then(response => {
      if (response.data.length > 0) {
        this.setState({
          locals: response.data.map(local => local.local),
          local: response.data[0].local
        })
      }
    })
    .catch((error) => {
      console.log(error);
    })

}


onChangeUser(e){
  this.setState({
    user:e.target.value
  })
}

onChangePw(e){
  this.setState({
    pw:e.target.value
  })
}

onSubmit(e){
  e.preventDefault();
  const util={
    user:this.state.user,
    pw:this.state.pw
  }

  console.log(util);

  axios.post('http://localhost:4000/Add', util)
  .then(res => console.log(res.data));
    window.location = '/signinclient';
}


  render() {
  return (
    <div className="container">
      <br/>    <br/>    <br/>    <br/>    <br/>  <br/>
      
  <div class="row">
  <div class="col-6">

  </div>
  <div class="col-3">
  <br/>
   <h2>Sign In 📋</h2><br/>
   <form onSubmit={this.onSubmit}>
<div className="form-group">
          <div class="col-12">     

          <label>Username :</label>
  <input type="text"
  required
  className="form-control" value={this.state.user} onChange={this.onChangeUser}/></div>
<br/>
  <div class="col-12">
<label>Password :</label>
  <input type="password"
  required
  className="form-control" value={this.state.pw} onChange={this.onChangePw}/></div>
  
</div>
<br/>
<div class="col-12">
<div className="form-group">
  <input type="submit" value="Sign In" className="btn btn-primary"/>
</div>  </div>
   </form>
    </div>
    <div class="col-3">
   
</div>
    </div>
    
    <br/>  <br/>  <br/> 
    </div>
  );
}
}
export default Signin;