import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEditCircleLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.684 4.025a8 8 0 107.287 7.287 7.936 7.936 0 00-.603-2.439l1.5-1.502A9.935 9.935 0 0122 11.997c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10a9.982 9.982 0 014.626 1.132l-1.501 1.5a7.941 7.941 0 00-2.44-.604zm7.801-1.928L21.9 3.511l-9.193 9.193-1.412.002-.002-1.416 9.192-9.193z" />
    </Svg>
  );
}

export default SvgEditCircleLine;
