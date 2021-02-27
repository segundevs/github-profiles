class Http {

  async get(){
    const response = await fetch('https://api.github.com/users');

    const data = await response.json();

    return data;
    
  }
}

export const http = new Http();