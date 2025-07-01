# Message

Set of HTTP-message utilities.

## Contents

- [Installation](#Installation)
- [Exports](#Exports)
- [Imports](#Imports)

## Installation

```
npm install @yurkimus/message@latest -E
```

```
deno add npm:@yurkimus/message@latest
```

## Exports

Source:

- [Parsers](#Parsers)
- [ParserMimes](#ParserMimes)
- [readMessage](#readMessage)
- [resolveMessage](#resolveMessage)

## Imports

```js
import * as message from '@yurkimus/message'

import { readMessage, resolveMessage } from '@yurkimus/message'
```

### Parsers

```js
import { Parsers } from '@yurkimus/message'
```

```ts
type Parser = 'arrayBuffer' | 'blob' | 'bytes' | 'formData' | 'json' | 'text'
```

### ParserMimes

```js
import { ParserMimes } from '@yurkimus/message'
```

```ts
type ParserMimes = Record<Parser, string[]>
```

### readMessage

```js
import { readMessage } from '@yurkimus/message'

await readMessage(new Request('http://localhost')) // => [Request {}, '']

await readMessage(Response('', { status: 400 })) // => [Response {}, '']
```

```ts
type readMessage = <Message extends Response | Request, Result>(
  message: Message,
) => Promise<[Message, Result]>
```

### resolveMessage

```js
import { resolveMessage } from '@yurkimus/message'

await resolveMessage(new Request('http://localhost')) // => ''

await resolveMessage(Response.json('', { status: 400 })) // => throws ''
```

```ts
type resolveMessage = <Message extends Response | Request, Result>(
  [message, value]: [Message, Result],
) => Result
```
