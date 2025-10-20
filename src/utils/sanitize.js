// src/utils/sanitize.js
import DOMPurify from "dompurify";

// For usernames, search terms - no HTML allowed
export const sanitizeText = text => {
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [], // No HTML tags
    ALLOWED_ATTR: [], // No attributes
  }).trim();
};

// For URLs - validate format
export const sanitizeUrl = url => {
  const clean = DOMPurify.sanitize(url);
  return clean.startsWith("http://") || clean.startsWith("https://")
    ? clean
    : "";
};
