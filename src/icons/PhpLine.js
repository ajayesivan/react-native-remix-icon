import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPhpLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M10.15 5.55l-1.717 8.834h2l.858-4.417h1.5c.553 0 .915.44.81.982l-.668 3.435h2l.668-3.435c.316-1.627-.771-2.945-2.428-2.945h-1.5l.477-2.454h-2zM2.173 8.004h3.75c1.795 0 2.972 1.428 2.63 3.19-.343 1.762-2.075 3.19-3.87 3.19h-1.75l-.477 2.455h-2l1.717-8.835zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227.131-.678-.321-1.227-1.012-1.227h-1.75l-.477 2.454zm13.859-4.417h3.75c1.795 0 2.972 1.428 2.63 3.19-.343 1.762-2.076 3.19-3.87 3.19h-1.75l-.477 2.455h-2l1.717-8.835zm1.141 4.417h1.75c.69 0 1.357-.55 1.489-1.227.131-.678-.321-1.227-1.012-1.227h-1.75l-.477 2.454z" />
    </Svg>
  );
}

export default SvgPhpLine;
