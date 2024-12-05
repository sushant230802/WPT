import { useState } from 'react';

function User() {
    const [count,setCount] =useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return (
        <div className="userclass">
        <button onClick={handleClick} className="clickbutton">clicked {count} times</button>
        </div>
    );
  }
 
export default User;