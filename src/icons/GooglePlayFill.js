import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGooglePlayFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.61 1.814L13.793 12 3.611 22.186a.996.996 0 01-.61-.92V2.735a1 1 0 01.609-.921zM14.5 12.707l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.207 12l2.492-2.491zM5.865 2.658L16.803 8.99 14.5 11.293 5.865 2.658z" />
    </Svg>
  );
}

export default SvgGooglePlayFill;
