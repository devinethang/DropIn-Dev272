Wireframes

Wireframes for every MVP screen of DropIn, plus a user-flow diagram.


Files

File | Screen | Route (Expo Router) | Navigation |
["sign-in.png"](./sign-in.png) | Sign in | "src/app/sign-in.tsx" | Stack screen, shown when signed out |
["home.png"](./home.png) | Home (Discover) | "src/app/(tabs)/index.tsx" | Tab 1 |
["my-games.png"](./my-games.png) | My games (Joined / Hosting) | "src/app/(tabs)/my-games.tsx" | Tab 2 |
["game-detail.png"](./game-detail.png) | Game detail | "src/app/game/[id].tsx" | Pushed · dynamic route |
["create-game.png"](./create-game.png) | Create game | "src/app/create.tsx" | Pushed |
["user-flow.png"](./user-flow.png) | User-flow diagram 

Tool used

    Canva.com


User flow


    Tabs: Home (Discover) and My games.
    Pushed: Game detail (from a game card on either tab) and Create game (from "New game" on Home).
    Dynamic route: "game/[id]", where "id" is the game's ID.
    After Post, Create game replaces itself with the new game's detail screen.
    Sign out (My games header) returns to Sign in. The root layout redirects signed-out users to Sign in.



Not added in the MVP

    Map view, waitlist, game chat, skill level, repeat-weekly games, search and day filters, notifications.

