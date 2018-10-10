import { isArray, isPlainObject, camelCase, snakeCase } from 'lodash';

const IGNORED = ['_destroy'];

export function objectRecursiveTransform(obj, func) {
  if (isArray(obj)) {
    return obj.map(e => objectRecursiveTransform(e, func));
  }

  if (!isPlainObject(obj)) {
    return obj;
  }

  const result = {};

  for (const key in obj) {
    const val = obj[key];
    const tKey = IGNORED.includes(key) ? key : func(key);

    if (isArray(val) || isPlainObject(val)) {
      result[tKey] = objectRecursiveTransform(val, func);
    } else {
      result[tKey] = val;
    }
  }

  return result;
}

export function camelizeKeys(obj) {
  return objectRecursiveTransform(obj, camelCase);
}

export function snakeizeKeys(obj) {
  return objectRecursiveTransform(obj, snakeCase);
}
