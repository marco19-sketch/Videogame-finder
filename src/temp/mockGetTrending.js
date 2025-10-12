//Created this file to mock game objects fetch  to test the WelcomePage animation without wasting the RAWG API quota.
// to use it just import it instead of the regular file (/lib/getTrending.js)


export async function getTrending(sortBy, page = 1) {
 

  //   try {
  //     const data = await fetchRAWG("games", query);

  //     return data.results;
  //   } catch (err) {
  //     console.error("Error fetching trending game:", err);
  //     return [];
  //   }
  return [
    {
      id: 10533,
      slug: "path-of-exile",
      name: "Path of Exile",
      released: "2013-10-23",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
      rating: 3.65,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 755,
          percent: 45.9,
        },
        {
          id: 3,
          title: "meh",
          count: 399,
          percent: 24.26,
        },
        {
          id: 5,
          title: "exceptional",
          count: 324,
          percent: 19.7,
        },
        {
          id: 1,
          title: "skip",
          count: 167,
          percent: 10.15,
        },
      ],
      ratings_count: 1634,
      reviews_text_count: 8,
      added: 10620,
      added_by_status: {
        yet: 343,
        owned: 8557,
        beaten: 314,
        toplay: 117,
        dropped: 1103,
        playing: 186,
      },
      metacritic: 86,
      playtime: 6,
      suggestions_count: 590,
      updated: "2025-09-20T17:52:30",
      user_game: null,
      reviews_count: 1645,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5709,
            image_background:
              "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
          },
          released_at: "2013-10-23",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6943,
            image_background:
              "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          },
          released_at: "2013-10-23",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2013-10-23",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3/Vista/Windows 7/8<br></li><li><strong>Processor:</strong> x86-compatible 1.4GHz or faster processor<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA® GeForce® 7800 GT or ATI Radeon™ X1950 Pro or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 8 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 5,
          name: "RPG",
          slug: "role-playing-games-rpg",
          games_count: 61226,
          image_background:
            "https://media.rawg.io/media/games/00d/00d374f12a3ab5f96c500a2cfa901e15.jpg",
        },
        {
          id: 59,
          name: "Massively Multiplayer",
          slug: "massively-multiplayer",
          games_count: 4188,
          image_background:
            "https://media.rawg.io/media/games/11f/11fd681c312c14644ab360888dba3486.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 83693,
          image_background:
            "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        },
      ],
      stores: [
        {
          id: 305564,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8059,
            image_background:
              "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
          },
        },
        {
          id: 11536,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
        {
          id: 37670,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4929,
            image_background:
              "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
          },
        },
        {
          id: 593089,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 1420,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 247421,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 49794,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 41981,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7568,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 24,
          name: "RPG",
          slug: "rpg",
          language: "eng",
          games_count: 25930,
          image_background:
            "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 14030,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 411,
          name: "cooperative",
          slug: "cooperative",
          language: "eng",
          games_count: 6387,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 7400,
          image_background:
            "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
        },
        {
          id: 64,
          name: "Fantasy",
          slug: "fantasy",
          language: "eng",
          games_count: 32332,
          image_background:
            "https://media.rawg.io/media/games/ee3/ee3e10193aafc3230ba1cae426967d10.jpg",
        },
        {
          id: 79,
          name: "Free to Play",
          slug: "free-to-play",
          language: "eng",
          games_count: 9516,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        {
          id: 397,
          name: "Online multiplayer",
          slug: "online-multiplayer",
          language: "eng",
          games_count: 3804,
          image_background:
            "https://media.rawg.io/media/games/33d/33df5a032898b8ab7e3773c7a5f1d336.jpg",
        },
        {
          id: 97,
          name: "Action RPG",
          slug: "action-rpg",
          language: "eng",
          games_count: 8507,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 68,
          name: "Hack and Slash",
          slug: "hack-and-slash",
          language: "eng",
          games_count: 5197,
          image_background:
            "https://media.rawg.io/media/games/1f1/1f1888e1308959dfd3be4c144a81d19c.jpg",
        },
        {
          id: 40837,
          name: "In-App Purchases",
          slug: "in-app-purchases",
          language: "eng",
          games_count: 3335,
          image_background:
            "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg",
        },
        {
          id: 121,
          name: "Character Customization",
          slug: "character-customization",
          language: "eng",
          games_count: 6429,
          image_background:
            "https://media.rawg.io/media/games/e3d/e3ddc524c6292a435d01d97cc5f42ea7.jpg",
        },
        {
          id: 40,
          name: "Dark Fantasy",
          slug: "dark-fantasy",
          language: "eng",
          games_count: 5467,
          image_background:
            "https://media.rawg.io/media/games/dc0/dc0926d3f84ffbcc00968fe8a6f0aed3.jpg",
        },
        {
          id: 1656,
          name: "mmo",
          slug: "mmo",
          language: "eng",
          games_count: 2256,
          image_background:
            "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg",
        },
        {
          id: 48,
          name: "Dungeon Crawler",
          slug: "dungeon-crawler",
          language: "eng",
          games_count: 7866,
          image_background:
            "https://media.rawg.io/media/games/522/522f66c5f8542a945b9e2b1942f1ad63.jpg",
        },
        {
          id: 158,
          name: "MMORPG",
          slug: "mmorpg",
          language: "eng",
          games_count: 1613,
          image_background:
            "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
        },
        {
          id: 171,
          name: "PvE",
          slug: "pve",
          language: "eng",
          games_count: 7609,
          image_background:
            "https://media.rawg.io/media/games/4fe/4feffcec6315c5f5a96442a8444431ca.jpg",
        },
        {
          id: 98,
          name: "Loot",
          slug: "loot",
          language: "eng",
          games_count: 2800,
          image_background:
            "https://media.rawg.io/media/games/3c3/3c363e31f4add887affadc82c641de72.jpg",
        },
        {
          id: 272,
          name: "Inventory Management",
          slug: "inventory-management",
          language: "eng",
          games_count: 1677,
          image_background:
            "https://media.rawg.io/media/screenshots/4a2/4a2ff139b294c5d19d7074e24beba9e5.jpg",
        },
        {
          id: 155,
          name: "Fishing",
          slug: "fishing",
          language: "eng",
          games_count: 2161,
          image_background:
            "https://media.rawg.io/media/screenshots/4d4/4d44a26386019aaed6e05d7da5a27650.jpg",
        },
      ],
      esrb_rating: null,
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/d0f/d0f91fe1d92332147e5db74e207cfc7a.jpg",
        },
        {
          id: 82273,
          image:
            "https://media.rawg.io/media/screenshots/a5d/a5d0fcbe81728387c396d1643480c8b9.jpg",
        },
        {
          id: 82274,
          image:
            "https://media.rawg.io/media/screenshots/756/7567039877f95cf47333503925c62aa2.jpg",
        },
        {
          id: 82275,
          image:
            "https://media.rawg.io/media/screenshots/4db/4dbb68a20d12cc5667a88430b3e47bdf.jpg",
        },
        {
          id: 82276,
          image:
            "https://media.rawg.io/media/screenshots/77a/77af4e7670499a9d637e4cb8a0312d09.jpg",
        },
        {
          id: 82277,
          image:
            "https://media.rawg.io/media/screenshots/c95/c958615c946d6c865bf697afdf7cd995.jpg",
        },
        {
          id: 82278,
          image:
            "https://media.rawg.io/media/screenshots/e87/e87093d3b9d8866c9b3d759ee5435f0c.jpg",
        },
      ],
    },
    {
      id: 19487,
      slug: "alan-wake",
      name: "Alan Wake",
      released: "2010-05-14",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
      rating: 4.1,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 1138,
          percent: 49.91,
        },
        {
          id: 5,
          title: "exceptional",
          count: 772,
          percent: 33.86,
        },
        {
          id: 3,
          title: "meh",
          count: 279,
          percent: 12.24,
        },
        {
          id: 1,
          title: "skip",
          count: 91,
          percent: 3.99,
        },
      ],
      ratings_count: 2261,
      reviews_text_count: 9,
      added: 10423,
      added_by_status: {
        yet: 602,
        owned: 6763,
        beaten: 2110,
        toplay: 320,
        dropped: 535,
        playing: 93,
      },
      metacritic: 83,
      playtime: 5,
      suggestions_count: 534,
      updated: "2025-10-02T13:07:28",
      user_game: null,
      reviews_count: 2280,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2808,
            image_background:
              "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
          },
          released_at: "2010-05-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5709,
            image_background:
              "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
          },
          released_at: "2010-05-14",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2010-05-14",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP2<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Dual Core 2GHz Intel or 2.8GHz AMD<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2 GB RAM<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> DirectX 10 compatible with 512MB RAM<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 9.0c<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 8 GB HD space<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX 9.0c compatible<br>\t\t\t\t\t\t\t\t\t\t\t\t</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br>\t\t\t\t\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Windows 7<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> Quad Core 2.66GHz Intel or 3.2GHz AMD<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 4 GB RAM<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> DirectX 10 compatible or later with 1GB RAM <br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>DirectX®:</strong> 10<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 8 GB HD space<br>\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Sound:</strong> DirectX 9.0c compatible<br>\t\t\t\t\t\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 59596,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 150179,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
      ],
      stores: [
        {
          id: 465958,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4929,
            image_background:
              "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
          },
        },
        {
          id: 25873,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 6976,
            image_background:
              "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
          },
        },
        {
          id: 21833,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
        {
          id: 34002,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
        },
        {
          id: 339240,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 1420,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 247421,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 49794,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 23303,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 24633,
          image_background:
            "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 38807,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7568,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3439,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 26494,
          image_background:
            "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 9056,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 14341,
          image_background:
            "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 48464,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 10553,
          image_background:
            "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 4092,
          image_background:
            "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 18273,
          image_background:
            "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
        },
        {
          id: 17,
          name: "Survival Horror",
          slug: "survival-horror",
          language: "eng",
          games_count: 9728,
          image_background:
            "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        },
        {
          id: 336,
          name: "controller support",
          slug: "controller-support",
          language: "eng",
          games_count: 293,
          image_background:
            "https://media.rawg.io/media/screenshots/2fc/2fc6994425146f9dba3133400b414e29.jpg",
        },
        {
          id: 117,
          name: "Mystery",
          slug: "mystery",
          language: "eng",
          games_count: 16041,
          image_background:
            "https://media.rawg.io/media/games/4cb/4cb855e8ef1578415a928e53c9f51867.png",
        },
        {
          id: 110,
          name: "Cinematic",
          slug: "cinematic",
          language: "eng",
          games_count: 3232,
          image_background:
            "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg",
        },
        {
          id: 232,
          name: "Episodic",
          slug: "episodic",
          language: "eng",
          games_count: 513,
          image_background:
            "https://media.rawg.io/media/games/177/1775aacedb915b0e0880476530dc87b4.jpg",
        },
        {
          id: 200,
          name: "Narration",
          slug: "narration",
          language: "eng",
          games_count: 2893,
          image_background:
            "https://media.rawg.io/media/screenshots/2d9/2d9f74addd8f5b5f83459c2cb700aaf4.jpg",
        },
        {
          id: 279,
          name: "Supernatural",
          slug: "supernatural",
          language: "eng",
          games_count: 3028,
          image_background:
            "https://media.rawg.io/media/games/f6b/f6bed028b02369d4cab548f4f9337e81.jpg",
        },
        {
          id: 183,
          name: "Thriller",
          slug: "thriller",
          language: "eng",
          games_count: 3561,
          image_background:
            "https://media.rawg.io/media/games/615/61503312a95d451198d80d9bae275f79.jpg",
        },
        {
          id: 36002,
          name: "psycholoical-horror",
          slug: "psycholoical-horror",
          language: "eng",
          games_count: 4,
          image_background:
            "https://media.rawg.io/media/screenshots/164/1644bbceeced24e8e8d90f9d8739c358.jpg",
        },
        {
          id: 7629,
          name: "enviroment",
          slug: "enviroment",
          language: "eng",
          games_count: 16,
          image_background:
            "https://media.rawg.io/media/screenshots/363/363eac26816e5f26a574415efebbd582.jpg",
        },
      ],
      esrb_rating: {
        id: 3,
        name: "Teen",
        slug: "teen",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 182489,
          image:
            "https://media.rawg.io/media/screenshots/8d7/8d7d24df1418efdaba45128e2c855f62.jpg",
        },
        {
          id: 182490,
          image:
            "https://media.rawg.io/media/screenshots/5ac/5ac6dd243c0ed41fb1a0b5734bff55f1.jpg",
        },
        {
          id: 182491,
          image:
            "https://media.rawg.io/media/screenshots/ad2/ad2e4f73ac71839178ea01ab66d8bf6c.jpg",
        },
        {
          id: 182492,
          image:
            "https://media.rawg.io/media/screenshots/b28/b28fd421d570931d83b27213538689df.jpg",
        },
        {
          id: 182493,
          image:
            "https://media.rawg.io/media/screenshots/d1e/d1e49ff4902b1bc964262ffc2e08043d.jpg",
        },
        {
          id: 182494,
          image:
            "https://media.rawg.io/media/screenshots/02f/02f6cb8534d5434e94559cdcd35aeef7.jpg",
        },
      ],
    },
    {
      id: 9721,
      slug: "garrys-mod",
      name: "Garry's Mod",
      released: "2004-12-24",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
      rating: 3.8,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 800,
          percent: 49.72,
        },
        {
          id: 5,
          title: "exceptional",
          count: 389,
          percent: 24.18,
        },
        {
          id: 3,
          title: "meh",
          count: 276,
          percent: 17.15,
        },
        {
          id: 1,
          title: "skip",
          count: 144,
          percent: 8.95,
        },
      ],
      ratings_count: 1596,
      reviews_text_count: 11,
      added: 10413,
      added_by_status: {
        yet: 194,
        owned: 8346,
        beaten: 560,
        toplay: 54,
        dropped: 1123,
        playing: 136,
      },
      metacritic: null,
      playtime: 14,
      suggestions_count: 489,
      updated: "2025-09-24T20:50:14",
      user_game: null,
      reviews_count: 1609,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 79915,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          released_at: "2004-12-24",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> 1.8 GHz Processor<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> 512MB<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Additional Notes:</strong> Mouse, Keyboard, Monitor</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>Processor:</strong> 2.5 GHz Processor or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> 1GB dedicated VRAM or better<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 10 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 107480,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2004-12-24",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X version Snow Leopard 10.6.3<br></li><li><strong>Processor:</strong> 1.8 GHz Processor<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> NVIDIA GeForce 8 or higher, ATI X1600 or higher, or Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Additional Notes:</strong> Mouse, Keyboard, Monitor</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>Processor:</strong> 2.5 GHz Processor or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> 1GB dedicated VRAM or better<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 10 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2004-12-24",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® Vista/XP<br></li><li><strong>Processor:</strong> 1.8 GHz Processor<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> DirectX® 9 level Graphics Card (Requires support for SSE)<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 5 GB available space<br></li><li><strong>Sound Card:</strong> DirectX® 9 compatible<br></li><li><strong>Additional Notes:</strong> Mouse, Keyboard, Monitor</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7/8/8.1/10<br></li><li><strong>Processor:</strong> 2.5 GHz Processor or better<br></li><li><strong>Memory:</strong> 8 GB RAM<br></li><li><strong>Graphics:</strong> 1GB dedicated VRAM or better<br></li><li><strong>DirectX:</strong> Version 9.0c<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 10 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 150179,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 14,
          name: "Simulation",
          slug: "simulation",
          games_count: 75879,
          image_background:
            "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
        },
        {
          id: 40,
          name: "Casual",
          slug: "casual",
          games_count: 65928,
          image_background:
            "https://media.rawg.io/media/games/f86/f869253c68b38fa789f58cc5be2cb996.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 83693,
          image_background:
            "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        },
      ],
      stores: [
        {
          id: 10594,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 247421,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 49794,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 41981,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 24633,
          image_background:
            "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        },
        {
          id: 7808,
          name: "steam-trading-cards",
          slug: "steam-trading-cards",
          language: "eng",
          games_count: 7568,
          image_background:
            "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 14030,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 36615,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 14784,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 9,
          name: "Online Co-Op",
          slug: "online-co-op",
          language: "eng",
          games_count: 7400,
          image_background:
            "https://media.rawg.io/media/games/530/5302dd22a190e664531236ca724e8726.jpg",
        },
        {
          id: 4,
          name: "Funny",
          slug: "funny",
          language: "eng",
          games_count: 28323,
          image_background:
            "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
        },
        {
          id: 37,
          name: "Sandbox",
          slug: "sandbox",
          language: "eng",
          games_count: 8316,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 123,
          name: "Comedy",
          slug: "comedy",
          language: "eng",
          games_count: 14545,
          image_background:
            "https://media.rawg.io/media/games/5bb/5bb55ccb8205aadbb6a144cf6d8963f1.jpg",
        },
        {
          id: 40852,
          name: "Steam Workshop",
          slug: "steam-workshop",
          language: "eng",
          games_count: 1739,
          image_background:
            "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg",
        },
        {
          id: 40832,
          name: "Cross-Platform Multiplayer",
          slug: "cross-platform-multiplayer",
          language: "eng",
          games_count: 3087,
          image_background:
            "https://media.rawg.io/media/games/f95/f95ec06eddda5c5bf206618c49cd3e68.jpg",
        },
        {
          id: 40838,
          name: "Includes level editor",
          slug: "includes-level-editor",
          language: "eng",
          games_count: 2170,
          image_background:
            "https://media.rawg.io/media/games/25c/25c4776ab5723d5d735d8bf617ca12d9.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 1111,
          image_background:
            "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1473,
          image_background:
            "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
        },
        {
          id: 114,
          name: "Physics",
          slug: "physics",
          language: "eng",
          games_count: 21291,
          image_background:
            "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
        },
        {
          id: 39,
          name: "Building",
          slug: "building",
          language: "eng",
          games_count: 7361,
          image_background:
            "https://media.rawg.io/media/games/d03/d030347839f74454afcd1008248b08ae.jpg",
        },
        {
          id: 40856,
          name: "Valve Anti-Cheat enabled",
          slug: "valve-anti-cheat-enabled",
          language: "eng",
          games_count: 105,
          image_background:
            "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
        },
        {
          id: 62349,
          name: "vr mod",
          slug: "vr-mod",
          language: "eng",
          games_count: 17,
          image_background:
            "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg",
        },
        {
          id: 244,
          name: "Mod",
          slug: "mod",
          language: "eng",
          games_count: 1416,
          image_background:
            "https://media.rawg.io/media/screenshots/fb3/fb3d19e8da6a4fc13515c344c0e8c6ce.jpg",
        },
        {
          id: 95,
          name: "Animation & Modeling",
          slug: "animation-modeling",
          language: "eng",
          games_count: 341,
          image_background:
            "https://media.rawg.io/media/screenshots/0df/0df4aff421976b2a84d840faefb04124.jpg",
        },
      ],
      esrb_rating: {
        id: 6,
        name: "Rating Pending",
        slug: "rating-pending",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/48c/48cb04ca483be865e3a83119c94e6097.jpg",
        },
        {
          id: 72010,
          image:
            "https://media.rawg.io/media/screenshots/cbf/cbf0e5c6fa2b8a8c653074b9258884df.jpg",
        },
        {
          id: 72011,
          image:
            "https://media.rawg.io/media/screenshots/01b/01b5cb2ad3f6fa69b70790094bfd3372.jpg",
        },
        {
          id: 72012,
          image:
            "https://media.rawg.io/media/screenshots/b31/b3141dbd80cd27a1d7b335e3b5956f89.jpg",
        },
        {
          id: 72013,
          image:
            "https://media.rawg.io/media/screenshots/40b/40bcfff9760f368d158e92d05f4a0d9b.jpg",
        },
        {
          id: 72014,
          image:
            "https://media.rawg.io/media/screenshots/6eb/6ebc3896184e94ebe617d2cb224eee2a.jpg",
        },
        {
          id: 72015,
          image:
            "https://media.rawg.io/media/screenshots/e68/e6800252d7fc63fcb794af70ec28c8fc.jpg",
        },
      ],
    },
    {
      id: 13668,
      slug: "amnesia-the-dark-descent",
      name: "Amnesia: The Dark Descent",
      released: "2010-09-08",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
      rating: 3.65,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 602,
          percent: 48.47,
        },
        {
          id: 5,
          title: "exceptional",
          count: 266,
          percent: 21.42,
        },
        {
          id: 3,
          title: "meh",
          count: 209,
          percent: 16.83,
        },
        {
          id: 1,
          title: "skip",
          count: 165,
          percent: 13.29,
        },
      ],
      ratings_count: 1223,
      reviews_text_count: 10,
      added: 10408,
      added_by_status: {
        yet: 770,
        owned: 8189,
        beaten: 786,
        toplay: 152,
        dropped: 479,
        playing: 32,
      },
      metacritic: 85,
      playtime: 2,
      suggestions_count: 453,
      updated: "2025-10-02T13:07:59",
      user_game: null,
      reviews_count: 1242,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 79915,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          released_at: "2010-09-08",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04 LTS, Mint 13 LTS, Fedora 16, fully updated<br>\t</li><li><strong>Processor:</strong> 2.0Ghz - Low budget CPUs such as Celeron or Duron needs to be at about twice the CPU speed. <br>\t</li><li><strong>Memory:</strong> 2 GB<br>\t</li><li><strong>Graphics:</strong> Radeon X1000/GeForce 6 - Integrated graphics and low budget cards might not work. <br>\t</li><li><strong>Hard Drive:</strong> 3 GB</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 107480,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2010-09-08",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br>\t\t\t\t\t\t\t\t\t\t\t\t\t\t<ul class="bb_ul"><li><strong>OS:</strong> Mac OS X 10.5.8 or newer<br>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong> 2.0Ghz<br>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 1 GB RAM<br>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> Radeon X1000/GeForce 6 (Integrated Intel Graphics not supported)<br>\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 2GB space free<br>\t\t\t\t\t\t\t\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2010-09-08",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP/Vista/7<br>\t\t\t\t\t\t\t\t</li><li><strong>Processor:</strong>  2.0Ghz - Low budget CPUs such as Celeron or Duron needs to be at about twice the CPU speed<br>\t\t\t\t\t\t\t\t</li><li><strong>Memory:</strong> 2 GB<br>\t\t\t\t\t\t\t\t</li><li><strong>Hard Drive:</strong> 3GB<br>\t\t\t\t\t\t\t\t</li><li><strong>Graphics:</strong> Radeon X1000/GF 6 - Integrated graphics and very low budget cards might not work.<br>\t\t\t\t\t\t\t</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Pentium 4/Athlon XP 1.5 ГГц,1 Гб памяти,3D-ускоритель со 128 Мб памяти,2 Гб на винчестере",
            recommended:
              "Pentium 4/Athlon XP 2 ГГц,2 Гб памяти,3D-ускоритель с 256 Мб памяти,2 Гб на винчестере",
          },
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 3,
          name: "Adventure",
          slug: "adventure",
          games_count: 150179,
          image_background:
            "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
        },
        {
          id: 51,
          name: "Indie",
          slug: "indie",
          games_count: 83693,
          image_background:
            "https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg",
        },
      ],
      stores: [
        {
          id: 423652,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 1420,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
        {
          id: 15036,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
        {
          id: 25640,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 6976,
            image_background:
              "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 247421,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 23303,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 38807,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3439,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 26494,
          image_background:
            "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 36615,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 48464,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 28416,
          image_background:
            "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
        },
        {
          id: 193,
          name: "Classic",
          slug: "classic",
          language: "eng",
          games_count: 1832,
          image_background:
            "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
        },
        {
          id: 1,
          name: "Survival",
          slug: "survival",
          language: "eng",
          games_count: 10553,
          image_background:
            "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 7017,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 18273,
          image_background:
            "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
        },
        {
          id: 62,
          name: "Moddable",
          slug: "moddable",
          language: "eng",
          games_count: 1111,
          image_background:
            "https://media.rawg.io/media/games/9bf/9bfac18ff678f41a4674250fa0e04a52.jpg",
        },
        {
          id: 17,
          name: "Survival Horror",
          slug: "survival-horror",
          language: "eng",
          games_count: 9728,
          image_background:
            "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
        },
        {
          id: 40833,
          name: "Captions available",
          slug: "captions-available",
          language: "eng",
          games_count: 1473,
          image_background:
            "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg",
        },
        {
          id: 40834,
          name: "Commentary available",
          slug: "commentary-available",
          language: "eng",
          games_count: 294,
          image_background:
            "https://media.rawg.io/media/screenshots/405/40567fe45e6074a5b2bfbd4a3fea7809.jpg",
        },
        {
          id: 204,
          name: "Gothic",
          slug: "gothic",
          language: "eng",
          games_count: 1127,
          image_background:
            "https://media.rawg.io/media/games/27c/27cd8b7dead05a870f8a514a9a1915ad.jpg",
        },
        {
          id: 47,
          name: "Lovecraftian",
          slug: "lovecraftian",
          language: "eng",
          games_count: 916,
          image_background:
            "https://media.rawg.io/media/screenshots/d2f/d2f5f87a6e6df6b988dac391605f0b60.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg",
        },
        {
          id: 117208,
          image:
            "https://media.rawg.io/media/screenshots/32b/32bde7545dff888358a7ce620c7b3063.jpg",
        },
        {
          id: 117209,
          image:
            "https://media.rawg.io/media/screenshots/f59/f597e6857aab3b1ba098d713524d1690.jpg",
        },
        {
          id: 117210,
          image:
            "https://media.rawg.io/media/screenshots/5fc/5fce282fa41e7d73d0e8b0c35da74391.jpg",
        },
        {
          id: 117211,
          image:
            "https://media.rawg.io/media/screenshots/8f8/8f88209c1fdc529c3af746c08a44ba6c.jpg",
        },
        {
          id: 117212,
          image:
            "https://media.rawg.io/media/screenshots/ff7/ff776252fbd6de18cfd197b57d6e6aac.jpg",
        },
        {
          id: 117213,
          image:
            "https://media.rawg.io/media/screenshots/42d/42d3c11b04e589565e5a9d2feae5023c.jpg",
        },
      ],
    },
    {
      id: 3696,
      slug: "wolfenstein-the-new-order",
      name: "Wolfenstein: The New Order",
      released: "2014-05-19",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
      rating: 4.18,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 1372,
          percent: 54.66,
        },
        {
          id: 5,
          title: "exceptional",
          count: 857,
          percent: 34.14,
        },
        {
          id: 3,
          title: "meh",
          count: 222,
          percent: 8.84,
        },
        {
          id: 1,
          title: "skip",
          count: 59,
          percent: 2.35,
        },
      ],
      ratings_count: 2489,
      reviews_text_count: 13,
      added: 10396,
      added_by_status: {
        yet: 495,
        owned: 6536,
        beaten: 2578,
        toplay: 322,
        dropped: 375,
        playing: 90,
      },
      metacritic: 81,
      playtime: 12,
      suggestions_count: 686,
      updated: "2025-10-04T21:23:38",
      user_game: null,
      reviews_count: 2510,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5709,
            image_background:
              "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
          },
          released_at: "2014-05-19",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2014-05-19",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> 64-bit Windows 7/Windows 8<br></li><li><strong>Processor:</strong> Intel Core i7 or equivalent AMD<br></li><li><strong>Memory:</strong> 4 GB RAM<br></li><li><strong>Graphics:</strong> GeForce 460, ATI Radeon HD 6850<br></li><li><strong>Storage:</strong> 50 GB available space</li></ul>',
            recommended:
              '<strong>Recommended:</strong><br><ul class="bb_ul"><li><strong>Additional Notes:</strong> AMD Radeon users: Please install AMD Catalyst™ 14.4</li></ul>',
          },
          requirements_ru: {
            minimum:
              "Win 7 64,Core 2 Duo 2.66GHz/Phenom II X2 545,GeForce GTS 250/Radeon HD 6670,3 GB RAM,50 GB HDD",
            recommended:
              "Win 7 64,Core i7 2.80GHz/Phenom II X6 1090T,GeForce GTX 460/Radeon HD 6850,4 GB RAM,50 GB HDD",
          },
        },
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2808,
            image_background:
              "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
          },
          released_at: "2014-05-19",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3165,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
          released_at: "2014-05-19",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6943,
            image_background:
              "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          },
          released_at: "2014-05-19",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 59596,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
      ],
      stores: [
        {
          id: 403368,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 6976,
            image_background:
              "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
          },
        },
        {
          id: 7879,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4929,
            image_background:
              "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
          },
        },
        {
          id: 17137,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
        {
          id: 3999,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8059,
            image_background:
              "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
          },
        },
        {
          id: 34545,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
        },
        {
          id: 660388,
          store: {
            id: 11,
            name: "Epic Games",
            slug: "epic-games",
            domain: "epicgames.com",
            games_count: 1420,
            image_background:
              "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 247421,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 49794,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 41981,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 38807,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3439,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 26494,
          image_background:
            "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 36615,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 21716,
          image_background:
            "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
        },
        {
          id: 40845,
          name: "Partial Controller Support",
          slug: "partial-controller-support",
          language: "eng",
          games_count: 13739,
          image_background:
            "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 48464,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 14784,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 26,
          name: "Gore",
          slug: "gore",
          language: "eng",
          games_count: 6518,
          image_background:
            "https://media.rawg.io/media/games/587/587588c64afbff80e6f444eb2e46f9da.jpg",
        },
        {
          id: 40850,
          name: "Steam Leaderboards",
          slug: "steam-leaderboards",
          language: "eng",
          games_count: 8255,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
        {
          id: 15,
          name: "Stealth",
          slug: "stealth",
          language: "eng",
          games_count: 7017,
          image_background:
            "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg",
        },
        {
          id: 70,
          name: "War",
          slug: "war",
          language: "eng",
          games_count: 10002,
          image_background:
            "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
        },
        {
          id: 89,
          name: "Historical",
          slug: "historical",
          language: "eng",
          games_count: 3899,
          image_background:
            "https://media.rawg.io/media/games/054/0549f1a0a5e782d4e81cdf8d022073fa.jpg",
        },
        {
          id: 119,
          name: "Dystopian",
          slug: "dystopian",
          language: "eng",
          games_count: 2636,
          image_background:
            "https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg",
        },
        {
          id: 197,
          name: "Robots",
          slug: "robots",
          language: "eng",
          games_count: 8798,
          image_background:
            "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
        },
        {
          id: 105,
          name: "World War II",
          slug: "world-war-ii",
          language: "eng",
          games_count: 1067,
          image_background:
            "https://media.rawg.io/media/screenshots/711/7115f17fd8453b9d4d93536446247404.jpg",
        },
        {
          id: 208,
          name: "Alternate History",
          slug: "alternate-history",
          language: "eng",
          games_count: 2145,
          image_background:
            "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
        },
        {
          id: 32371,
          image:
            "https://media.rawg.io/media/screenshots/23a/23af906d70f57be798bbd83da986c6db.jpg",
        },
        {
          id: 32372,
          image:
            "https://media.rawg.io/media/screenshots/b71/b716cf4d51be00d9561df3d1588383c4.jpg",
        },
        {
          id: 32373,
          image:
            "https://media.rawg.io/media/screenshots/439/4395d5364559ca15ac8e1becb100daea.jpg",
        },
        {
          id: 32374,
          image:
            "https://media.rawg.io/media/screenshots/0de/0de321f22cd1f5a7d0fb6b471f63c2d8.jpg",
        },
        {
          id: 32375,
          image:
            "https://media.rawg.io/media/screenshots/900/900e962d31b5ace3fb66bfd388d352cf.jpg",
        },
        {
          id: 32376,
          image:
            "https://media.rawg.io/media/screenshots/a1d/a1d6bd9f3617e0787da4b0f8389fe1f0.jpg",
        },
      ],
    },
    {
      id: 11935,
      slug: "half-life-deathmatch-source",
      name: "Half-Life Deathmatch: Source",
      released: "2006-05-01",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
      rating: 3.21,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 288,
          percent: 39.34,
        },
        {
          id: 1,
          title: "skip",
          count: 172,
          percent: 23.5,
        },
        {
          id: 3,
          title: "meh",
          count: 166,
          percent: 22.68,
        },
        {
          id: 5,
          title: "exceptional",
          count: 106,
          percent: 14.48,
        },
      ],
      ratings_count: 731,
      reviews_text_count: 1,
      added: 10382,
      added_by_status: {
        yet: 569,
        owned: 9201,
        beaten: 243,
        toplay: 21,
        dropped: 343,
        playing: 5,
      },
      metacritic: null,
      playtime: 1,
      suggestions_count: 267,
      updated: "2025-08-24T12:56:22",
      user_game: null,
      reviews_count: 732,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 5,
            name: "macOS",
            slug: "macos",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 107480,
            image_background:
              "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg",
          },
          released_at: "2006-05-01",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> OS X 10.5.8<br></li><li><strong>Processor:</strong> Dual core from Intel<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> nVidia 320M or higher, or Radeon 7000 or higher, or Intel HD 3000 or higher<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 79915,
            image_background:
              "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
          },
          released_at: "2006-05-01",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Ubuntu 12.04<br></li><li><strong>Processor:</strong> Dual core from Intel or AMD at 2.8 GHz<br></li><li><strong>Memory:</strong> 2 GB RAM<br></li><li><strong>Graphics:</strong> nVidia GeForce 8600/9600GT, ATI/AMD Radeaon HD2600/3600 (Graphic Drivers: nVidia 310, AMD 12.11), OpenGL 2.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space<br></li><li><strong>Sound Card:</strong> OpenAL Compatible Sound Card</li></ul>',
          },
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2006-05-01",
          requirements_en: {
            minimum:
              '<strong>Minimum:</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows® 7 (32/64-bit)/Vista/XP<br></li><li><strong>Processor:</strong> 1.7 GHz Processor, requires support for SSE<br></li><li><strong>Memory:</strong> 1024 MB RAM<br></li><li><strong>DirectX:</strong> Version 8.1<br></li><li><strong>Network:</strong> Broadband Internet connection<br></li><li><strong>Storage:</strong> 4 GB available space</li></ul>',
          },
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 5,
            name: "Apple Macintosh",
            slug: "mac",
          },
        },
        {
          platform: {
            id: 6,
            name: "Linux",
            slug: "linux",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
      ],
      stores: [
        {
          id: 13104,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 41981,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 8,
          name: "First-Person",
          slug: "first-person",
          language: "eng",
          games_count: 36615,
          image_background:
            "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        },
        {
          id: 32,
          name: "Sci-fi",
          slug: "sci-fi",
          language: "eng",
          games_count: 21716,
          image_background:
            "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 48464,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        {
          id: 30,
          name: "FPS",
          slug: "fps",
          language: "eng",
          games_count: 14784,
          image_background:
            "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
        },
        {
          id: 193,
          name: "Classic",
          slug: "classic",
          language: "eng",
          games_count: 1832,
          image_background:
            "https://media.rawg.io/media/games/9c4/9c47f320eb73c9a02d462e12f6206b26.jpg",
        },
        {
          id: 40856,
          name: "Valve Anti-Cheat enabled",
          slug: "valve-anti-cheat-enabled",
          language: "eng",
          games_count: 105,
          image_background:
            "https://media.rawg.io/media/games/78d/78dfae12fb8c5b16cd78648553071e0a.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/174/174fabfca02d5730531bab2153a7dfcb.jpg",
        },
        {
          id: 98726,
          image:
            "https://media.rawg.io/media/screenshots/93b/93bc0cb7efc9ac841433dc7763b674bc.jpg",
        },
        {
          id: 98727,
          image:
            "https://media.rawg.io/media/screenshots/496/4966eb36d9048d222226fcd0ae8455ca.jpg",
        },
        {
          id: 98728,
          image:
            "https://media.rawg.io/media/screenshots/aaf/aaf0a14f690cd76f6844c651495b19b6.jpg",
        },
        {
          id: 98729,
          image:
            "https://media.rawg.io/media/screenshots/246/2464d78ea26df75043b37361c0e181a8.jpg",
        },
        {
          id: 98730,
          image:
            "https://media.rawg.io/media/screenshots/69d/69d3c07e45fcbbe167235d7b3f09fc8b.jpg",
        },
      ],
    },
    {
      id: 58134,
      slug: "marvels-spider-man",
      name: "Marvel's Spider-Man",
      released: "2018-09-07",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
      rating: 4.45,
      rating_top: 5,
      ratings: [
        {
          id: 5,
          title: "exceptional",
          count: 2162,
          percent: 58.02,
        },
        {
          id: 4,
          title: "recommended",
          count: 1257,
          percent: 33.74,
        },
        {
          id: 3,
          title: "meh",
          count: 217,
          percent: 5.82,
        },
        {
          id: 1,
          title: "skip",
          count: 90,
          percent: 2.42,
        },
      ],
      ratings_count: 3653,
      reviews_text_count: 55,
      added: 10370,
      added_by_status: {
        yet: 376,
        owned: 5061,
        beaten: 3442,
        toplay: 981,
        dropped: 236,
        playing: 274,
      },
      metacritic: 87,
      playtime: 6,
      suggestions_count: 600,
      updated: "2025-10-09T20:25:39",
      user_game: null,
      reviews_count: 3726,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 18,
            name: "PlayStation 4",
            slug: "playstation4",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 6943,
            image_background:
              "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg",
          },
          released_at: "2018-09-07",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2018-09-07",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 187,
            name: "PlayStation 5",
            slug: "playstation5",
            image: null,
            year_end: null,
            year_start: 2020,
            games_count: 1344,
            image_background:
              "https://media.rawg.io/media/games/152/152e788b7504aa2753c86dae912fb34c.jpg",
          },
          released_at: "2018-09-07",
          requirements_en: null,
          requirements_ru: null,
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
      ],
      stores: [
        {
          id: 958559,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
        {
          id: 46837,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8059,
            image_background:
              "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 247421,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 38807,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
        {
          id: 36,
          name: "Open World",
          slug: "open-world",
          language: "eng",
          games_count: 9056,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 6,
          name: "Exploration",
          slug: "exploration",
          language: "eng",
          games_count: 28416,
          image_background:
            "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg",
        },
        {
          id: 69,
          name: "Action-Adventure",
          slug: "action-adventure",
          language: "eng",
          games_count: 20426,
          image_background:
            "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg",
        },
        {
          id: 37796,
          name: "exclusive",
          slug: "exclusive",
          language: "eng",
          games_count: 4491,
          image_background:
            "https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg",
        },
        {
          id: 110,
          name: "Cinematic",
          slug: "cinematic",
          language: "eng",
          games_count: 3232,
          image_background:
            "https://media.rawg.io/media/games/0af/0af85e8edddfa55368e47c539914a220.jpg",
        },
        {
          id: 203,
          name: "Beat 'em up",
          slug: "beat-em-up",
          language: "eng",
          games_count: 3503,
          image_background:
            "https://media.rawg.io/media/games/b2d/b2db4496b084b235742cf6e9894bbf36.jpg",
        },
        {
          id: 37797,
          name: "true exclusive",
          slug: "true-exclusive",
          language: "eng",
          games_count: 3980,
          image_background:
            "https://media.rawg.io/media/games/363/36306deef81e7955a5d0f5c3b43fccee.jpg",
        },
        {
          id: 478,
          name: "3rd-Person Perspective",
          slug: "3rd-person-perspective",
          language: "eng",
          games_count: 87,
          image_background:
            "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg",
        },
        {
          id: 268,
          name: "Comic Book",
          slug: "comic-book",
          language: "eng",
          games_count: 2034,
          image_background:
            "https://media.rawg.io/media/games/f0a/f0a65d7d9c4534f8f4897f9d161307ed.jpg",
        },
        {
          id: 78,
          name: "America",
          slug: "america",
          language: "eng",
          games_count: 946,
          image_background:
            "https://media.rawg.io/media/games/bce/bce62fbc7cf74bf6a1a37340993ec148.jpg",
        },
        {
          id: 234,
          name: "Superhero",
          slug: "superhero",
          language: "eng",
          games_count: 1442,
          image_background:
            "https://media.rawg.io/media/games/445/44507fdd60a8ec02b1c3c64a293ca754.jpg",
        },
        {
          id: 43369,
          name: "new york",
          slug: "new-york-2",
          language: "eng",
          games_count: 2,
          image_background:
            "https://media.rawg.io/media/screenshots/e3c/e3cc9dcd0d4779fcdc08a01d150ea7f9.jpg",
        },
      ],
      esrb_rating: {
        id: 3,
        name: "Teen",
        slug: "teen",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/9aa/9aa42d16d425fa6f179fc9dc2f763647.jpg",
        },
        {
          id: 1325929,
          image:
            "https://media.rawg.io/media/screenshots/331/331ba5164c5c53a5d59aad3fe9771ac7.jpg",
        },
        {
          id: 1325930,
          image:
            "https://media.rawg.io/media/screenshots/a15/a15b42bd8a652a3733c6ad419ebb24bd.jpg",
        },
        {
          id: 1325931,
          image:
            "https://media.rawg.io/media/screenshots/150/150589c127b28f287f992c2bd426b443.jpg",
        },
        {
          id: 1325932,
          image:
            "https://media.rawg.io/media/screenshots/f52/f526988f895b554dccf68767557a8518.jpg",
        },
        {
          id: 1325958,
          image:
            "https://media.rawg.io/media/screenshots/745/74589db2dee21101d7af690976fca902.jpg",
        },
        {
          id: 1325959,
          image:
            "https://media.rawg.io/media/screenshots/090/09063845f2efe6d0b9bc908e2652c1e1.jpeg",
        },
      ],
    },
    {
      id: 4332,
      slug: "spec-ops-the-line",
      name: "Spec Ops: The Line",
      released: "2012-06-26",
      tba: false,
      background_image:
        "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
      rating: 4.1,
      rating_top: 4,
      ratings: [
        {
          id: 4,
          title: "recommended",
          count: 933,
          percent: 47.75,
        },
        {
          id: 5,
          title: "exceptional",
          count: 706,
          percent: 36.13,
        },
        {
          id: 3,
          title: "meh",
          count: 216,
          percent: 11.05,
        },
        {
          id: 1,
          title: "skip",
          count: 99,
          percent: 5.07,
        },
      ],
      ratings_count: 1934,
      reviews_text_count: 12,
      added: 10369,
      added_by_status: {
        yet: 503,
        owned: 7364,
        beaten: 1921,
        toplay: 195,
        dropped: 345,
        playing: 41,
      },
      metacritic: 76,
      playtime: 5,
      suggestions_count: 547,
      updated: "2025-10-09T20:42:25",
      user_game: null,
      reviews_count: 1954,
      saturated_color: "0f0f0f",
      dominant_color: "0f0f0f",
      platforms: [
        {
          platform: {
            id: 14,
            name: "Xbox 360",
            slug: "xbox360",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 2808,
            image_background:
              "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg",
          },
          released_at: "2012-06-26",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 16,
            name: "PlayStation 3",
            slug: "playstation3",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 3165,
            image_background:
              "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
          },
          released_at: "2012-06-26",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 1,
            name: "Xbox One",
            slug: "xbox-one",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 5709,
            image_background:
              "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
          },
          released_at: "2012-06-26",
          requirements_en: null,
          requirements_ru: null,
        },
        {
          platform: {
            id: 4,
            name: "PC",
            slug: "pc",
            image: null,
            year_end: null,
            year_start: null,
            games_count: 556734,
            image_background:
              "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg",
          },
          released_at: "2012-06-26",
          requirements_en: {
            minimum:
              '<strong> Minimum</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows XP SP3<br>                </li><li><strong>Processor:</strong>  Intel Core 2 Duo @ 2Ghz / AMD Athlon 64 X2 equivalent<br>                </li><li><strong>Memory:</strong> 2 GB RAM<br>                </li><li><strong>Hard Disk Space:</strong>  6 GB free                <br>                </li><li><strong>Video Card:</strong> NVIDIA GeForce 8600 / ATI Radeon HD 2600XT (256 MB memory) <br>                </li><li><strong>DirectX®:</strong> 9.0<br>                </li><li><strong>Sound:</strong> DirectX Compatible<br></li><li><strong>Additional:</strong> Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include: STEAM Client, Microsoft Direct X, Visual C++ 2008 Redistributable, Visual C++ 2005 SP1 RedistributableCompatible      <br> </li></ul>',
            recommended:
              '<strong> Recommended</strong><br><ul class="bb_ul"><li><strong>OS:</strong> Windows Vista/7<br>                </li><li><strong>Processor:</strong> 2.4 GHz Quad Core processor<br>                </li><li><strong>Memory:</strong> 3 GB RAM<br>                </li><li><strong>Hard Disk Space:</strong> 10 GB free               <br>                </li><li><strong>Video Card:</strong> NVIDIA GeForce 9800 GTX/ATI Radeon HD 4850 (512+ MB memory) <br>                </li><li><strong>DirectX®:</strong> 9.0<br>                </li><li><strong>Sound:</strong> DirectX Compatible     <br></li><li><strong>Additional:</strong> Initial installation requires one-time internet connection for Steam authentication; software installations required (included with the game) include: STEAM Client, Microsoft Direct X, Visual C++ 2008 Redistributable, Visual C++ 2005 SP1 RedistributableCompatible                  </li></ul>',
          },
          requirements_ru: {
            minimum:
              "Core 2 Duo/Athlon 64 X2 2 ГГц,2 Гб памяти,GeForce 8600/Radeon HD 2600,6 Гб на винчестере,интернет-соединение",
            recommended:
              "Core 2 Quad/Phenom X4 2.4 ГГц,3 Гб памяти,GeForce 9800 GTX/Radeon HD 4850,10 Гб на винчестере,интернет-соединение",
          },
        },
      ],
      parent_platforms: [
        {
          platform: {
            id: 1,
            name: "PC",
            slug: "pc",
          },
        },
        {
          platform: {
            id: 2,
            name: "PlayStation",
            slug: "playstation",
          },
        },
        {
          platform: {
            id: 3,
            name: "Xbox",
            slug: "xbox",
          },
        },
      ],
      genres: [
        {
          id: 4,
          name: "Action",
          slug: "action",
          games_count: 190041,
          image_background:
            "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
        },
        {
          id: 2,
          name: "Shooter",
          slug: "shooter",
          games_count: 59596,
          image_background:
            "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
        },
      ],
      stores: [
        {
          id: 465902,
          store: {
            id: 2,
            name: "Xbox Store",
            slug: "xbox-store",
            domain: "microsoft.com",
            games_count: 4929,
            image_background:
              "https://media.rawg.io/media/games/f87/f87457e8347484033cb34cde6101d08d.jpg",
          },
        },
        {
          id: 4660,
          store: {
            id: 3,
            name: "PlayStation Store",
            slug: "playstation-store",
            domain: "store.playstation.com",
            games_count: 8059,
            image_background:
              "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
          },
        },
        {
          id: 19791,
          store: {
            id: 1,
            name: "Steam",
            slug: "steam",
            domain: "store.steampowered.com",
            games_count: 119632,
            image_background:
              "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
          },
        },
        {
          id: 33912,
          store: {
            id: 7,
            name: "Xbox 360 Store",
            slug: "xbox360",
            domain: "marketplace.xbox.com",
            games_count: 1915,
            image_background:
              "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg",
          },
        },
        {
          id: 320890,
          store: {
            id: 5,
            name: "GOG",
            slug: "gog",
            domain: "gog.com",
            games_count: 6976,
            image_background:
              "https://media.rawg.io/media/games/ebd/ebdbb7eb52bd58b0e7fa4538d9757b60.jpg",
          },
        },
      ],
      clip: null,
      tags: [
        {
          id: 31,
          name: "Singleplayer",
          slug: "singleplayer",
          language: "eng",
          games_count: 247421,
          image_background:
            "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg",
        },
        {
          id: 40847,
          name: "Steam Achievements",
          slug: "steam-achievements",
          language: "eng",
          games_count: 49794,
          image_background:
            "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg",
        },
        {
          id: 7,
          name: "Multiplayer",
          slug: "multiplayer",
          language: "eng",
          games_count: 41981,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 40836,
          name: "Full controller support",
          slug: "full-controller-support",
          language: "eng",
          games_count: 23303,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 40849,
          name: "Steam Cloud",
          slug: "steam-cloud",
          language: "eng",
          games_count: 24633,
          image_background:
            "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
        },
        {
          id: 13,
          name: "Atmospheric",
          slug: "atmospheric",
          language: "eng",
          games_count: 38807,
          image_background:
            "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg",
        },
        {
          id: 42,
          name: "Great Soundtrack",
          slug: "great-soundtrack",
          language: "eng",
          games_count: 3439,
          image_background:
            "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
        },
        {
          id: 18,
          name: "Co-op",
          slug: "co-op",
          language: "eng",
          games_count: 14030,
          image_background:
            "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg",
        },
        {
          id: 118,
          name: "Story Rich",
          slug: "story-rich",
          language: "eng",
          games_count: 26494,
          image_background:
            "https://media.rawg.io/media/games/960/960b601d9541cec776c5fa42a00bf6c4.jpg",
        },
        {
          id: 149,
          name: "Third Person",
          slug: "third-person",
          language: "eng",
          games_count: 14341,
          image_background:
            "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg",
        },
        {
          id: 16,
          name: "Horror",
          slug: "horror",
          language: "eng",
          games_count: 48464,
          image_background:
            "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg",
        },
        {
          id: 40850,
          name: "Steam Leaderboards",
          slug: "steam-leaderboards",
          language: "eng",
          games_count: 8255,
          image_background:
            "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg",
        },
        {
          id: 150,
          name: "Third-Person Shooter",
          slug: "third-person-shooter",
          language: "eng",
          games_count: 4092,
          image_background:
            "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
        },
        {
          id: 11669,
          name: "stats",
          slug: "stats",
          language: "eng",
          games_count: 5864,
          image_background:
            "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
        },
        {
          id: 41,
          name: "Dark",
          slug: "dark",
          language: "eng",
          games_count: 18273,
          image_background:
            "https://media.rawg.io/media/games/5bf/5bf88a28de96321c86561a65ee48e6c2.jpg",
        },
        {
          id: 40832,
          name: "Cross-Platform Multiplayer",
          slug: "cross-platform-multiplayer",
          language: "eng",
          games_count: 3087,
          image_background:
            "https://media.rawg.io/media/games/f95/f95ec06eddda5c5bf206618c49cd3e68.jpg",
        },
        {
          id: 70,
          name: "War",
          slug: "war",
          language: "eng",
          games_count: 10002,
          image_background:
            "https://media.rawg.io/media/games/997/997ab4d67e96fb20a4092383477d4463.jpg",
        },
        {
          id: 43,
          name: "Post-apocalyptic",
          slug: "post-apocalyptic",
          language: "eng",
          games_count: 4811,
          image_background:
            "https://media.rawg.io/media/games/471/4712c9ac591f556f553556b864a7e92b.jpg",
        },
        {
          id: 192,
          name: "Mature",
          slug: "mature",
          language: "eng",
          games_count: 4566,
          image_background:
            "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
        },
        {
          id: 81,
          name: "Military",
          slug: "military",
          language: "eng",
          games_count: 2454,
          image_background:
            "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
        },
        {
          id: 285,
          name: "Psychological",
          slug: "psychological",
          language: "eng",
          games_count: 2627,
          image_background:
            "https://media.rawg.io/media/screenshots/f77/f77b685304e3c05087aed1d18a7b667f.jpg",
        },
        {
          id: 283,
          name: "Based On A Novel",
          slug: "based-on-a-novel",
          language: "eng",
          games_count: 53,
          image_background:
            "https://media.rawg.io/media/screenshots/c95/c95db6fdf4ae18a5496e8ad523dc036f.jpg",
        },
        {
          id: 287,
          name: "Political",
          slug: "political",
          language: "eng",
          games_count: 738,
          image_background:
            "https://media.rawg.io/media/games/6d3/6d33014a4ed48a19c30a77ead5a0f62e.jpg",
        },
        {
          id: 19728,
          name: "european",
          slug: "european",
          language: "eng",
          games_count: 12,
          image_background:
            "https://media.rawg.io/media/screenshots/d14/d148f8ffc332b1d0f70be9bad91c2171.jpg",
        },
      ],
      esrb_rating: {
        id: 4,
        name: "Mature",
        slug: "mature",
      },
      short_screenshots: [
        {
          id: -1,
          image:
            "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
        },
        {
          id: 163188,
          image:
            "https://media.rawg.io/media/screenshots/a17/a17ff71c8774a3b70375a869b3881244.jpg",
        },
        {
          id: 163189,
          image:
            "https://media.rawg.io/media/screenshots/e5a/e5aaa5d242144ab80ef8264c96516dcc.jpg",
        },
        {
          id: 163190,
          image:
            "https://media.rawg.io/media/screenshots/f36/f36e756c36d36fe8ffe73a4b39acbebf.jpg",
        },
        {
          id: 163191,
          image:
            "https://media.rawg.io/media/screenshots/437/437ad0efe43adcad4284f5f48d03559f.jpg",
        },
        {
          id: 163192,
          image:
            "https://media.rawg.io/media/screenshots/9e2/9e26af47a676b061f288ff269e91a8f1.jpg",
        },
        {
          id: 163193,
          image:
            "https://media.rawg.io/media/screenshots/2d9/2d9a5dd6a25c04e49accca5358782152.jpg",
        },
      ],
    },
  ];
}
