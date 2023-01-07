import React, { useState,useEffect  } from 'react'
import './Stopwatch.css';
function Footer() {
    let arr=['R','E','C','T','O','P']
    
    
    const[name,setName]=useState('');

  useEffect(() => {
    let str='';let index=0;
    const interval = setInterval(() => {
      setName(str+=arr[index]);
      index++
      if(index===6){ 
        index=0
        str='';
    }
    }, 500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='footer'>{name}</div>
  )
}

export default Footer