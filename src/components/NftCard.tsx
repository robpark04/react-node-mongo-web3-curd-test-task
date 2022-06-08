import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Modal
} from '@mui/material';
import UseApis from 'hooks/useApis';
import NFT from 'models/nft';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { toastOption } from "utils/helper"
import { 
  StyledPrimaryButton,
  StyledSecontaryButton,
  StyledRemoveButton,
  StyledLink
} from "styles/styleds"

const modalStyles = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgb(21, 43, 57)',
  border: '1px solid rgb(21, 43, 57)',
  borderRadius: 2,
  boxShadow: 24,
  px: 4,
  py: 3,  
  display: 'flex',
  flexDirection: 'column'
};

const NftCard = ({ nft }: {
  nft: NFT;
}) => {

  const baseURL = 'http://localhost:3001';

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    UseApis.delete("/nfts/delete", nft.Id).then((res) => {
      if (res.Status) {
        toast.success("Deleted successfully.", toastOption);
        handleClose()
      } else {
        toast.error(res.Messages, toastOption);
        handleClose()
      }
    });
  }

  return (
    <>
      <Card sx={{ maxWidth: 345, bgcolor: '#1B435F' }}>
        <CardMedia
          component="img"
          height="300"
          image={`${baseURL}/uploads/${nft.Image}`}
          alt="nft"
        />
        <CardContent>
          <Typography variant="h5" component="div" color="text.primary" fontWeight={700}>
            {nft.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            {nft.Description}
          </Typography>
        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="flex-end" width="100%">
            <StyledLink to={`/edit/${nft.Id}`}>Edit</StyledLink>
            <StyledRemoveButton 
              onClick={() => {
                handleOpen();
              }}
            >
              Remove
            </StyledRemoveButton>
          </Box>
        </CardActions>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={modalStyles}>
          <Typography
            variant="h6"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: 700,
              color: 'text.primary',
              pb: 3,
            }}
          >
            Detele this item?
          </Typography>

          <Box display="flex" gap={4}>
            <StyledPrimaryButton
              onClick={handleDelete}
            >
              Delete
            </StyledPrimaryButton>
            <StyledSecontaryButton
              onClick={handleClose}
            >
              Close
            </StyledSecontaryButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
export default NftCard