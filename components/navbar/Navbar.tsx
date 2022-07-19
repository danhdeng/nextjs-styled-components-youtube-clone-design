import React from 'react';
import { Button } from '../../utils/styles';
import { Container, Input, Search, Wrapper } from './NavbarStyles';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
         <Button>
              <AccountCircleOutlinedIcon />
              SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}
