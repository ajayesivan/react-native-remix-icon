import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgChatPrivateLine = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-8 8c0 1.335.326 2.618.94 3.766l.35.654-.656 2.946 2.948-.654.653.349A7.96 7.96 0 0 0 12 20a8 8 0 1 0 0-16m0 3a3 3 0 0 1 3 3v1h1v5H8v-5h1v-1a3 3 0 0 1 3-3m2 6h-4v1h4zm-2-4c-.552 0-1 .45-1 1v1h2v-1a1 1 0 0 0-1-1" />
  </Svg>
);
export default SvgChatPrivateLine;
