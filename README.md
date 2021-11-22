# `@tiphedor/eslint-config`

eslint config for various envs.

## Available packages

[![@tiphedor/eslint-config-base](https://img.shields.io/npm/v/@tiphedor/eslint-config-base?label=%40tiphedor%2Feslint-config-base&style=for-the-badge)](https://github.com/tiphedor/eslint/tree/main/packages/base)
[![@tiphedor/eslint-config-vue](https://img.shields.io/npm/v/@tiphedor/eslint-config-vue?label=%40tiphedor%2Feslint-config-vue&style=for-the-badge)](https://github.com/tiphedor/eslint/tree/main/packages/vue)
[![@tiphedor/eslint-config-react](https://img.shields.io/npm/v/@tiphedor/eslint-config-react?label=%40tiphedor%2Feslint-config-react&style=for-the-badge)](https://github.com/tiphedor/eslint/tree/main/packages/react)

## Usage

In general, all you need is to do : 

```shell
yarn add -D @tiphedor/eslint-config-<CONFIG TO USE>
# or 
npm install --save-dev @tiphedor/eslint-config-<CONFIG TO USE>
```

Then in your eslint config, extend from the package :

```javascript
{
	// rest of your config....
	extends: [
		'@tiphedor/eslint-config-<CONFIG TO USE>'
	]
}
```

See the individual packages README for more info.

## Release

This monorepo uses `lerna` to manage its release cycle. To initiate a new release, simply run : 

```shell
lerna version
```

Lerna will prompt you to pick the version you want - and then it will handle creating tags, commits, and all that good stuff. When ready to publish:

```shell
lerna publish from-package
```

See: https://github.com/lerna/lerna
