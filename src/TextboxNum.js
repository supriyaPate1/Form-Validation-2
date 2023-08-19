import { click } from '@testing-library/user-event/dist/click';
import React, { Component } from 'react'
import './textBox.css'
export default class TextboxNum extends Component {
    state={
        text:'',
        status:"",
        day:"",
        hobbie:[],
        hobbie1:[],
       class:"main",
        
    }
    //function to print the number entered in input field on button click
    textInputField=()=>{
        var textbox=document.getElementById('Inpval').value;
        if(textbox===""){
            this.setState({
                text:textbox,
                status:"input field is empty."
                
            })
        }
        else if(textbox!==""){
            this.setState({
                text:textbox,
                status:"Number is:"
                
            })
        }
           
        document.getElementById('Inpval').value="";
         
    }

 //function to print the text area in upper case on button click

    upperClick=()=>{
        document.getElementById('textAr').value=document.getElementById('textAr').value.toUpperCase();
    }

 //function to choose a day number and display days according to that number

    chooseDay=()=>{
        var days=document.getElementById('day').value;
        console.log(days);
        this.setState({
             day:days,
        })
    }

//function to choose hobbies and display on clicking submit button
    chooseHobbies=()=>{
        this.setState({
             hobbie:Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(element=>element.value),
         })
     }
 
  

//function to apply theme on button click   
    chooseTheme=(event)=>{
        var click=event.target.innerHTML;
        console.log(click);
        if(click==='Light Theme'){
           this.setState({
            class:'light',
           })         
        }
        else if(click==='Dark Theme'){
            this.setState({
                class:'dark',
            }) 
        }          
    }
    

  render() {
    return (
        <>
         <div className={this.state.class} >
        <center>
       
      <div className='head'>.....TextBox that accepts only numbers.....</div>
      <div>
           <table className='disTable'>
            <tr>
                <td>Enter Value:</td>
                <td><input type='number' id='Inpval'></input></td>
                <td><button type='button' id='btn' onClick={this.textInputField}>Click Me</button></td>
               
            </tr>
            <tr>
                <h5>{this.state.status} {this.state.text}</h5>
            </tr>
            
            <tr><td colSpan={3}><hr></hr></td></tr>
            <tr>
                <td>Text Area:</td>
                <td><textarea id='textAr'>
                   Hi there! How are you doing? This text area box contains some text that will convert to uppercase on button click.
                </textarea></td>
                <td><button type='button' id='btn' onClick={this.upperClick}>Click Me</button></td>   
            </tr>
            <tr><td colSpan={3}><hr></hr></td></tr>
            <tr><td>Display day name:</td>
                <select id='day' onChange={this.chooseDay}>
                    <option>Select a no. to display day name</option>
                    <option value='Monday'>1</option>
                    <option value='Tuesday'>2</option>
                    <option value='Wednesday'>3</option>
                    <option value='Thursday'>4</option>
                    <option value='Friday'>5</option>
                    <option value='saturday'>6</option>
                    <option value='Sunday'>7</option><br></br>
                </select>
            </tr>
            <h5>The day selected is {this.state.day}</h5>
            <tr><td colSpan={3}><hr></hr></td></tr>
           
           <tr>
                <td>Choose Hobbies:</td>
                <td><input type='checkbox' className='checkB' value='Reading'></input>Reading
                <input type='checkbox' className='checkB' value='Dancing'></input>Dancing
                <input type='checkbox' className='checkB' value='Singing'></input>Singing</td>
                <td><button type='button' id='btn'  onClick={this.chooseHobbies}>Submit</button></td>
                 
           </tr>
           <tr> <h5> Choosen hobbies are:</h5> {this.state.hobbie.map(val=>{return <h5>{val}</h5>})}  </tr>
           <tr>
             
           </tr>
           <tr><td colSpan={3}><hr></hr></td></tr>
           <tr >
            <td>Choose a theme:</td>
                <td><button  onClick={this.chooseTheme}>Light Theme</button></td>
                <td><button  onClick={this.chooseTheme}>Dark Theme</button></td>
           </tr>
           </table>
      </div>
      
      </center>
      </div>   
      </>
    )
  }
}
