import axios from "@/plugins/axios/wp/";

class Note {
  async fetchCats() {
    const response = await axios.get(`/wp-json/note/v1/cats`);
    return response;
  }

  async fetchNotes(page) {
    const response = await axios.get(`/wp-json/note/v1/list/${page}`);
    return response;
  }

  async fetchNote(id) {
    const response = await axios.get(`/wp-json/wp/v2/note/${id}`);
    return response;
  }

  async deleteNote(id) {
    const response = await axios.delete(`/wp-json/wp/v2/note/${id}`);
    return response;
  }

  async createNote() {
    const data = {
      title: "New note",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores possimus ratione placeat ea officia quos excepturi maiores fugit itaque, quia doloribus ipsam sunt distinctio vel nemo officiis magnam deserunt accusamus."
    };
    const response = await axios.post(`/wp-json/wp/v2/note/`, data);
    return response;
  }

  async saveNote(id, title, excerpt, catId) {
    const data = {
      title: title,
      excerpt: excerpt,
      categories: catId
    };
    const response = await axios.post(`/wp-json/wp/v2/note/${id}`, data);
    return response;
  }
}

const noteApi = new Note();

export default noteApi;
