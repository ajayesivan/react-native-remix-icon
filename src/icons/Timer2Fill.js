import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTimer2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm3.536 5.05L10.585 12 12 13.414l4.95-4.95-1.414-1.414z" />
    </Svg>
  );
}

export default SvgTimer2Fill;
