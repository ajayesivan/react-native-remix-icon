import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAmazonLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M15.626 14.62c-1.107 1.619-2.728 2.384-4.625 2.384-2.304 0-4.277-1.773-3.993-4.124.314-2.608 2.34-3.73 5.708-4.143.601-.073.85-.094 2.147-.19l.138-.01v-.215C15 6.526 13.933 5.3 12.5 5.3c-1.437 0-2.44.747-3.055 2.526l-1.89-.652C8.442 4.604 10.193 3.3 12.5 3.3c2.602 0 4.5 2.178 4.5 5.022 0 2.649.163 4.756.483 5.557.356.893.486 1.117.884 1.613l-1.56 1.251c-.524-.652-.753-1.048-1.182-2.122zm5.631 5.925c-.27.2-.741.081-.528-.44.264-.648.547-1.408.262-1.752-.21-.255-.468-.382-1.027-.382-.46 0-.69.06-.995.08-.204.014-.294-.297-.091-.44.261-.185.544-.33.87-.428 1.15-.344 2.505-.155 2.67.083.365.53-.2 2.569-1.16 3.28zm-1.182-1.084a7.548 7.548 0 01-.829.695c-2.122 1.616-4.871 2.46-7.258 2.46-3.843 0-7.28-1.793-9.888-4.795-.224-.23-.039-.566.223-.384 2.81 2.077 6.288 3.333 9.888 3.333 2.266 0 4.708-.537 7.035-1.692.163-.077.345-.182.504-.255.367-.21.69.306.325.638zm-5.064-8.92c-1.259.094-1.496.113-2.052.181-2.553.313-3.797 1.003-3.966 2.398-.125 1.043.81 1.884 2.008 1.884 2.039 0 3.517-1.228 4.022-4.463h-.012z" />
    </Svg>
  );
}

export default SvgAmazonLine;
