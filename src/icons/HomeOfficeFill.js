import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHomeOfficeFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M20.8 9H12v8h-1v4H5a1 1 0 01-1-1v-9H1l10.327-9.388a1 1 0 011.346 0L20.8 9zM14 11h9v7h-9v-7zm-1 10h11v-2H13v2z" />
    </Svg>
  );
}

export default SvgHomeOfficeFill;
