import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRestaurantFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M21 2v20h-2v-8h-3V7a5 5 0 015-5zM9 13.9V22H7v-8.1A5.002 5.002 0 013 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 01-4 4.9z" />
    </Svg>
  );
}

export default SvgRestaurantFill;
