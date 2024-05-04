import React from 'react';
import { Link } from 'react-router-dom';

function First() {


  return (
    <div className='Firstpage'>
      <h1>Welcome to My Page</h1>
      <Link to='/web1'><button>Resource Sharing</button></Link>
      <Link to='/web2'><button>Higher Education</button></Link>
    </div>
  );
}

export default First;
