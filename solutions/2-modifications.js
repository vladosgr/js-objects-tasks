import _ from 'lodash';

// BEGIN
export default function normalize(lesson) {
  if (lesson.name) {
    const firstChar = lesson.name[0].toUpperCase();
    const restChars = lesson.name.slice(1).toLowerCase();
    lesson.name = firstChar + restChars;
  }
  if (lesson.description) {
    lesson.description = lesson.description.toLowerCase();
  }
}
// END