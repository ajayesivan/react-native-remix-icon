import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMedal2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 8.5l2.116 5.088 5.492.44-4.184 3.585 1.278 5.36L12 20.1l-4.702 2.872 1.278-5.36-4.184-3.584 5.492-.44L12 8.5zm0 5.207l-.739 1.776-1.916.154 1.46 1.251-.447 1.871L12 17.756l1.641 1.003-.446-1.87 1.46-1.252-1.916-.154L12 13.707zM8 2v9H6V2h2zm10 0v9h-2V2h2zm-5 0v5h-2V2h2z" />
    </Svg>
  );
}

export default SvgMedal2Line;
