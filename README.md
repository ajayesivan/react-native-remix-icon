<img src="https://user-images.githubusercontent.com/19279756/106659815-3d84ad00-65c5-11eb-97de-369b2d77de45.png" width="500">

# React Native Remix Icon

React native implementation for the popular [RemixIcon](https://remixicon.com) open source library.

### Install

Using yarn

```bash
yarn add react-native-remix-icon
```

Using npm

```bash
npm install react-native-remix-icon
```

This library relies on the `react-native-svg` package to render svg icons. Install the `react-native-svg` package,

```bash
yarn add react-native-svg
```

or

```bash
npm install react-native-svg
```

### Usage

```javascript
import Icon from "react-native-remix-icon";
```

```javascript
<Icon name="home-fill" size="48" color="red" fallback={null}>
```

### Props

| Prop  | Default          | Description                                                                                       |
| ----- | ---------------- | ------------------------------------------------------------------------------------------------- |
| name  | `remixicon-fill` | Name of the icon. Explore the [remixicon](https://remixicon.com) library for all valid icon names |
| size  | `24`             | Size of the icon                                                                                  |
| color | `black`          | Color of the icon                                                                                 |
| fallback | `<Text>Invalid Icon Name</Text>` | Fallback component when invalid name is provided. `null` value will not display anything |

### Version Alignment

The version of `react-native-remix-icon` is aligned with the original [RemixIcon](https://remixicon.com) package. For example, version `4.5.0` of `react-native-remix-icon` contains all the icons from version `4.5.0` of the RemixIcon library.

-----------

### Buy me a coffee
[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/ajayesivan)
