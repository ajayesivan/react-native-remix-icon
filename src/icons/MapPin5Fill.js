import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMapPin5Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17.657 15.657L12 21.314l-5.657-5.657a8 8 0 1111.314 0zM5 22h14v2H5v-2z" />
    </Svg>
  );
}

export default SvgMapPin5Fill;
