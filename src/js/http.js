//Create class for http call to github API and export

class Http {

  async get(user){
    const responseData = await fetch(`https://api.github.com/users/${user}`);

    const response = await responseData.json();

    return {
      response
    }
    
  }
}

export const http = new Http();