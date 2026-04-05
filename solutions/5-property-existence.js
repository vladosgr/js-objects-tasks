import _ from 'lodash';

// BEGIN
export default function countWords(sentence) {
  const result = {};
    if (sentence.length === 0) {
    return result;
  }
    const words = _.words(sentence.toLowerCase());
    for (const word of words) {
    if (Object.hasOwn(result, word)) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  }
    return result;
}
// END