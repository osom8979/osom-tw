# osom-ui

[![NPM Version](https://img.shields.io/npm/v/osom-ui?style=flat-square)](https://www.npmjs.com/package/osom-ui)
[![GitHub](https://img.shields.io/github/license/osom8979/osom-ui?style=flat-square)](https://raw.githubusercontent.com/osom8979/osom-ui/master/LICENSE)

## Overview

I used [daisyUI](https://daisyui.com/) when working on the
[osom-web](https://github.com/osom8979/osom-web) project, and it worked perfectly in
most situations.

However, while using the [CSS Modules](https://github.com/css-modules/css-modules),
I discovered a few minor issues.

* When using the `@apply` directive in a CSS module, the class name is removed and only
  the properties are kept.
* daisyUI completes its components with a combination of CSS classes
  (e.g. `btn btn-outline btn-primary`).

As a result, daisyUI components cannot be used in `@apply` directives. If you want to
use Daisy UI components, you need to expose them to the `class` attribute in HTML.

Like this:

```tsx
<button className={styles.classA + ' btn-outline ..'} />
```

This acts as a factor that hinders readability. (At least not my preferred coding style)
I advocate splitting HTML/JS/CSS as much as possible from a software architecture
perspective. So I want to create a [tailwind](https://tailwindcss.com/) component that
is compatible with the `@apply` directive.

## Project rule

* It is assumed that the `@apply` directive is actively used in CSS modules.
* If possible, use selectors that use basic HTML **tags** or **attributes**.
* If there is no appropriate HTML attribute, use the `data-*` attribute.

## Usage

Install package

```shell
npm install osom-ui
```

Apply the plugin to the `tailwind.config.js` file

```javascript
module.exports = {
  plugins: [require('osom-ui')],
};
```

Please refer to the [documentation](https://osom8979.github.io/osom-ui/) for additional information.

## Scripts

```shell
## Setup Yarn v2 (Berry)
./yarn set version berry

## Compiles and minifies for production
./yarn build:tailwind

## Style check
./yarn style

## Lints and fixes files
./yarn lint

## Run your unit tests
yarn test
```

## License

See the [LICENSE](./LICENSE) file for details. In summary,
**osom-ui** is licensed under the **MIT license**.
