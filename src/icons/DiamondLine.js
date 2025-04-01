import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgDiamondLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m19.467 8.694.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M5 6a1 1 0 0 0-.8.4l-3 4a1 1 0 0 0 .057 1.269l9 10a1 1 0 0 0 1.486 0l9-10-1.486-1.338L11 19.505l-7.707-8.563L5.5 8H14V6z" />
  </Svg>
);
export default SvgDiamondLine;
