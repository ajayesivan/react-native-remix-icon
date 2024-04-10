import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderShieldFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zM8 9v4.904c0 .892.446 1.724 1.187 2.219L12 17.998l2.813-1.875A2.667 2.667 0 0016 13.904V9H8zm2 4.904V11h4v2.904a.667.667 0 01-.297.555L12 15.594l-1.703-1.135a.667.667 0 01-.297-.555z" />
    </Svg>
  );
}

export default SvgFolderShieldFill;
