import { Grid } from "@mui/material";
import { IProduct } from "../IProduct";
import Product from "./Product";

export default function ProductList(props:any) {
  return (
    <Grid container spacing={2}>

      { props.products.map((p:IProduct) => (
        <Grid key={p.id} size = {{xs:12, md:4, lg:3 }}>
        <Product  product={p}/>
        </Grid>
      )) }


    </Grid>
  );
}
