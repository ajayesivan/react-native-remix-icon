import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNurseFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M14.957 15.564A8.009 8.009 0 0119.94 22H4.062a8.009 8.009 0 014.982-6.436L12.001 20l2.956-4.436zM18.001 2v6A6 6 0 016 8V2h12zm-2 6H8a4 4 0 008 0z" />
    </Svg>
  );
}

export default SvgNurseFill;
