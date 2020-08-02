---
slug: "/blog/exploring-missingno-pokemon-of-extraordinary-origins"
date: "2020-08-01"
title: "Exploring Missingno: The Pokemon of extraordinary origins"
author: "Ben Wang"
---

This blog post will be split into 3 sections. The first section fills the readers in on what Pokemon is, the second section will explain how to find Missingno, and the third section will cover the technical details behind this fascinating Pokemon.

## What is Pokemon?

For those who are not familiar with Pokemon, this franchise today has games, movies, books, and global influence with its cast of magical creatures who are all called Pokemon.

However, just like other franchises, there was something that kicked it all off. In the case of Pokemon, it was the video game: Pokemon Red and Blue.

While there were previous versions that debuted in Japan (Red/Green), in America and other parts of the world, we got Red and Blue which included many bug fixes and improvements in general.

The game itself was pretty simple. You are a young child who is tasked with capturing all the Pokemon the game has to offer. In order to do this, you must train your current Pokemon and travel across the land while competing with your rival. During your adventures you collect gym badges, thwart evil deeds, and help troubled locals. 

For such a large world (and all the additional content) to fit in a single megabyte, there must be an incredible amount of efficiency and tricks in both the hardware and software. And indeed the developers made tons and tons of optimizations to fit their adventure into something that’s even smaller than a smartphone picture!

## How do we find Missingno?

To preface this you MUST be playing either Pokemon Red or Blue.

There are a variety of ways to find this Pokemon but by far the most common was is called the **Old Man Glitch**. To execute this glitch, you must be able to fly and surf in addition to having visited Cinnabar Island (I’m assuming the player would’ve already visited Viridian City). First the player must talk to the old man in Viridian City who will show the player how to catch Pokemon. Next the player must fly directly to Cinnabar Island. Finally the player must surf on the right edge of the island where the land and sea meet. After enough time and some luck, the player will encounter Missingno!

Some things to note are that you may encounter other Pokemon and that’s normal! Because Missingno is a coding quirk, many unexpected and rule breaking things occur such as level 100+ Pokemon and strange movesets. And don’t worry about corrupting your save file or damaging your Gameboy since there is nothing sinister occurring when you encounter these strange Pokemon!

Right now, some people are probably wondering why you would intentionally seek out this Pokemon after all, the developers never intended this Pokemon to exist. While some people just want to see Missingno with their own eyes, there are some benefits to encountering this Pokemon. 

Just encountering Missingno will increase the number of items in your sixth slot by 128. That’s right. You can get 128 more rare candies, master balls, anything you would want. Though at the expense of your Hall of Fame cutscene. When you view your Pokemon team during the Hall of Fame, you’ll instead get a corrupted, garbled mess but this is purely visual and does not affect any other part of the game.

## How Missingno Came to be

The short answer: Empty spaces in the Pokemon data that were from scrapped ideas.

The long answer: By using the Old Man Glitch we are actually encountering Pokemon determined by our player name. Normally this would lead to lots of variation but the game actually pads out the player’s name from 7 to 11 characters meaning that there will always be 2 Pokemon that everyone can encounter. And surprise, the two additional Pokemon are both Missingno. 

### The specifics of running into Missingno

But actually running across Missingno in the wild is harder. Normally, when you are surfing along water there’s a list of Pokemon you can encounter. However the programmers forgot about the edge tiles of Cinnabar Island which are considered to be in the Island. So the game just pulls from whatever’s in that RAM location and by talking to the old man, the game stores your name in that area since there’s normally no use for that RAM in a town. By flying from Viridian to Cinnabar, you also skip the part of the game which would normally wipe the encounter list and so once you’re at Cinnabar Island, you encounter Pokemon based on your name. To determine the list, the game uses every two characters to determine a Pokemon’s ID and their level. This means that just changing the players name would allow for a crazy amount of variation. 

### How the game pulls Missingno’s game data

During a normal encounter, the game pulls data from a specific point plus the Pokemon’s ID. And because the game doesn’t catch for invalid numbers, Missingno’s Pokemon ID (which is totally invalid) actually causes the game to read from a completely unrelated area and then tries to interpret this newfound data as Pokemon data. The invalid ID also comes into play for the 128 increased item count and the corrupted Hall of Fame. 

### Why the sixth item slot gain 128 items

So once the player has seen Missingno, the game tries to flip the “seen” status to true in the Pokedex to true but since the ID is invalid the game just sets a random bit to true or 1. It just so happens that the bit the game sets to 1 is in the amount of items a player has in the sixth slot!

### Why the Hall of Fame gets bamboozled

As for the corrupted Hall of Fame data, while the culprit is the invalid Pokemon ID, its accomplice is the sprite decompression algorithm. It tries to read sprite data from a random address and tries to work with what it has. What happens is that the algorithm takes up so much RAM that it overflows from its designated work area to a nearby area: The Hall of Fame. An amusing analogy is like if a carpenter was given dimensions for an outrageously large chair and decides to tear down his walls in order to have enough space!

## Conclusion

Even though you won’t see anything nearly as intricate as Missingno nowadays, there are still plenty of interesting topics that could be covered. It’s just that I thought Missingno was truly a once-a-generation occurrence and it felt like a waste if its legacy were to disappear. While I left out a lot of details about Pokemon and Missingno, I see it as more of a mystery for you to explore. If you’re curious then go ahead and research it yourself; who knows, you might learn something new (I sure did)!
