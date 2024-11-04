import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollapseHorizontalLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.5 12l4.95-4.95 1.414 1.415L17.328 11H23v2h-5.672l2.534 2.533-1.415 1.414L13.5 12zM1 13h5.67l-2.534 2.535 1.414 1.414L10.5 12 5.55 7.05 4.136 8.465 6.672 11H1v2z" />
    </Svg>
  );
}

export default SvgCollapseHorizontalLine;
