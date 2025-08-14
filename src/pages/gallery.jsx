import '../index.css';
import SeanKen2 from '../../public/SeanKen2.jpg'
import ColinDis2 from '../../public/ColinDis2.jpg'

function Gallery() {

    return (
        <>
        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%] flex justify-center h-[50vh]">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/6jb15K2gPgE" allowFullScreen></iframe>
            </div>

            <div className="w-[100%] md:w-[50%] flex justify-center h-[50vh]">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/GfJ2y4k6rbc" allowFullScreen></iframe>
            </div>
        </div>

        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%] flex justify-center h-[50vh]">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/kilR67JLc3Y" allowFullScreen></iframe>
            </div>

            <div className="w-[100%] md:w-[50%] flex justify-center h-[50vh]">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/E3OHHrPamRI" allowFullScreen></iframe>
            </div>
        </div>    

        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%] flex justify-center h-[50vh]">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/MLjRqAiLnHo" allowFullScreen></iframe>
            </div>

            <div className="w-[100%] md:w-[50%] flex justify-center h-[50vh]">
                <iframe className="w-[90%] h-[40vh] " src="https://www.youtube.com/embed/BCXdRIROOUo" allowFullScreen></iframe>
            </div>
        </div>   

        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[50%] h-[50vh] flex justify-center mb-4 md:mx-2">
                <img src={SeanKen2} className="object-contain"></img>
            </div>

            <div className="w-[100%] md:w-[50%] h-[50vh] flex justify-center my-4 md:mx-2">
                <img src={ColinDis2} className="object-contain"></img>
            </div>
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
    );

}

export default Gallery;