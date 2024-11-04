import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgHomeHeartFill = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3zm-8-3 3.359-3.359a2.25 2.25 0 0 0-3.182-3.182l-.177.177-.177-.177a2.25 2.25 0 0 0-3.182 3.182z" />
  </Svg>
);
export default SvgHomeHeartFill;
