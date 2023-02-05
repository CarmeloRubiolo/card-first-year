import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Fotos() {
  return (
    <>
    <h1 className='text-center mt-5'>Fotos</h1>
    <ImageList
      sx={{ margin:"5px", width: "max-width", height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
      >
      {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            />
        </ImageListItem>
      ))}
    </ImageList>
      </>
  );
};

const itemData = [
  {
    img: '../../../imagenes/bebe.jpg',
    title: "img-bebe",
    rows: 2,
    cols: 2
  },
  {
    img: '../../../imagenes/bebe2.jpg',
    title: "img-bebe",
    rows: 2,
    cols: 2
  },
  {
    img: '../../../imagenes/salvavidas.jpg',
    title: "img-bebe",
    cols: 4,
    rows: 2
  },
  {
    img: '../../../imagenes/bebe.jpg',
    title: "img-bebe",
    rows: 2,
    cols: 2
  },
  {
    img: '../../../imagenes/bebe2.jpg',
    title: "img-bebe",
    rows: 2,
    cols: 2
  },
];