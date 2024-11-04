import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHourglassFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6 4H4V2h16v2h-2v2c0 1.615-.816 2.915-1.844 3.977-.703.726-1.558 1.395-2.425 2.023.867.628 1.722 1.297 2.425 2.023C17.184 15.085 18 16.385 18 18v2h2v2H4v-2h2v-2c0-1.615.816-2.915 1.844-3.977.703-.726 1.558-1.395 2.425-2.023-.867-.628-1.722-1.297-2.425-2.023C6.816 8.915 6 7.615 6 6V4zm2 0v2c0 .685.26 1.335.771 2h6.458c.51-.665.771-1.315.771-2V4H8zm4 9.222c-1.045.738-1.992 1.441-2.719 2.192a6.84 6.84 0 00-.51.586h6.458a6.851 6.851 0 00-.51-.586c-.727-.751-1.674-1.454-2.719-2.192z" />
    </Svg>
  );
}

export default SvgHourglassFill;
