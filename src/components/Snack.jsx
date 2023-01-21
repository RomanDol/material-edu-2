import { Alert, Snackbar } from "@mui/material"
import React from "react"

const Snack = ({ isOpen, handleClose = Function.prototype }) => {
  return (
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity="success" variant="filled">
        Товар добавлен в корзину!
      </Alert>
    </Snackbar>
  )
}

export default Snack
