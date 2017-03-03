import assign from 'deep-assign';

export default function assignObject(base, ...extendObjects) {
  if ( extendObjects.length > 1 && extendObjects[extendObjects.length - 1] === true ) {
    return assign({}, ...extendObjects);
  }
  return assign(base, ...extendObjects);
}
