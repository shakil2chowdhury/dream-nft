import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cardlist from './components/Cardlist';
import Main from './components/Main';

function App() {
  const [nftData, setNftData] = useState([])
  const [selectedNft, setSelectedNft] = useState(0)
  useEffect(async () => {
    const data = await axios.get(
      'https://testnets-api.opensea.io/assets?asset_contract_address=0x1417Cb76C74fD1f65617eBCA6b5af6d083186d46&order_direction=asc'
      )
      setNftData(data.data.assets)
  }, [nftData])
  
  return (
    <div className="app">
      <Header />
      {
        nftData.length > 0 && (
        <>
        <Main nftList={nftData} currentNft={selectedNft}/>
        <Cardlist cardList={nftData} setSelectedNft={setSelectedNft} />
        </>
        )
      }
    </div>
  );
}

export default App;
