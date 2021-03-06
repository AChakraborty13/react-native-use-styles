import {
  CLASS_PREFIX,
  NAMESPACE_PREFIX,
  CONSTANTS_PREFIX,
  COMPTUED_PREFIX,
  NAMESPACE_REGEX
} from "../constants";

export const isNamespace = path => path.startsWith(NAMESPACE_PREFIX);

export const getKeyFromNamespace = path => path.replace(NAMESPACE_REGEX, "");

export const getKey = path => path.substring(1);

export const getNamespace = path => path.match(NAMESPACE_REGEX)[0].substring(1);

export const isClassName = path =>
  getKeyFromNamespace(path).startsWith(CLASS_PREFIX);

export const isConstant = path =>
  getKeyFromNamespace(path).startsWith(CONSTANTS_PREFIX);

export const isComputed = path =>
  getKeyFromNamespace(path).startsWith(COMPTUED_PREFIX);

export const hasComputed = path => path.indexOf(COMPTUED_PREFIX) !== -1;

export const isFalseyString = value => {
  try {
    return value === "undefined" || !JSON.parse(value);
  } catch (_) {
    return false;
  }
};

export const flattenStyles = styles =>
  styles.reduce(
    (flattenStyles, style) => Object.assign(flattenStyles, style),
    Object.create(null)
  );

export const getPathFromLiteralTag = (strings, expressions) =>
  strings.reduce(
    (result, currentString, i) =>
      `${result}${currentString}${expressions[i] ? expressions[i] : ""}`,
    ""
  );
