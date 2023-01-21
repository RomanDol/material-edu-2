import { TextField } from "@mui/material"
import React from "react"

const Search = (props) => {
  const { onChange, value } = props

  return (
    <TextField
      type="search"
      value={value}
      onChange={onChange}
      label="search"
      variant="standard"
      fullWidth
      sx={{ mb: "1.5rem" }}
    />
  )
}

export default Search
