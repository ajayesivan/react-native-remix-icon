import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBox1Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 1l9.5 5.5v11L13 22.421V11.423l-9.502-5.5L12 1zM2.5 7.655V17.5l8.5 4.921v-9.845l-8.5-4.92z" />
    </Svg>
  );
}

export default SvgBox1Fill;
