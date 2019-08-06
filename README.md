# MMM-ComicStrips
Based on andrecarluccis MMM-DailyDilbert module, this is a module for MagicMirror<sup>2</sup> that displays daily or random Comic Strips from famous comics.

https://www.vg.no/tegneserier/api/images/pondus/2019-08-06.webp
https://www.vg.no/tegneserier/api/images/lunch/2019-08-06.webp

<img src="dilbert.png"></img>

## Dependencies
  * A [MagicMirror<sup>2</sup>](https://github.com/MichMich/MagicMirror) installation
  * [cheerio](https://github.com/cheeriojs/cheerio) npm package

## Installation
  1. Clone this repo into your `modules` directory.
  2. Create an entry in your `config.js` file to tell this module where to display on screen.
  3. Run `npm install`

 **Example:**
```
  {
    module: 'MMM-ComicStrips',
    position: 'bottom_bar',
    config: {
      comic: "dilbert",         // Choose between  ["dilbert", "xkcd", "garfield", "peanuts", "nichtlustig", "ruthe", "dilbert_de"]
      updateInterval : 1000 * 60 * 30,  // 30 minutes
      coloredImage: false,      //colored or black&white (inverted) image
      comicWidth: 500,
      timeForDaily: [7, 9]    //time frame to show the most recent (or daily) comic.
    }
  },
```

## Config
| **Option** | **default** | **Description** |
| --- | --- | --- |
| `comic` | "dilbert" | Choose between the currently available comics: ["dilbert", "dilbert_de", "xkcd", "peanuts", "garfield", "nichtlustig", "ruthe"] |
| `updateInterval` | 1800000 | Set to desired update interval (in ms), default is `1800000` (30 minutes). |
| `comicWidth` | 500 | Set comic maximum width. Be If your comics are too small you can try to set a higher width here. |
| `coloredImage` | false | Colored or black&white (inverted) image |
| `timeForDaily` | [7, 9] | Time frame to show the most recent (or daily) comic. This would equate to 7 - 9 in the morning. Currently only 24h time formatting!! For any other time you will get a random comic if possible. (Dilbert_de does not provide radndom comics yet) |




This module is based on andrecarluccis [MMM-DailyDilbert](https://github.com/andrecarlucci/MMM-DailyDilbert), which was heavily inspired by [DailyXKCD](https://github.com/Blastitt/DailyXKCD).
Many thanks to both of them for their great modules!
