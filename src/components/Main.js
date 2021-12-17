import React from 'react';
import instaLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './Main.css'
import { useEffect, useState } from 'react/cjs/react.development';

const Main = ({nftList, currentNft}) => {
    const [activeNft, setActiveNft] = useState(nftList[0])
    useEffect(() => {
        setActiveNft(nftList[currentNft])
    }, [nftList, currentNft])
    return (
        <div className='main'>
            <div className="main-content">
                <div className="highlight">
                    <div className="nft-container">
                        <img className='selected-nft' src={activeNft.image_url} className='selected-nft' />
                    </div>
                </div>
                <div className="nft-details">
                    <div className="title">{activeNft.name}</div>
                    <span className="item-number">#{activeNft.token_id}</span>
                </div>
                <div className="owner">
                    <div className="owner-container">
                        <img src={activeNft.owner.profile_img_url} alt="owner" />
                    </div>
                    <div className="owner-details">
                        <div className="owner-name">
                            <div style={{color: 'white'}}>{activeNft.owner.address}</div>
                            <div className="owner-handle">@psychoNFT</div>
                            <div className="owner-link">
                                <img src={instaLogo} alt="" />
                                <img src={twitterLogo} alt="" />
                                <img src={moreIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Main;