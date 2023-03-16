import {LRUCache} from "./lru";

describe("lru", () => {
  test("get(1) returns 1", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);

    const matches = cache.get(1);
    expect(matches).toEqual(1);
  });

  test("get(2) returns -1", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);
    cache.put(3, 3);

    const matches = cache.get(2);
    expect(matches).toEqual(-1);
  });

  test("get(3) returns 3", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);
    cache.put(3, 3);
    cache.get(2);
    cache.put(4, 4);
    cache.get(1);

    const matches = cache.get(3);
    expect(matches).toEqual(3);
  });

  test("get(4) returns 4", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);
    cache.put(3, 3);
    cache.get(2);
    cache.put(4, 4);
    cache.get(1);
    cache.get(3);

    const matches = cache.get(4);
    expect(matches).toEqual(4);
  });

  test("delete(3) returns 3", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);
    cache.get(1);
    cache.put(3, 3);
    cache.get(2);
    cache.put(4, 4);
    cache.get(1);
    cache.get(3);
    cache.get(4);

    const matches = cache.delete(3);
    expect(matches).toEqual(3);
  });
});
