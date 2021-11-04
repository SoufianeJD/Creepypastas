import React from 'react';
import axios from 'axios';
import logo from '../../images/laugh.gif';

class Signup extends React.Component {

constructor(props){
  super(props);

  this.onChangeLocal = this.onChangeLocal.bind(this);
  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onChangeNom = this.onChangeNom.bind(this);
  this.onChangePrenom = this.onChangePrenom.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangePassword = this.onChangePassword.bind(this);
  this.onSubmit = this.onSubmit.bind(this);

  this.state={
      local:'' , email:'',username:'', nom:'', prenom:'',password:'', locals: []
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

onChangeLocal(e){
  this.setState({
    local:e.target.value
  })
}

onChangeUsername(e){
  this.setState({
    username:e.target.value
  })
}

onChangeNom(e){
  this.setState({
    nom:e.target.value
  })
}
onChangePrenom(e){
  this.setState({
    prenom:e.target.value
  })
}
onChangeEmail(e){
  this.setState({
    email:e.target.value
  })
}

onChangePassword(e){
  this.setState({
    password:e.target.value
  })
}

onSubmit(e){
  e.preventDefault();
  const util={
    local:this.state.local,
    username:this.state.username,
    nom:this.state.nom,
    prenom:this.state.prenom,
    email:this.state.email,
    password:this.state.password
  }

  console.log(util);

  axios.post('http://localhost:4000/Add', util)
  .then(res => console.log(res.data));
    window.location = '/signinclient';
}


  render() {
  return (
    <div className=".container-fluid">
      <br/>    <br/>    <br/>    <br/>    <br/>
      
  <div class="row">
  <div class="col-6">

  <img src={logo} alt="Logo" />


  </div>
  <div class="col-3">
  <br/>
   <h2>S'enregister 📋</h2><br/>
   <form onSubmit={this.onSubmit}>
<div className="form-group">
<div class="col-12">
<label>Les adresses où on est ouvert pour l'instant, plus à venir !</label>
<select  required
              className="form-control"
              value={this.state.local}
              onChange={this.onChangeLocal}>
              {
                this.state.locals.map(function(local) {
                  return <option 
                    key={local}
                    value={local}>{local}
                    </option>;
                })
              }
          </select></div>
          <div class="col-12">
       

          <label>Surnom :</label>
  <input type="text"
  required
  className="form-control" value={this.state.username} onChange={this.onChangeUsername}/></div>
  <div class="col-12">
  <label>Nom :</label>
  <input type="text"
  required
  className="form-control" value={this.state.nom} onChange={this.onChangeNom}/></div>
  <div class="col-12">
<label>Prénom :</label>
  <input type="text"
  required
  className="form-control"value={this.state.prenom}onChange={this.onChangePrenom}/></div>
  <div class="col-12">
<label>Courriel :</label>
  <input type="email"
  required
  className="form-control"value={this.state.email}onChange={this.onChangeEmail}/></div>
  <div class="col-12">
<label>Mot de passe :</label>
  <input type="password"
  required
  className="form-control" value={this.state.password} onChange={this.onChangePassword}/></div>
  
</div>
<div class="col-12">
<div className="form-group">
  <input type="submit" value="Ajout" className="btn btn-primary"/>
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
export default Signup;