rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    match /usernames/{username} {
      allow create: if request.auth != null
                    && !exists(/databases/$(database)/documents/usernames/$(username));
      allow read: if true;
    }

    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
      // ----------------------
    //  RAWG GAME CACHE
    // ----------------------
    // Each document must contain ONLY the keys: gameData (array) and timestamp (string).
    // gameData must be an array of maps (RAWG objects). We limit size to avoid abuse.
    match /gameCache/{docId} {
      allow read: if true;

      // Only allow creation (no updates, no deletes)
      allow create: if
        // Top-level keys exactly these two
        request.resource.data.keys().hasOnly(['gameData', 'timestamp'])
        // timestamp must be a string
        && request.resource.data.timestamp is string
        // gameData must be a list
        && request.resource.data.gameData is list
        // limit the number of items in the array (adjust if you need more)
        && request.resource.data.gameData.size() <= 64
        // each item in the array must be a map (not a string): prevents HTML/script strings
        && request.resource.data.gameData.every(item => item is map)
        // overall document size guard (stringified length); adjust limit as needed
        && request.resource.data.toString().size() < 100000; // ~100KB
      allow update, delete: if false;
    }

    // ----------------------
    //  YOUTUBE VIDEO CACHE
    // ----------------------
    // Each youtube cache doc must contain only videoIds (array of strings) and timestamp.
    match /youtubeCache/{cacheId} {
      allow read: if true;

      allow create: if
        request.resource.data.keys().hasOnly(['videoIds', 'timestamp'])
        && request.resource.data.timestamp is string
        && request.resource.data.videoIds is list
        // limit number of video ids
        && request.resource.data.videoIds.size() <= 10
        // ensure every id is a string (no nested objects)
        && request.resource.data.videoIds.every(id => id is string)
        // reasonable payload size guard
        && request.resource.data.toString().size() < 20000; // ~20KB

      allow update, delete: if false;
    }
  }
}
