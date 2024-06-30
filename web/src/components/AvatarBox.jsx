import * as React from "react";
import { Avatar, Box, styled } from "@mui/material";
import twoLineLogo from "../img/metakgp_logo_two_line.svg"

const AvatarBoxContainer = styled(Box)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
  height: 100dvh;
  max-width: min(400px, 90dvw);
  margin: auto;
`;
const AvatarBox = (props) => (
  <AvatarBoxContainer>
    <img width={80} src={twoLineLogo}/>
    {/* <Avatar sx={{ m: 2, width: 64, height: 64, borderRadius: 3 }} src={twoLineLogo} variant="rounded" /> */}
    {props.children}
  </AvatarBoxContainer>
);

export default AvatarBox;
