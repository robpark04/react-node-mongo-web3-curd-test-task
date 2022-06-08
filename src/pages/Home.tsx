import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useWeb3React } from '@web3-react/core'
import UseApis from 'hooks/useApis';
import NFT from 'models/nft';
import styled from 'styled-components'

import { Box, Typography, Grid } from '@mui/material';
import NftCard from "components/NftCard"

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  padding: 5px 15px;
  border: 1px solid #4afefd;
  color: #4afefd;
  align-items: center;
  font-weight: 500;
  text-decoration: none;
  border-radius: 10px;
`
const Home = () => {
  const { account } = useWeb3React();

  const [nfts, setListNfts] = useState(new Array<NFT>());

  useEffect(() => {
    UseApis.getAll<NFT>("/nfts").then((res) => {
      if (res.Status) {
        const data = res.Data;
        const listNfts = new Array<NFT>();

        (data || []).forEach((p: any) => {
          listNfts.push(new NFT(p._id, p.name, p.image, p.description));
        });

        setListNfts(listNfts)
      } else {
        console.log("Messages: " + res.Messages);
        console.log("Exception: " + res.Exception);
      }
    });

  }, [])

  return (
    <>
      {!account &&
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h4" component="h1" color="#fff">
            Welcome!
          </Typography>
          <Typography variant="h6" component="h1" color="#fff">
            Please connect your wallet.
          </Typography>
        </Box>
      }
      {account &&
        <>
          <Box sx={{ my: 4, display: 'flex', flexDirection: 'row', gap: 3, alignItems: 'center' }} justifyContent='space-between'>
            <Typography variant="h5" color="#fff" fontWeight={700}>
              Collections
            </Typography>
            <StyledLink to="/create">Create</StyledLink>
          </Box>
          <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {nfts.map(item => {
              return (
                <Grid item xs={6} sm={4} md={3}>
                  <NftCard key={item.Id} nft={item}></NftCard>
                </Grid>
              )
            })}
          </Grid>
        </>
      }
    </>

  );
};
export default Home;
