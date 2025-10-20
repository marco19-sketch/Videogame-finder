import {
  initializeTestEnvironment,
  assertSucceeds,
  assertFails,
} from "@firebase/rules-unit-testing";
import fs from "fs";

const rules = fs.readFileSync("firestore.rules", "utf8");

async function testRules() {
  const testEnv = await initializeTestEnvironment({
    projectId: "video-game-finder-471006",
    firestore: {
      rules,
      host: "localhost",
      port: 8080,
      ssl: false,
    },
  });

  console.log("🧪 Starting Firestore Rules Tests...\n");

  try {
    // Clear any existing data
    await testEnv.clearFirestore();

    // Test 1: Unauthenticated user can read gameCache
    console.log("Test 1: Unauthenticated user reading gameCache...");
    const anonDb = testEnv.unauthenticatedContext().firestore();
    await assertSucceeds(anonDb.collection("gameCache").doc("test1").get());
    console.log("✅ Unauthenticated user can read gameCache");

    // Test 2: Authenticated user can create valid gameCache
    console.log("Test 2: Authenticated user creating valid gameCache...");
    const aliceDb = testEnv.authenticatedContext("alice").firestore();
    await assertSucceeds(
      aliceDb
        .collection("gameCache")
        .doc("test2")
        .set({
          gameData: [
            {
              id: 825,
              name: "PAYDAY 2",
              background_image: "https://example.com/image.jpg",
              released: "2013-08-13",
            },
          ],
          timestamp: "2025-10-19T12:00:00Z",
        })
    );
    console.log("✅ Authenticated user can create valid gameCache");

    // Test 3: Invalid gameCache - extra field
    console.log("Test 3: Rejecting gameCache with extra field...");
    await assertFails(
      aliceDb.collection("gameCache").doc("test3").set({
        gameData: [],
        timestamp: "2025-10-19T12:00:00Z",
        extra: "not allowed", // This should fail
      })
    );
    console.log("✅ Rejects gameCache with extra fields");

    // Test 4: Invalid gameCache - wrong data type
    console.log("Test 4: Rejecting gameCache with wrong data type...");
    await assertFails(
      aliceDb.collection("gameCache").doc("test4").set({
        gameData: "not an array", // Should be array
        timestamp: "2025-10-19T12:00:00Z",
      })
    );
    console.log("✅ Rejects gameCache with wrong data types");

    // Test 5: YouTube Cache tests
    console.log("Test 5: Valid YouTube cache creation...");
    await assertSucceeds(
      aliceDb
        .collection("youtubeCache")
        .doc("test5")
        .set({
          videoIds: ["abc123def45", "xyz789uvw12"],
          timestamp: "2025-10-19T12:00:00Z",
        })
    );
    console.log("✅ Valid YouTube cache creation works");

    // Test 6: Invalid YouTube cache - wrong data type (not XSS)
    console.log("Test 6: Rejecting invalid YouTube data types...");
    await assertFails(
      aliceDb
        .collection("youtubeCache")
        .doc("test6")
        .set({
          videoIds: [12345, 67890], // Numbers instead of strings
          timestamp: "2025-10-19T12:00:00Z",
        })
    );
    console.log("✅ Rejects invalid YouTube data types");

    // Test 7: User document access
    console.log("Test 7: User accessing own document...");
    await assertSucceeds(
      aliceDb.collection("users").doc("alice").set({ name: "Alice" })
    );
    console.log("✅ User can write to own document");

    // Test 8: User cannot access other user's document
    console.log("Test 8: User accessing other user's document...");
    await assertFails(aliceDb.collection("users").doc("bob").get());
    console.log("✅ User cannot access other user's document");

    // Test 9: Username creation
    console.log("Test 9: Creating username...");
    await assertSucceeds(
      aliceDb.collection("usernames").doc("alice123").set({ userId: "alice" })
    );
    console.log("✅ Username creation works");

    console.log("\n🎉 All tests passed!");
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  } finally {
    await testEnv.cleanup();
  }
}

// Make sure to run with the emulator
console.log("Make sure Firestore emulator is running on localhost:8080");
testRules().catch(console.error);
