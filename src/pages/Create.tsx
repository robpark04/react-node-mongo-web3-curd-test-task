import { useState } from 'react';
import { useWeb3React } from '@web3-react/core'
import { toast } from 'react-toastify';
import { toastOption } from "utils/helper"
import UseApis from 'hooks/useApis';
import NFT from 'models/nft';
import { Box, Typography, Stack, Button } from '@mui/material';
import PhotoIcon from "components/Icons/PhotoIcon"
import { 
  StyledTextField,
  StyledButton,
  Input
} from "../styles/styleds"

const Create = () => {
  const { account } = useWeb3React();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File>();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;
    setImage(fileList[0]);
  };

  const handleSave = async (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
 
    if (image) {
      formData.append("image", image);
    }
    
    UseApis.create("/nfts/create", formData).then((res) => {
      if (res.Status) {
        toast.success("Created successfully.", toastOption);
      } else {
        toast.error(res.Messages, toastOption);
      }
    });
  }

  return (
    <>
      {account &&
        <>
          <Box 
            sx={{ 
              my: 4, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 3, 
              justifyContent: 'center', 
              alignItems: 'center',
            }} 
          >
            <Typography variant="h5" color="#fff" fontWeight={700}>
              Create Collection
            </Typography>

            <Box
              component="div"
              sx={{
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3, 
                justifyContent: 'center', 
                width: {md: '50%', sm: '100%'},
                px: 6,
              }}
            >
              <StyledTextField required id="outlined-required" label="Name" value={name} onChange={handleNameChange}/>
              <StyledTextField id="outlined-multiline-static" label="Description" multiline rows={5} placeholder="Please enter description"
                value={description} onChange={handleDescriptionChange}
              />
              <Stack direction="column" alignItems="center" justifyContent="center" width="100%" border="1px dashed" borderRadius={1} px={1} py={6}>
                
                <PhotoIcon></PhotoIcon>
                <Typography variant="body1" color="#fff">
                  Please upload image.
                </Typography>
                  
                <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageChange} />
                  <Button variant="text" component="span">Upload</Button>
                </label>
              </Stack>
              <StyledButton onClick={handleSave}>Save</StyledButton>
            </Box>
          </Box>
        </>
      }
    </>

  );
};
export default Create;
