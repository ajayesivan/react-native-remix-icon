import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPentagonFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .7l10.747 7.808-4.105 12.634H5.358L1.253 8.508 12 .7z" />
    </Svg>
  );
}

export default SvgPentagonFill;
