type StorageKey = 'authToken';

class StorageService {
  public storeItem(key: StorageKey, item: any) {
    localStorage.setItem(key, item);
  }

  public getItem(key: StorageKey) {
    return localStorage.getItem(key);
  }

  public deleteItem(key: StorageKey) {
    localStorage.removeItem(key);
  }
}

export default new StorageService();
