/* @flow */
import type { RuleMap } from '../types/RuleMap'

export default function getFirstMatchingRule(
  str: string,
  ruleMap: RuleMap
): string | false {
  for (const token in ruleMap) {
    if (ruleMap[token].test(str)) {
      return token
    }
  }

  // return false if not rule matches
  return false
}
