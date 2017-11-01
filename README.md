# mostly-shopping-hours

Call a callback only sometimes with a certian likelihood. The likelihood
is higer during normal shopping hours, and really high on the weekend.

This is useful if you want to simulate load on a shopping site for instance.

[![Build status](https://travis-ci.org/watson/mostly-shopping-hours.svg?branch=master)](https://travis-ci.org/jamiesmith/mostly-shopping-hours)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

based on https://github.com/watson/mostly-working-hours

## Installation

```
npm install mostly-shopping-hours --save
```

## Usage

```js
var maybe = require('mostly-shopping-hours')

maybe(function () {
  console.log('It\'s time to do some work!')
})
```

## API

### `maybe(callback)`

Will call the `callback` only based on certain odds.

The odds are higest during normal shopping hours and lowest in the
weekend.

## License

MIT
