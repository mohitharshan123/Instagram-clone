import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const Share: React.FC<any> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M2.684 3.95H21.57l-9.443 16.356-2.766-9.069a.9.9 0 0 0-.203-.351L2.684 3.95Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default Share;
