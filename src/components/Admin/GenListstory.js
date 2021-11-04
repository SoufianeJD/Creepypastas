import React from 'react';
import { Link } from 'react-router-dom';

class GenListstory extends React.Component {
  render() {
  return (
   <tr>
  <td>{this.props.story.title}</td>
  <td>{this.props.story.user}</td>

<td> <Link to={"/Story/"+this.props.story._id}>Read</Link>  |  <a href="#" onClick={()=> {this.props.delstory(this.props.story._id)}}>Delete</a>  </td>

</tr>
  );
}
}

export default GenListstory;