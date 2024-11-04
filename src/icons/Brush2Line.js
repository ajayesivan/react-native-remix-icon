import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBrush2Line = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="m16.536 15.947 2.121-2.122-3.182-3.182 3.536-3.535-2.122-2.122-3.535 3.536-3.182-3.182L8.05 7.46zM15.12 17.36 6.637 8.875l-2.828 2.829 8.485 8.485zM13.355 5.693l2.828-2.828a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828 2.475 2.475a1 1 0 0 1 0 1.414L13 22.311a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.779-7.778a1 1 0 0 1 1.414 0z" />
  </Svg>
);
export default SvgBrush2Line;
