import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInstanceFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zM6.499 9.97L11 12.578v5.048h2v-5.048l4.501-2.606-1.002-1.731L12 10.845 7.501 8.24 6.499 9.97z" />
    </Svg>
  );
}

export default SvgInstanceFill;
