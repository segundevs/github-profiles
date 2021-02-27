import 'babel-polyfill';
import { http } from './http';

http.get()
.then(data => console.log(data))
.catch(err => console.log(err));
  
