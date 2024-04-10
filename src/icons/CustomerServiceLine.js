import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCustomerServiceLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 17.002a6.002 6.002 0 01-4.713 5.86l-.638-1.914A4.003 4.003 0 0019.465 19H17a2 2 0 01-2-2v-4a2 2 0 012-2h2.938a8.001 8.001 0 00-15.876 0H7a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-5C2 6.477 6.477 2 12 2s10 4.477 10 10V17.002zM20 17v-4h-3v4h3zM4 13v4h3v-4H4z" />
    </Svg>
  );
}

export default SvgCustomerServiceLine;
