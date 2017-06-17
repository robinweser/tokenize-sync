# Synchronous Tokenizer

A simple synchronous string tokenizer using Regex.

<img alt="TravisCI" src="https://travis-ci.org/rofrischmann/tokenize-sync.svg?branch=master"> <a href="https://codeclimate.com/github/rofrischmann/tokenize-sync/coverage"><img alt="Test Coverage" src="https://codeclimate.com/github/rofrischmann/tokenize-sync/badges/coverage.svg"></a> <img alt="npm downloads" src="https://img.shields.io/npm/dm/tokenize-sync.svg"> <img alt="npm version" src="https://badge.fury.io/js/tokenize-sync.svg">

## Installation
```sh
yarn add tokenize-sync
```

## Usage

The package ships a single `tokenize` function that takes an (*string*) input and a (*Object*) ruleMap that maps (*string*) token names to Regexes.

```javascript
import tokenize from 'tokenize-sync'

const ruleMap = {
  identifier: /^[a-z-]+$/i,
  number: /^\d+$/,
  whitespace: /^\s+$/
}

const input = 'test 12  foobar3'

const tokens = tokenize(input, ruleMap)

tokens === [{
  type: 'identifier',
  value: 'test',
  start: 0,
  end: 4
}, {
  type: 'whitespace',
  value: ' ',
  start: 4,
  end: 5
}, {
  type: 'number',
  value: '12',
  start: 5,
  end: 7
}, {
  type: 'whitespace',
  value: '  ',
  start: 7,
  end: 9
}, {
  type: 'identifier',
  value: 'foobar',
  start: 9,
  end: 15
},  {
  type: 'number',
  value: '3',
  start: 15,
  end: 16
}]
```

## License
tokenize-sync is licensed under the [MIT License](http://opensource.org/licenses/MIT).<br>
Documentation is licensed under [Creative Common License](http://creativecommons.org/licenses/by/4.0/).<br>
Created with ♥ by [@rofrischmann](http://rofrischmann.de).
