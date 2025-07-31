import '../index.css';
import React, { useState } from 'react';
import Bandphoto3 from '../../public/BandPhoto3.jpg'
import Bandphoto4 from '../../public/BandPhoto4.jpg'
import Bandphoto5 from '../../public/BandPhoto5.jpg'
import SeanKenPhoto from '../../public/SeanKen.jpg'
import ColinDisPhoto from '../../public/ColinDis.jpg'
import YoutubeLogo from '../../public/YoutubeLogo.svg'
import AppleLogo from '../../public/AppleLogo.svg'
import InstagramLogo from '../../public/InstagramLogo.svg'
import SoundCloudLogo from '../../public/SoundcloudLogo.svg'
import SpotifyLogo from '../../public/SpotifyLogo.png'
import WtGAlbum from '../../public/WtGAlbum.png'




function changePhotoIndex(index, direction, length) {
    return ((index + direction + length) % length)
}

function HomePage() {
    const [photoIndex, setPhotoIndex] = useState(0);

    const PhotoList = [Bandphoto3, Bandphoto4, Bandphoto5, SeanKenPhoto, ColinDisPhoto];

    const nextPhotoIndex = () => {
        setPhotoIndex(prev => changePhotoIndex(prev, 1, PhotoList.length));
    };

    const prevPhotoIndex = () => {
        setPhotoIndex(prev => changePhotoIndex(prev, -1, PhotoList.length));
    };

    return (
        <>
        <div className="flex justify-center items-center h-[35vh] space-x-2 md:h-[60vh]">
            <img
                src={PhotoList[changePhotoIndex(photoIndex, -1, PhotoList.length)]}
                alt="Previous"
                onClick={() => prevPhotoIndex()}
                className="w-[20%] max-h-full object-contain opacity-50 hover:opacity-70 transition cursor-pointer transform hover:scale-105"
            />

            <img
                src={PhotoList[photoIndex]}
                alt="Current"
                className="w-[50%] max-h-full object-contain shadow-lg transition-all duration-300"
            />

            <img
                src={PhotoList[changePhotoIndex(photoIndex, 1, PhotoList.length)]}
                alt="Next"
                onClick={() => nextPhotoIndex()}
                className="w-[20%] max-h-full object-contain opacity-50 hover:opacity-70 transition cursor-pointer transform hover:scale-105"
            />
        </div>

        <div className="flex flex-col w-full items-center text-white mt-5 md:mt-16">
            <p className="text-center w-[66%] font-extrabold text-4xl md:text-5xl">
                About the Band
            </p>
            <p className="text-center w-[66%] mt-3 md:text-xl">Wax Input is a heavy metal, dit-core band based out of the 413, in Western Massachusetts. The bands members consist of Colin, Sean, and Brandon
                (Codename: Ditley). They are three longtime friends who formed Wax Input in 2023 to share their collective passion of heavy metal with others, and show off Ditleys rubik's cube skills.
            </p>
        </div>  

        <div className="flex flex-col w-full max-h-[90vh] items-center mt-16">
            <div>
                <p className='text-white text-4xl font-extrabold text-center'>Check out their Latest Release: "WAX THE GLASS!"</p>
            </div>
            <div className='flex w-[80%] justify-center'>
                <img src={WtGAlbum} alt="Wax The Glass Album Cover" className=" mt-6 max-h-[70vh] border-2 border-gray-100"></img>
            </div>
        </div>

        <div className='flex w-full justify-center mt-4'>
            <a href="https://open.spotify.com/album/4nbcRfNBeQTBxbJbsQKvsI?si=c0U0lyQaTV-ytwHYikVFqw" className='text-white underline text-2xl md:text-4xl'>Listen now!</a>
        </div>

        <div className="flex flex-col w-full items-center text-white mt-16" id="show-section">
            <p className="font-extrabold text-4xl mb-2 md:mt-5 md:text-5xl">Upcoming Shows</p>

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
                    <img src={SpotifyLogo} className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://soundcloud.com/wax-input">
                    <img src={SoundCloudLogo} className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://www.instagram.com/wax.input/">
                    <img src={InstagramLogo} className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://music.apple.com/us/artist/wax-input/1705341034">
                    <img src={AppleLogo} className="h-8 object-contain bg-white"></img>
                </a>
                <a href="https://www.youtube.com/@WaxInput">
                    <img src={YoutubeLogo} className="h-8 object-contain bg-white"></img>
                </a>
            </div>
        </div>
        
        </>
    );

}

export default HomePage;