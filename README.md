# safe-type-check

Type safety in TypeScript, both during compile-time and runtime.

## Motivation

Imagine we want to fetch a resource from an external API, and the API documentation tells us what the resource should look like, but we can't trust the documentation 100% because it might not be correct or up to date. TypeScript cannot handle this at runtime – type information gets lost during compilation – and that's why `fetch` and `JSON.parse` have to return `any`. Therefore, to be on the safe side, we need to cast all incoming data into `unknown` and spray `if`s everywhere every time we want to read the data. But that is tedious and error-prone.

## Usage

```typescript
import { prop } from '@firoxer/safe-type-check';

interface ExternalResource {
  id: number;
  name: string;
  values: number[];
}

// We would really like to use `ExternalResource` as the return type,
// but as the API might just not work as advertised, we cannot trust it
// and we can only be safe by using `unknown`.
async function fetchResourceFromExternalApi(): unknown {
  return JSON.parse(await fetch(API_URL));
}

const uncheckedResource: unknown = await fetchResourceFromExternalApi();

// TypeScript will now yell at us if we try to use `uncheckedResource` anywhere,
// and rightly so, because we can't tell for sure what it is without checking.
// E.g. what if we wanted to use `name` as a string, but for some reason the API
// has set it to `null`, and now our application will crash at runtime due
// to a type error which is *not* what TypeScript is all about.

// So, we will write a checker function with the help of this library,
// and it will both tell TypeScript what we want to get out of the `unknown`
// and ensure that it is so when running the code

function checkExternalResource(x: unknown): ExternalResource | null {
  if (
    // All these prop checks are in fact user-defined type guards
    // (https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards)
    // that return a boolean at runtime but also instruct the type checker when compiling
    prop.isNumber(x, 'id') &&
    prop.isString(x, 'name') &&
    prop.isArrayOfNumbers(x, 'values')
  ) {
    return x;
  }

  return null;
}

const resource: ExternalResource | null = checkExternalResource(uncheckedResource);

if (resource === null) {
  throw new Error('the API lied')
}

// Now we can trust `resource` to have all the props as defined in ExternalResource.
```
