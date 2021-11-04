import React from 'react';
import { Link } from 'react-router-dom';

class GenListstoryuser extends React.Component {
  render() {
  return (
   <tr>
  <td>{this.props.story.title}</td>
  <td>{this.props.story.user}</td>

<td> <Link to={"/Story/"+this.props.story._id}>Read</Link> </td>

</tr>
  );
}
}

export default GenListstoryuser;