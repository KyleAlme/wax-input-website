import '../index.css';
import CustomHeader from '../Header.jsx';
import DitAtWar from '../../public/DitAtWar.jpg'
import BandPhoto2 from '../../public/BandPhoto2.jpg'
import DitSnap from '../../public/DitSnap.jpg'

function MerchPage() {

    return (
        <>
            <p className="text-white text-4xl text-center mb-4">Sorry!</p>
            <p className="text-white text-2xl text-center">The Merchandise section is not completed/active (and there is currently no timetable to get it running).
                Please enjoy these funny photos of the band instead.
            </p>
            <div className="flex max-h-[75vh] w-[70%] mx-auto mt-8 mb-8">
                <img src={BandPhoto2} alt="The Band at Halloween"className="object-contain w-full"></img>
            </div>
            <div className="flex max-h-[75vh] w-[70%] mx-auto mt-8 mb-8">
                <img src={DitAtWar} alt="Dit at War"className="object-contain w-full"></img>
            </div>
            <div className="flex max-h-[75vh] w-[70%] mx-auto mt-8 mb-8">
                <img src={DitSnap} alt="Dit Pic"className="object-contain w-full"></img>
            </div>

        <div className="h-[10vh] flex flex-col bg-white w-full mt-5">
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
    )

}

export default MerchPage;