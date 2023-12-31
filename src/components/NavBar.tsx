import { HStack, Image } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image maxWidth="none" src={logo} boxSize="60px" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
