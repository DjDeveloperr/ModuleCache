# Module Cache

Global module cache for all modules. Browser and Deno compatible.

## Usage

```ts
import { ModuleCache } from "https://deno.land/x/module_cache/mod.ts";

const cache = new ModuleCache("my_module");
cache.set("test", "hello world");
cache.get("test"); // "hello world"
cache.delete("test");
```

## Docs

API is all about ModuleCache's get, set and delete methods :)

## License

Check [LICENSE](LICENSE) for more info.

Copyright 2021 @ DjDeveloperr