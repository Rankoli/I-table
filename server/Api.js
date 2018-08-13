import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:60129/Services.asmx`
});