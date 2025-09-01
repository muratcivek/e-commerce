import {
  CircularProgress,
  Typography,
  Card,
  CardMedia,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../../IProduct";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5116/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress size={60} />
      </Box>
    );

  if (!product)
    return (
      <Typography variant="h2" textAlign="center" mt={10}>
        Product not found
      </Typography>
    );

  const inStock = (product.stock ?? 0) > 0;

  return (
    <Box
      maxWidth="1000px"
      mx="auto"
      px={2}
      py={4}
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      gap={4}
      alignItems={{ xs: "center", md: "flex-start" }}
    >
      {/* Product Image */}
      <Card
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: 450 },
          borderRadius: 3,
          boxShadow: 4,
          overflow: "hidden",
        }}
      >
        <CardMedia
          component="img"
          image={`http://localhost:5116/images/${product.imageUrl}`}
          alt={product.name}
          sx={{
            objectFit: "contain",
            width: "100%",
            height: { xs: 250, md: 350 },
            backgroundColor: "#f5f5f5",
          }}
        />
      </Card>

      {/* Product Info */}
      <Stack
        spacing={2}
        sx={{
          flex: 1,
          width: { xs: "100%", md: "50%" },
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          {product.name}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.6 }}
        >
          {product.description}
        </Typography>

        <Typography variant="h5" color="primary" fontWeight="bold">
          {product.price.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
          })}
        </Typography>

        <Typography
          variant="body2"
          color={inStock ? "success.main" : "error.main"}
          fontWeight="medium"
        >
          {inStock
            ? `Stokta var (${product.stock ?? 0} adet)`
            : "Stok bilgisi yok veya ürün stokta değil"}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          disabled={!inStock}
          sx={{
            mt: 2,
            borderRadius: 2,
            paddingY: 1.5,
            boxShadow: 3,
            textTransform: "none",
            "&:hover": { boxShadow: 6 },
          }}
        >
          Sepete Ekle
        </Button>
      </Stack>
    </Box>
  );
}
