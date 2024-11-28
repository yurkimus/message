# Message

Set of HTTP-message utilities.

## Exports

### Methods

```
Methods = { [string]: string }
```

### media

```
media = (message: Request | Response) =>
  | TypeError
  | String
```

### body

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

```
clone = (message: Request | Response) =>
  | TypeError
  | [message: Request | Response, clone: Request | Response]
```

### read

```
read = (message: Request | Response) =>
  | TypeError
  | [message: Request | Response, body: ReturnType<body>]
```
