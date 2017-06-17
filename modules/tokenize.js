/* @flow */
import type { Token } from '../types/Token'
import type { RuleMap } from '../types/RuleMap'

import loopUntilConditionIsFulfilled from './loopUntilConditionIsFulfilled'
import getFirstMatchingRule from './getFirstMatchingRule'
import isEmpty from './isEmpty'

export default function tokenize(
  input: string,
  ruleMap: RuleMap,
  tokens: Array<Token> = [],
  startIndex: number = 0
): Array<Token> {
  // stop at empty strings
  if (isEmpty(input) || input === 'undefined') {
    return tokens
  }

  function isNotMatchingAnyRule(currentIndex: number): boolean {
    return !getFirstMatchingRule(input.substring(0, currentIndex + 1), ruleMap)
  }

  const ruleEndIndex = loopUntilConditionIsFulfilled(
    input.length,
    isNotMatchingAnyRule
  )

  // if no rule matched the first char
  // we have encountered invalid syntax
  // and thus can throw a syntax error
  if (ruleEndIndex === 0) {
    throw new SyntaxError(
      `Invalid Token: "${input.substr(
        0,
        Math.min(15, input.length)
      )}..."\n"${input[0]}" does not match any rules.`
    )
  }

  const matchedValue = input.substring(0, ruleEndIndex)
  const matchedTokenType = getFirstMatchingRule(matchedValue, ruleMap)

  const nextStartIndex = startIndex + ruleEndIndex

  tokens.push({
    type: matchedTokenType,
    value: matchedValue,
    start: startIndex,
    end: nextStartIndex
  })

  return tokenize(
    input.substring(ruleEndIndex),
    ruleMap,
    tokens,
    nextStartIndex
  )
}
