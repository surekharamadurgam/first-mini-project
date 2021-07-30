import React from 'react';
import Reactdom from 'react-dom';
import "./index.css";
let currdate=new Date()
currdate=currdate.getHours();
let wish='';
let cssstyle={};
if(currdate>=1 && currdate<12){
    wish="good morning";
   cssstyle.color='green'
}
else if(currdate>=12 && currdate<19){
    wish="good afternoon";
    cssstyle.color='orange';
}
else{
    wish="good night"
    cssstyle.color='blue';
};
Reactdom.render(
    <>
    <div>
       <h1 className='head'>hello guys  <span style={cssstyle}> {wish} </span></h1>
       </div> 
    </>,
document.getElementById('root')
);
