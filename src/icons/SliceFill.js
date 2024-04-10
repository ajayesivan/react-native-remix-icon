import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSliceFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M13.768 12.229l2.121 2.121c-4.596 4.596-10.253 6.01-13.788 5.303L17.657 4.097l2.121 2.121-6.01 6.01z" />
    </Svg>
  );
}

export default SvgSliceFill;
