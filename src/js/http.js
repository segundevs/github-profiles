//Create class for http call to github API and export
require('dotenv').config();

class Http {
  constructor(){
    this.client_id = process.env.CLIENT_ID;
    this.client_secret = process.env.CLIENT_SECRET;
    this.repos_number = 5;
    this.repos_sort = 'created: asc';
  }
  async get(user){
    const responseData = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const response = await responseData.json();

    const repoData = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_number}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repos = await repoData.json();

    return {
      response,
      repos
    }
    
  }
}

export const http = new Http();