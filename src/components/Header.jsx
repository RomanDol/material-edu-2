import { ShoppingBasket } from "@mui/icons-material"
import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material"
import React from "react"

// console.log(theme)

const Header = ({ handleCard, orderLen }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
          MUI Shop
        </Typography>
        <IconButton color="inherit" onClick={handleCard}>
          <Badge
            color='secondary'
          badgeContent={orderLen} >
            <ShoppingBasket />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
