import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Modal from '@mui/material/Modal'
import { FC, useState } from 'react'
import MasonryImageList from './ImageList'
import IconGallery from '../../assets/icons/gallery.svg'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  height: '90%',
  bgcolor: '#757575',
  // border: '8px solid #000',
  boxShadow: 24,
  p: 2,
  gap: '10px',
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
}

export const GalleryModal: FC = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div style={{ marginTop: '20px' }}>
      <Button
        color={'secondary'}
        endIcon={<img src={IconGallery} width={20} height={20} alt="gallery" />}
        onClick={handleOpen}
      >
        Gallery
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/*<Typography id="modal-modal-title" variant="h6" component="h2">*/}
          {/*  Gallery*/}
          {/*</Typography>*/}
          <MasonryImageList />
          <div style={{ float: 'right', marginTop: '10px' }}>
            <Button variant="contained" color={'success'} onClick={handleClose}>
              Close
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
