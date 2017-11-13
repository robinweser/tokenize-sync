import tokenize from '../tokenize'

const ruleMap = {
  identifier: /^[a-z-]+$/i,
  number: /^\d+$/,
  whitespace: /^\s+$/,
  comma: /^,+$/
}

describe('Tokenizing strings', () => {
  it('should return an array of tokens', () => {
    expect(tokenize('test,  12 foobar13', ruleMap)).toEqual([
      {
        type: 'identifier',
        value: 'test',
        start: 0,
        end: 4
      },
      {
        type: 'comma',
        value: ',',
        start: 4,
        end: 5
      },
      {
        type: 'whitespace',
        value: '  ',
        start: 5,
        end: 7
      },
      {
        type: 'number',
        value: '12',
        start: 7,
        end: 9
      },
      {
        type: 'whitespace',
        value: ' ',
        start: 9,
        end: 10
      },
      {
        type: 'identifier',
        value: 'foobar',
        start: 10,
        end: 16
      },
      {
        type: 'number',
        value: '13',
        start: 16,
        end: 18
      }
    ])
  })

  it('should use a defaultTokenType', () => {
    expect(tokenize('test $$', ruleMap, 'unknown')).toEqual([
      { type: 'identifier', value: 'test', start: 0, end: 4 },
      { type: 'whitespace', value: ' ', start: 4, end: 5 },
      {
        type: 'unknown',
        value: '$',
        start: 5,
        end: 6
      },
      {
        type: 'unknown',
        value: '$',
        start: 6,
        end: 7
      }
    ])
  })
})
