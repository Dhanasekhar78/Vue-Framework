import axios from 'axios';

export default class Service {

  static async getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  }

}