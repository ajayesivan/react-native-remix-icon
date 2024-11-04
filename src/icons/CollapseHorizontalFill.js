import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCollapseHorizontalFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.5 12l4.95-4.95-.001 3.95H23v2h-4.552v3.947L13.5 12zM1 13h4.55v3.95L10.5 12 5.55 7.05V11H1v2z" />
    </Svg>
  );
}

export default SvgCollapseHorizontalFill;
