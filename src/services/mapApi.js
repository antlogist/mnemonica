import axios from "@/plugins/axios/wp/";

class Map {
  async fetchMaps(req) {
    console.log(req);
    let response;
    if (!req) {
      response = await axios.get(`/wp-json/map/v1/list`);
    } else if (req === "list") {
      response = await axios.get(`/wp-json/map/v1/listid`);
    } else {
      response = await axios.get(`/wp-json/map/v1/selected/${req}`);
    }
    return response;
  }

  async createMap() {
    const data = {
      title: "New Map",
      excerpt: JSON.stringify({
        isActivated: false,
        x: "0",
        y: "0",
        width: "500",
        height: "500",
        color: "#88885CFF",
        class: ["parent-map", "s-rectangle"],
        descr: "Map Description...",
        notesIds: [],
        img: "",
        sound: "",
        smell: "",
        children: {}
      })
    };
    const response = await axios.post(`/wp-json/wp/v2/map/`, data);
    return response;
  }

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
