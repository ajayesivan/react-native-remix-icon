import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMicOffLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.425 17.839l4.767 4.768 1.415-1.415-19.8-19.799-1.413 1.415L7 8.414V10a5 5 0 006.39 4.804l1.55 1.55A7.002 7.002 0 015.07 11H3.056A9.004 9.004 0 0011 18.945V23h2v-4.055a8.941 8.941 0 003.425-1.106zm-4.872-4.872a3.002 3.002 0 01-2.52-2.52l2.52 2.52zm7.822 2.193l-1.443-1.442c.509-.81.856-1.73.997-2.718h2.016a8.949 8.949 0 01-1.57 4.16zm-2.91-2.909l-1.548-1.548c.055-.226.083-.46.083-.703V6a3 3 0 00-5.818-1.032L7.686 3.471A5 5 0 0117 6v4c0 .81-.192 1.575-.534 2.251z" />
    </Svg>
  );
}

export default SvgMicOffLine;
