import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMastercardFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.001 6.654a6.786 6.786 0 012.596 5.344A6.786 6.786 0 0112 17.34a6.786 6.786 0 01-2.596-5.343 6.786 6.786 0 012.596-5.344zm-.87-.582A7.783 7.783 0 008.402 12a7.783 7.783 0 002.728 5.925 6.798 6.798 0 11.003-11.854zm1.742 11.854A7.783 7.783 0 0015.601 12a7.783 7.783 0 00-2.73-5.928 6.798 6.798 0 11.003 11.854z" />
    </Svg>
  );
}

export default SvgMastercardFill;
