import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBilibiliFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M18.223 3.086a1.25 1.25 0 010 1.768L17.08 5.996h1.17A3.75 3.75 0 0122 9.747v7.5a3.75 3.75 0 01-3.75 3.75H5.75A3.75 3.75 0 012 17.247v-7.5a3.75 3.75 0 013.75-3.75h1.166L5.775 4.855a1.25 1.25 0 011.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 011.768 0zm.027 5.42H5.75a1.25 1.25 0 00-1.247 1.157l-.003.094v7.5c0 .659.51 1.198 1.157 1.246l.093.004h12.5a1.25 1.25 0 001.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 11-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 11-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z" />
    </Svg>
  );
}

export default SvgBilibiliFill;
