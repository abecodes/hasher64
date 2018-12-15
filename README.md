# hasher64

hasher64 is a simple base64 encoder and decoder for node. It works with strings as well as with files. It has no dependencies and works with nodes native APIs.

It is released under the [UNLICENSE](https://unlicense.org/) & supports modern environments.

## Installation

Using npm:

```bash
$ npm i -g @abecodes/hasher64
$ npm i --save @abecodes/hasher64
```

In Node.js:

```js
// Load the package.
const hasher = require("@abecodes/hasher64");
```

## API

### encode

```bash
hasher.encode(value: string) => base64 string
```

The encode method takes a string as paramter and returns it as base64 encoded string.

### decode

```bash
hasher.decode(base64 string) => string
```

The decode method takes a base64 encoded string and returns it string value

### atob

```bash
hasher.atob(data Buffer) => base64 string
```

The atob method takes a Buffer and returns it as base64 encoded string

### btoa

```bash
hasher.btoa(base64 string) => Buffer
```

The btoa method takes a base64 encoded Buffer and returns the Buffer

## Greetings

May you enjoy using this piece of software as much as I enjoyed writing it. Stay bug free and have an awesome day <3
