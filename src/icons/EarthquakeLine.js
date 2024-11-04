import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEarthquakeLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M5 21a1 1 0 01-.993-.883L4 20v-9H1l10.327-9.389a1 1 0 011.246-.079l.1.08L23 11h-3v9a1 1 0 01-.883.993L19 21H5zm7-17.298L6 9.156V19h4.357l1.393-1.5L8 14l5-3-2.5-2 3-3-.5 3 2.5 2-4 3 3.5 3-1.25 2H18V9.157l-6-5.455z" />
    </Svg>
  );
}

export default SvgEarthquakeLine;
