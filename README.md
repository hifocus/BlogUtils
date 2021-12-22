# Blog Utils

This repository is aim to consist a series of JavaScript/CSS snippets that provide utility for my blog.

Each snippet will be contained in a separate folder, and will be published as either a NPM package or to provide a jsDelivr link.

Please be advise snippets of this repository may not necessarily be written by myself; it may be from another author. If direct copy and paste is involved, the origin of the code will be marked. 

This repository is available solely based on the spirit of sharing and for convenience. Not of the snippets involve advanced programming skills/methodology.

| Name                | Type               |                                                              | One-Liner |
| ------------------- | ------------------ | ------------------------------------------------------------ | --------- |
| Adesktop.js         | JavaScript Snippet | Display Google Adsense Ads on desktop only (or the other way) | Go        |
| Memorial.js (WIP)   | JavaScript Library | Turn your webpage into Black and White at a memorial day with extensive customisability. |           |
| SimpleBanner (WIP)  | TBD                | Display a simple banner at your webpage.                     |           |
| More to be added... |                    |                                                              |           |

## Adesktop.js

Adesktop.js means A**d d**estop. It is used to conveniently to display Google Adsense ads.

As screens on mobile devices are small enough, for readability, I don't like displaying ads on mobile devices. Therefore this one-liner is written to display ads on.

### Usage

#### One Liner

```html
<script src="https://cdn.jsdelivr.net/npm/adesktop@1"></script>
<script>importAd('ca-pub-xxxxxxxxxx')</script>
```

### Common Usage

```html
<!-- use jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/adesktop@1"></script>
<script>importAd(publisherID, devStatus, platform)</script>

<!-- use UNPKG -->
<!-- <script src="https://unpkg.com/adesktop@1"></script> -->
```
#### Arguments

The function of the script is achieved by calling the `importAd()` function. The function has below arguments:

| Arguments   | Order | Optionality                                        | Value                                                        | Description                                                  |
| ----------- | ----- | -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| publisherID | 1st   | **Required**                                       | The publisher ID of your Google Adsense account. In the format of `ca-pub-xxxxxxxxxx` | This argument is **required** otherwise an error message will be shown in console. <u>The `ca-pub-` part</u> is **optional**, as the script will automatically supply the prefix if not manually added |
| devStatus   | 2nd   | Required <u>for the use of `platform` argument</u> | `dev` to display console logs                                | This will display two console logs when ads are loaded. The logs will contain your **publisher ID** and the **current platform** (desktop/mobile), to make ease during development |
| platform    | 3rd   | Optional                                           | `mobile` to **only** display ads in mobile                   | When this argument is used, the 2nd argument `devStatus` must be defined. If do not want console logs when using this argument, put `''` as the 2nd argument |

> Please note that all arguments are strings, so accompany them with `''`.

##### Examples

Display ads on **desktop**, console log **wanted**:

```html
<script src="https://cdn.jsdelivr.net/npm/adesktop"></script>
<script>importAd('ca-pub-xxxxxxxxxx', 'dev')</script>
```

Display ads on **mobile**, console log **unwanted**:

```html
<script src="https://cdn.jsdelivr.net/npm/adesktop"></script>
<script>importAd('ca-pub-xxxxxxxxxx', '', 'mobile')</script>
```
