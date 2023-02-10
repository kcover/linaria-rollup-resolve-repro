import * as React from "react";
import { styled } from "@linaria/react";

const color = "red";

const StyledDiv = styled.div`
    color: ${color};
`;

export default function Index() {
  return <StyledDiv>Hello world!</StyledDiv>;
};