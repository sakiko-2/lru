export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = [];
  }

  isKeyValid(key) {
    if (key != undefined | typeof key === "number" | key >= 0 | key <= 1000) {
      return true;
    } else {
      return false;
    }
  }

  isValuevalid(value) {
    if (value != undefined | typeof value === "number" | value >= 0 | value <= 100000) {
      return true;
    } else {
      return false;
    }
  }

  getObject(arr, key) {
    return arr.filter((obj) => Object.keys(obj).includes(key.toString()))[0];
  }

  get(key) {
    if (this.isKeyValid) {
      const obj = this.getObject(this.cache, key);

      if (obj !== undefined) {
        this.cache.push(this.cache.splice(this.cache.indexOf(obj), 1)[0]);
        return obj[key];
      } else {
        return -1;
      }
    }
  }

  put(key, value) {
    if (this.isKeyValid && this.isValuevalid) {
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
  }

  delete(key) {
    if (this.isKeyValid) {
      const obj = this.getObject(this.cache, key);

      if (obj !== undefined) {
        this.cache.splice(this.cache.indexOf(obj), 1);
        return key;
      } else {
        return -1;
      }
    }
  }
}
