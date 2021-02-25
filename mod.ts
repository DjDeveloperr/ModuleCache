export interface AnyObject {
  [name: string]: any;
}

function _cache(): { [name: string]: AnyObject } {
  const val = (globalThis as any).___$GLOBAL_MODULE_CACHE;
  if (typeof val !== "object") {
    (globalThis as any).___$GLOBAL_MODULE_CACHE = {};
    return (globalThis as any).___$GLOBAL_MODULE_CACHE;
  } else return val;
}

export class ModuleCache {
  name: string;

  get cache(): AnyObject {
    const modCache = _cache();
    if (!modCache[this.name]) {
      modCache[this.name] = {};
      return modCache[this.name];
    } else return modCache[this.name];
  }

  constructor(name: string) {
    this.name = name;
  }

  set(key: string, val: any) {
    this.cache[key] = val;
    return this;
  }

  get<T = any>(key: string): T | undefined {
    return this.cache[key];
  }

  delete(key: string): boolean {
    return delete this.cache[key];
  }
}
