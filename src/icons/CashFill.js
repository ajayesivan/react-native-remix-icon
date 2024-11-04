import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCashFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.005 4.003h18a1 1 0 011 1v14a1 1 0 01-1 1h-18a1 1 0 01-1-1v-14a1 1 0 011-1zM6.5 6H4v2.5A2.5 2.5 0 006.5 6zm11 0A2.5 2.5 0 0020 8.5V6h-2.5zM4 15.5V18h2.5A2.5 2.5 0 004 15.5zM17.5 18H20v-2.5a2.5 2.5 0 00-2.5 2.5zM12 16a4 4 0 100-8 4 4 0 000 8z" />
    </Svg>
  );
}

export default SvgCashFill;
