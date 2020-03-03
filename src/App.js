import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core/";
import Autocomplete from "@material-ui/lab/Autocomplete";

import "./App.css";

const App = () => {
  const [productId, setProductId] = useState({});
  const [quantity, setQuantity] = useState(0);

  const products = [
    { productId: "The Shawshank Redemption", price: 1994 },
    { productId: "The Godfather", price: 1972 },
    { productId: "The Godfather: Part II", price: 1974 },
    { productId: "The Dark Knight", price: 2008 },
    { productId: "12 Angry Men", price: 1957 },
    { productId: "Schindler's List", price: 1993 },
    { productId: "Pulp Fiction", price: 1994 }
  ];
  return (
    <>
      <Autocomplete
        id={"combo-box-demo"}
        options={products}
        getOptionLabel={option => option.productId}
        style={{ width: 300 }}
        renderInput={params => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
        onChange={(event, value) =>
          value &&
          setProductId({
            productId: value.productId,
            price: value.price
          })
        }
      />

      <TextField
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{
          shrink: true
        }}
        variant="outlined"
        onChange={e => setQuantity(e.target.value)}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log(productId.price * quantity)}
      >
        Primary
      </Button>

      <span>{productId.productId}</span>
    </>
  );
};

export default App;
