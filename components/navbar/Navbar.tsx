import React from 'react';
import { Button } from '../../utils/styles';
import { Container, Input, Search, Wrapper } from './navbar.style';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Signin } from '../signin/Signin';

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
       <Signin />
      </Wrapper>
    </Container>
  )
}
