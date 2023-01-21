import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material"
import React, { useState } from "react"

const GoodsItem = (props) => {
  const { name, price, setOrder, poster } = props

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ height: "100%" }}>
        <CardMedia
          component="img"
          sx={{ height: 140 }}
          src={poster}
          alt={name}
          title={name}
        />
        <CardContent>
          <Typography variant="h6" component="h3">
            {name}
          </Typography>
          <Typography variant="body1">Цена: {price} грн</Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() =>
              setOrder({
                id: props.id,
                name: props.name,
                price: props.price,
              })
            }
          >
            Купить
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default GoodsItem
