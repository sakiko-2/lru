import {LRUCache} from "./lru";

describe("lru", () => {
  test ("get(1) returns 1", () => {
    const cache = new LRUCache(2);
    cache.put(1, 1);
    cache.put(2, 2);

    const matches = cache.get(1);
    expect(matches).toEqual(1);
  });
});
