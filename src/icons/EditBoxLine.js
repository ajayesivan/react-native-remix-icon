import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEditBoxLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.757 2.997l-2 2H5v14h14V9.239l2-2v12.758a1 1 0 01-1 1H4a1 1 0 01-1-1v-16a1 1 0 011-1h12.757zm3.728-.9L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416 9.192-9.193z" />
    </Svg>
  );
}

export default SvgEditBoxLine;
