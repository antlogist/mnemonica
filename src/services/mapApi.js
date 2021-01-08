import axios from "@/plugins/axios/wp/";

class Map {
  async fetchMaps() {
    const response = await axios.get(`/wp-json/map/v1/list`);
    return response;
  }

  async createMap() {
    const data = {
      title: "New Map",
      excerpt: JSON.stringify({
        isActivated: false,
        x: "0",
        y: "0",
        width: "100",
        height: "100",
        color: "#88885CFF",
        class: ["parent-map", "s-rectangle"],
        descr: "Map Description...",
        children: {}
      })
    };
    const response = await axios.post(`/wp-json/wp/v2/map/`, data);
    return response;
  }

  async saveMaps() {}

  async saveMap(id, title, excerpt) {
    const data = {
      title: title,
      excerpt: JSON.stringify(excerpt)
    };
    const response = await axios.post(`/wp-json/wp/v2/map/${id}`, data);
    return response;
  }
}

const mapApi = new Map();

export default mapApi;
