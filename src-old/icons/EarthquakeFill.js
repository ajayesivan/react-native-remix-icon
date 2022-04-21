import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEarthquakeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11.327 1.612a1 1 0 011.246-.08l.1.08L23 11h-3v9a1 1 0 01-.883.993L19 21h-6.5l2.5-4-3.5-3 4-3L13 9l.5-3-3 3 2.5 2-5 3 3.75 3.5L8.5 21H5a1 1 0 01-.993-.883L4 20v-9H1l10.327-9.388z" />
    </Svg>
  );
}

export default SvgEarthquakeFill;
