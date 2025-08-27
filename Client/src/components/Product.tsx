import { AddShoppingCart } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { IProduct } from "../IProduct";


interface Props {
  product: IProduct;
}


export default 
function Product({ product }: Props) {
  return (
    <Card>
      <CardMedia sx={{height:160, backgroundSize:"contain"}} image={`http://localhost:5116/images/${product.imageUrl}`}></CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" color="text-secondary"> {product.name}</Typography>
        <Typography  variant="body2" color="secondary">{product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" startIcon={<AddShoppingCart />} color="success">
          Add to cart
        </Button>
        <Button variant="outlined" size="small" startIcon={<SearchIcon/>} color="primary">View</Button>
      </CardActions>
    </Card>
  );
}