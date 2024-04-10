import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNurseLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 15a8.001 8.001 0 017.939 7H4.062a8.001 8.001 0 017.939-7zm-1.813 2.28A6.022 6.022 0 006.803 20h5.199l-1.813-2.72zm3.627 0L12.001 20h5.198a6.022 6.022 0 00-3.385-2.72zM18.001 2v6A6 6 0 016 8V2h12zM8 8a4 4 0 008 0H8zm8-4H8v2h8V4z" />
    </Svg>
  );
}

export default SvgNurseLine;
