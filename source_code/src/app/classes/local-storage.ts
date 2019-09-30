export class LocalStorage {
    setLocalStorage(key:any, val:any) {
        if (this.getLocalStorageValue(key) !== null)
        this.removeLocalStorage(key);
        localStorage.setItem(key, val);
    }
    
    getLocalStorageValue(key:any) {
        return localStorage.getItem(key);
    }

    removeLocalStorage(key:any) {
        localStorage.removeItem(key);
    }
}
