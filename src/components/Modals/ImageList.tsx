import * as React from 'react'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItem1 from '../../assets/images/Mobile/phone1.png'
import ImageListItem2 from '../../assets/images/Mobile/phone2.png'
import ImageListItem3 from '../../assets/images/Mobile/phone3.png'

import { useMediaQuery } from 'react-responsive'

export default function MasonryImageList() {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return (
    <Box
      sx={{
        width: '100%',
        height: '95%',
        overflowY: 'scroll',
      }}
    >
      <ImageList variant="masonry" cols={isMobile ? 1 : 3} gap={8}>
        {itemData.map(item => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  )
}

const itemData = [
  {
    img: ImageListItem1,
    title: 'Bed',
  },
  {
    img: ImageListItem2,
    title: 'Books',
  },
  {
    img: ImageListItem3,
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
]
