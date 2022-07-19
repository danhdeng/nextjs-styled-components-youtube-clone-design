import Link from 'next/link'
import React from 'react'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from '../../utils/styles';

export const Signin = () => {
  return (
      <Link href="/signin" style={{textDecoration:"none"}}>
        <Button>
          <AccountCircleOutlinedIcon />
              SIGN IN
        </Button>
      </Link>
  )
}
