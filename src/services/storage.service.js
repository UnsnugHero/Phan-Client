class StorageService {
  storeItem(key, item) {
    localStorage.setItem(key, item);
  }

  getItem(key) {
    return localStorage.getItem(key);
  }

  deleteItem(key) {
    localStorage.removeItem(key);
  }
}

export default new StorageService();
