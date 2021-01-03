import axios from "@/plugins/axios/wp/";

class Map {
  async fetchMaps() {
    const response = await axios.get(`/wp-json/map/v1/list`);
    return response;
  }
  async createMap() {
    const data = {
      title: "New Map",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores possimus ratione placeat ea officia quos excepturi maiores fugit itaque, quia doloribus ipsam sunt distinctio vel nemo officiis magnam deserunt accusamus."
    };
    const response = await axios.post(`/wp-json/wp/v2/map/`, data);
    return response;
  }
  async saveMap(id, title, excerpt, catId) {
    console.log(catId);
    const data = {
      title: title,
      excerpt: excerpt,
      categories: catId
    };
    const response = await axios.post(`/wp-json/wp/v2/map/${id}`, data);
    return response;
  }
}

const mapApi = new Map();

export default mapApi;
