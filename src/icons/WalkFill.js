import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgWalkFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m7.617 8.712 3.205-2.328A2 2 0 0 1 12.065 6a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.401-2.547l-.698 3.956 2.061 1.729 2.223 6.108-1.88.684-2.039-5.604-3.39-2.845a2 2 0 0 1-.714-1.904l.509-2.885-.677.492-2.127 2.928-1.618-1.176L7.6 8.7zM13.5 5.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M10.53 18.681l-3.214 3.83-1.532-1.285 2.975-3.546.746-2.18 1.791 1.5z" />
  </Svg>
);
export default SvgWalkFill;
