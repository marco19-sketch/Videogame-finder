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
    
     // Allow anyone to read/write game cache
    match /gameCache/{document=**} {
      allow read, write: if true;
    }
    
      // 🔹 Cache collection for YouTube search results
    match /youtubeCache/{cacheId} {
      // Anyone can read (it's public info), and write cached if data follows the 
      // following rules. 
       allow read: if true; // anyone can read
      allow create, update: if request.resource.data.keys().hasOnly(['videoIds', 'timestamp'])
                            && request.resource.data.videoIds is list
                            && request.resource.data.timestamp is string;
      allow delete: if false; // prevent deletion
    }
  }
}



C:\Program Files\Eclipse Adoptium\jdk-25.0.0.36-hotspot\bin