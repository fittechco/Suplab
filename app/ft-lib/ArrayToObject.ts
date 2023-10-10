import invariant from 'tiny-invariant';

type UnionToIntersection<T> = (T extends any ? (x: T) => any : never) extends (
  x: infer R,
) => any
  ? R
  : never;

type ObjectToFields<T> = T extends Array<infer Field>
  ? Field extends {
      key: string;
    }
    ? {[P in Field['key']]: Field | null}
    : never
  : never;

export default function arrayToObject<T extends Array<any>>(props: {
  array: T;
}): UnionToIntersection<ObjectToFields<typeof props.array>> {
  return props.array.reduce((prevValue, currValue, index) => {
    return {...prevValue, [currValue.key]: currValue};
  }, {} as UnionToIntersection<ObjectToFields<typeof props.array>>);
}
