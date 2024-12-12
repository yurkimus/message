# Message

Set of HTTP-message utilities.

## Contents

- [Installation](#Installation)
- [Exports](#Exports)
- [Imports](#Imports)

## Installation

```
npm install @yurkimus/message
```

```
deno add npm:@yurkimus/message
```

## Exports

Enumerations:

- [RequestMethodsEnum](#RequestMethodsEnum)
- [ResponseStatusEnum](#ResponseStatusEnum)

Prototypes:

- [ResponseStatus](#ResponseStatus)

Source:

- [media](#media)
- [body](#body)
- [clone](#clone)
- [read](#read)

## Imports

```js
import * as message from '@yurkimus/message'
```

### RequestMethodsEnum

```js
import { RequestMethodsEnum } from '@yurkimus/message/enumerations/request-method'
```

```
RequestMethodsEnum = Map<string, string>
```

### ResponseStatusEnum

```js
import { ResponseStatusEnum } from '@yurkimus/message/enumerations/response-status'
```

```
ResponseStatusEnum = Map<string, string>
```

### media

```js
import { media } from '@yurkimus/message'
```

```
media = (message: Request | Response) =>
  | TypeError
  | String
```

### body

```js
import { body } from '@yurkimus/message'
```

```
body = (message: Request | Response) =>
  | TypeError
  | Null
  | Promise<String>
  | Promise<Object>
  | Promise<Array>
  | Promise<FormData>
```

### clone

```js
import { clone } from '@yurkimus/message'
```

```
clone = (message: Request | Response) =>
  | TypeError
  | [message: Request | Response, clone: Request | Response]
```

### read

```js
import { read } from '@yurkimus/message'
```

```
read = (message: Request | Response) =>
  | TypeError
  | [message: Request | Response, body: ReturnType<body>]
```
