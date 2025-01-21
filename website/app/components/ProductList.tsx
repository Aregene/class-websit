import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

interface HerbImage {
  src: string;
  alt?: string;
}

const ProductList = ({ herbImages }: { herbImages: HerbImage[] }) => {
  return (
    <>
      <Typography variant="h5" align="center" style={{ margin: '20px 0' }}>我们的产品</Typography>
      <Grid container spacing={3}>
        {herbImages.map((image, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card raised style={{ borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <CardMedia
                component="img"
                src={image.src}
                alt={image.alt || "herb image"}
              />
              {/* 其他 Card 内容 */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
