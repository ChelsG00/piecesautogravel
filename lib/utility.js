
import { useRouter } from "next/router";

export const capitalizeFirstLetter = (string = "") =>
  [...string].map((char, index) => (index ? char : char.toUpperCase())).join("");

export const slugify = text => text
.replace(/\s|_|\(|\)/g, "-")
.normalize("NFD").replace(/\p{Diacritic}/gu, "")
.toLowerCase()

export const getObjKey = (obj, keyName) => {
  // eslint-disable-next-line no-unused-vars
  for (const [key, value] of Object.entries(obj)) {
    if (value.key === keyName) return value;
  }
  return null;
};

export const getObjValue = (obj, findValue) => {
  // eslint-disable-next-line no-unused-vars
  for (const [key, value] of Object.entries(obj)) {
    if (value === findValue) return value;
  }
  return null;
};

export function fileNameFromUrl(url) {
  var matches = url.match(/\/([^\/?#]+)[^\/]*$/);
  if (matches.length > 1) {
    return matches[1].replaceAll("%2F", "/");
  }
  return null;
}

export const setGridClass = (blockConfig) => {
  let gridClass = "grid";

  if (blockConfig.columns) {
    gridClass += setBreakpointClass(blockConfig.columns, "grid-cols");
  }

  if (blockConfig.gapX) {
    gridClass += setBreakpointClass(blockConfig.gapX, "gap-x");
  }

  if (blockConfig.gapY) {
    gridClass += setBreakpointClass(blockConfig.gapY, "gap-y");
  }

  if (blockConfig.spaceX) {
    gridClass += setBreakpointClass(blockConfig.spaceX, "space-x");
  }

  if (blockConfig.spaceY) {
    gridClass += setBreakpointClass(blockConfig.spaceY, "space-y");
  }

  return gridClass;
};

const setBreakpointClass = (breakpoints, className) => {
  let gridClass = "";
  for (const [key, value] of Object.entries(breakpoints)) {
    if (value !== undefined) {
      gridClass += key === "xs" ? ` ${className}-${value}` : ` ${key}:${className}-${value}`;
    }
  }
  return gridClass;
};

export function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;

  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }

  if (phoneNumberLength > 10) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)} #${phoneNumber.slice(
      10
    )}`;
  }

  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

export const LinkWrapper = ({ children, link }) => link ?
(link.includes('://') ? <a href={link} target="_blank" rel="noreferrer">{children}</a> : <a href={link}>{children}</a>)
: children;

export const LinkWrapperDiv = ({ children, link }) => {
  const router = useRouter();
  return (<div onClick={() => router.push(link)} style={{cursor:'pointer'}}>{children}</div>)
}