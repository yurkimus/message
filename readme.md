# Message

Set of HTTP-message utilities.

## Exports

### mediaType

```
mediaType = (message: Request | Response) =>
  | TypeError
  | String
```

### readBody

```
readBody = (message: Request | Response) =>
  | TypeError
  | Null
  | Promise<String>
  | Promise<Object>
  | Promise<Array>
  | Promise<FormData>
```

### clone

```
clone = (message: Request | Response) =>
  | TypeError
  | [message: Request | Response, clone: Request | Response]
```

### read

```
read = (message: Request | Response) =>
  | TypeError
  | [message: Request | Response, body: ReturnType<readBody>]
```
