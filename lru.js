export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = [];
  }

  getObject(arr, key) {
    return arr.filter((obj) => Object.keys(obj).includes(key.toString()))[0];
  }

  get(key) {
    const obj = this.getObject(this.cache, key);

    if (obj !== undefined) {
      this.cache.push(this.cache.splice(this.cache.indexOf(obj), 1)[0]);
      return obj[key];
    } else {
      return -1;
    }
  }

  put(key, value) {
    const createObject = (key, value) => {
      const obj = {};
      obj[key] = value;
      this.cache.push(obj);
    };

    if (this.cache.length === this.capacity) {
      this.cache.shift();
    }

    createObject(key, value);
  }

  delete(key) {
    const obj = this.getObject(this.cache, key);

    if (obj !== undefined) {
      this.cache.splice(this.cache.indexOf(obj), 1);
      return key;
    } else {
      return -1;
    }
  }
}
