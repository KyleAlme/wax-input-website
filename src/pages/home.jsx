import '../index.css';
import React, { useState } from 'react';

function changePhotoIndex(index, direction, length) {
    return ((index + direction + length) % length)
}

function HomePage() {
    const [photoIndex, setPhotoIndex] = useState(0);

    const PhotoList = ["BandPhoto2.jpg", "BandPhoto3.jpg", "BandPhoto4.jpg"];

    const nextPhotoIndex = () => {
        setPhotoIndex(prev => changePhotoIndex(prev, 1, PhotoList.length));
    };

    const prevPhotoIndex = () => {
        setPhotoIndex(prev => changePhotoIndex(prev, -1, PhotoList.length));
    };

    return (
        <>
        <div className="flex w-full h-[60vh]">
            <div className="flex w-[12.5%] justify-center">
                <button className="text-white" onClick={() => prevPhotoIndex()}>Prev</button>
            </div>
            <div className="w-[75%] flex justify-center">
                <img src={PhotoList[photoIndex]} alt="The Band" className="max-h-[80vh] object-contain"></img>
            </div>
            <div className="flex w-[12.5%] justify-center">
                <button className="text-white" onClick={() => nextPhotoIndex()}>Next</button>
            </div>
        </div>

        <div className="flex flex-col w-full items-center text-white mt-5">
            <p className="text-center w-[66%] font-extrabold text-4xl">
                About the Band
            </p>
            <p className="text-center w-[66%] mt-3">Wax Input is a heavy metal, dit-core band based out of the 413, in Western Massachusetts. The bands members consist of Colin, Sean, and Brandon
                (Codename: Ditley). They are three longtime friends who formed Wax Input in 2023 to share their collective passion of heavy metal with others, and show off Ditleys rubik's cube skills.
            </p>
        </div>  

        <div className="flex flex-col w-full items-center text-white mt-5">
            <p className="font-extrabold text-4xl mb-2">Upcoming Shows</p>

            <div className="w-full border-t-2 border-b-2 flex">
                <div className="w-[50%]">
                    <p className="text-2xl mt-5 text-center">Howard's Bookstore</p>
                    <p className="text-l mb-5 italic text-center">25 Main St, Torrington CT</p>
                </div> 
                <div className="w-[50%]">
                    <p className="text-2xl mt-5 mb-5 text-center">June 27th</p>
                </div>
            </div>

            <div className="w-full border-t-2 border-b-2 flex">
                <div className="w-[50%]">
                    <p className="text-2xl mt-5 text-center">The Nook</p>
                    <p className="text-l mb-5 italic text-center">8 Franklin St, Westfield MA</p>
                </div> 
                <div className="w-[50%]">
                    <p className="text-2xl mt-5 mb-5 text-center">June 6th</p>
                </div>
            </div>
        </div>

        <div className="h-[10vh] flex flex-col bg-white w-full">
            <p className="bg-inherit text-black font-black text-lg text-center">Where To Find Wax Input:</p>
            <div className="bg-inherit flex justify-center gap-x-8 py-2">
                <a href="https://open.spotify.com/artist/6mUhaPUPQGzNWuwxHZKEpH">
                    <img src="SpotifyLogo.png" className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://soundcloud.com/wax-input">
                    <img src="SoundcloudLogo.svg" className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://www.instagram.com/wax.input/">
                    <img src="InstagramLogo.svg" className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://music.apple.com/us/artist/wax-input/1705341034">
                    <img src="AppleLogo.svg" className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://www.youtube.com/@WaxInput">
                    <img src="YoutubeLogo.svg" className="h-8 object-contain bg-white"></img>
                </a>
            </div>
        </div>
        
        </>
    );

}

export default HomePage;