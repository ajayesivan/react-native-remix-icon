import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHammerFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M17 8V2h3a1 1 0 011 1v4a1 1 0 01-1 1h-3zm-2 14a1 1 0 01-1 1h-4a1 1 0 01-1-1V8H2.5V6.074a1 1 0 01.496-.863L8.5 2H15v20z" />
    </Svg>
  );
}

export default SvgHammerFill;
