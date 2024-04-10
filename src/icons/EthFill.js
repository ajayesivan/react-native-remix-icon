import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEthFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 0L4.63 12.22 12 16.574l7.37-4.354L12 0zm0 24L4.63 13.617 12 18l7.37-4.383L12 24z" />
    </Svg>
  );
}

export default SvgEthFill;
