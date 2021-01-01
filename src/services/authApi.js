import axios from "@/plugins/axios/wp/";

class Auth {
  async login() {
    const options = {
      headers: {
        Authorization: localStorage.mnemonicaToken
      }
    };
    const response = await axios.post(`/wp-json/wp/v2/login`, {}, options);
    return response;
  }
}

const auth = new Auth();

export default auth;
