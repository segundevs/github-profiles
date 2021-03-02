//Create the UI class and export

class UI {
  constructor(){
    this.githubUsers = document.querySelector('.user-profile');
  }

  //Method to display user profile (takes in the response from api call as a parameter)
  showUser(user){
    this.githubUsers.innerHTML = `
    <div class="user-profile">
    <div class="username">
    <img src="${user.avatar_url}" alt="Vacation">
    <h2>${user.login}</h2>
    </div>

  

  <div class="users">
  <div>
  <h2>${user.followers}</h2>
  <p>Followers</p>
  </div>

  <div>
    <h2>${user.following}</h2>
    <p>Following</p>
    </div>

    <div>
      <h2>${user.public_repos}</h2>
      <p>Stars</p>
      </div>
    </div>
</div>
    `
  }


}

export const ui = new UI();