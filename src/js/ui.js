//Create the UI class and export

class UI {
  constructor(){
    this.githubUsers = document.querySelector('.user-profile');
  }

  //Method to display user profile (takes in the users response from api call as a parameter)
  showUser(user){
    this.githubUsers.innerHTML = `
    <div class="users-profiles">
      <div class="username">
          <img src="${user.avatar_url}" alt="Vacation">
          <a href="${user.html_url}" target="_blank" class="btn-primary" >View Profile</a>
      </div>

      <div class=""user-details>
        <div class="users">
            <div>
              <h2>${user.followers}</h2>
              <p>Followers</p>
            </div>
          <div class="line1"></div>
            <div>
              <h2>${user.following}</h2>
              <p>Following</p>
            </div>
          <div class="line2"></div>
            <div>
              <h2>${user.public_repos}</h2>
              <p>Public Repos</p>
            </div>
          <div class="line3"></div>
          <div class="gists">
              <h2>${user.public_gists}</h2>
              <p>Public Gists</p>
          </div>
        </div>

        <div class="description">
            <h3>Company: ${user.company}</h3>
            <h3>Website: ${user.blog}</h3>
            <h3>Location: ${user.location}</h3>
            <h3>Member since: ${user.created_at}</h3>
            <h3>Bio: ${user.bio}</h3>
        </div>
      </div>
  </div>    
  
<h2 class="sub-heading">Public Repos</h2>
<div class="repos-container"></div>
    `
  }

   //Method to display users repos (takes in the users repos response from api call as a parameter)
  showRepos(repos){
    let output = '';
    repos.forEach((repo) => {
      output+=`
    <div class="repos">
      <div class="repo-name">
        <a class="repo-link" href="${repo.html_url}" target="_blank">${repo.name}</a>
      </div>
      <div class="repo-data">
        <span class="pink">Stars: ${repo.stargazers_count}</span>
        <span class="blue">Watchers: ${repo.watchers_count}</span>
        <span class="orange">Forks: ${repo.forks}</span>
      </div>
    </div>
  `
    })
  document.querySelector('.repos-container').innerHTML = output;
  }

  //Method to show alerts
  showAlert(msg, className){
    this.clearAlert();
    //Build container(div) for alert message
    const header = document.querySelector('header');
    const inputField = document.querySelector('.github-username');

    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(msg));

    header.insertBefore(div, inputField);

    //Make alerts disappear after 3secs
    setTimeout(()=>{
      this.clearAlert();
    }, 3000)
  }

  //Check if there's an alert and clear it
  clearAlert(){
   const alertMsg = document.querySelector('.alert');

   if(alertMsg){
      alertMsg.remove();
   }
  }

  //Clear profile method
  clearProfile(){
    this.githubUsers.innerHTML = '';
  }

}

export const ui = new UI();