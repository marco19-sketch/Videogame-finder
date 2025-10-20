// src/utils/sanitize.js
import DOMPurify from "dompurify";

// For search terms - allow normal text including spaces, but no HTML
export const sanitizeText = (text) => {
  return DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [], // No HTML tags
    ALLOWED_ATTR: []  // No attributes
    // KEEP_SCRIPTS: false, // This is default
    // SAFE_FOR_TEMPLATES: false // This is default
  });
  // DOMPurify preserves whitespace by default
};

// For URLs - validate format
export const sanitizeUrl = url => {
  const clean = DOMPurify.sanitize(url);
  return clean.startsWith("http://") || clean.startsWith("https://")
    ? clean
    : "";
};


