import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgOpenbaseFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 2.76l10 3.236-.9 9.468-9.1 6.86-9.1-6.864L2.01 6 12 2.76zm0 .825L3.19 6.435 12 20.793l8.806-14.358L12 3.585z" />
    </Svg>
  );
}

export default SvgOpenbaseFill;
