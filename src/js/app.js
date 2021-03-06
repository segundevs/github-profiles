import 'babel-polyfill';
import { http } from './http';
import { ui } from './ui';
require('dotenv').config();

const userInput = document.querySelector('.github-username');

//Listen for a key up event on the input field
userInput.addEventListener('keyup', searchUser);

function searchUser(e){
  
  //Assign the value of the user input to a variable
  const searchItem = e.target.value
  //Check if user input in not empty
  if(searchItem !== ''){
    //Make http call to the github API and pass in the user input as a parameter
    http.get(searchItem)
    //Get response and check if user exists, else display user profile from the UI module
        .then(data => {
          if(data.response.message === 'Not Found'){
            ui.showAlert('User not found', 'alert error')
            ui.clearProfile();
          }else {
            ui.showUser(data.response);
            ui.showRepos(data.repos)
          }
        })
  }else {
    ui.clearProfile();
  }
  
    
  e.preventDefault(); 
}






  
