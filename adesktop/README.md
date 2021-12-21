This JS snippet is available as a part of the project [Blog Utils](https://github.com/hifocus/BlogUltils). The project is made available to provide convenient for day-to-day webpage construction/modification.

## Adesktop.js

Adesktop.js means A**d d**estop. It allows you to conveniently display Google Adsense ads.

As screens on mobile devices are small enough, for readability, I don't like displaying ads on mobile devices. Therefore this one-liner is written to display ads on.

### Usage

> *As a result of a publishing error, this script on NPM will only be available after 2021.12.22*
>
> *During this time, `https://hifocus.github.io/BlogUtils/adesktop/dist/adesktop.min.js` may be used. This file does not guarantee availability after the date above.*

#### One Liner

```html
<script src="https://cdn.jsdelivr.net/npm/adesktop"></script>
<script>importAd('ca-pub-xxxxxxxxxx')</script>
```

### Common Usage

```html
<!-- use jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/adesktop"></script>
<script>importAd(publisherID, devStatus, platform)</script>

<!-- use UNPKG -->
<!-- <script src="https://unpkg.com/adesktop"></script> -->
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