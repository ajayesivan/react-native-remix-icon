import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNotification2Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1v2zM9.5 21h5a2.5 2.5 0 01-5 0z" />
    </Svg>
  );
}

export default SvgNotification2Fill;
