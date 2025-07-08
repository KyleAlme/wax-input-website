import '../index.css';

function Gallery() {

    return (
        <>
        
        <div className="w-full flex h-[50vh]">
            <div className="w-[50%] flex justify-center my-auto">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/6jb15K2gPgE"></iframe>
            </div>

            <div className="w-[50%] flex justify-center my-auto">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/GfJ2y4k6rbc"></iframe>
            </div>
        </div>    

        <div className="w-full flex h-[50vh]">
            <div className="w-[50%] flex justify-center my-auto">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/kilR67JLc3Y"></iframe>
            </div>

            <div className="w-[50%] flex justify-center my-auto">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/E3OHHrPamRI"></iframe>
            </div>
        </div>    

        <div className="w-full flex h-[50vh]">
            <div className="w-[50%] flex justify-center my-auto">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/MLjRqAiLnHo"></iframe>
            </div>

            <div className="w-[50%] flex justify-center my-auto">
                <iframe className="w-[90%] h-[40vh]" src="https://www.youtube.com/embed/BCXdRIROOUo"></iframe>
            </div>
        </div>   

        <div className="w-full flex h-[50vh]">
            <div className="w-[50%] h-[50vh] flex justify-center my-auto mx-2">
                <img src="SeanKen2.jpg" className="object-contain"></img>
            </div>

            <div className="w-[50%] h-[50vh] flex justify-center my-auto mx-2">
                <img src="ColinDis2.jpg" className="object-contain"></img>
            </div>
        </div>  

        <div className="w-full flex h-[50vh]">
            <div className="w-[50%] h-[50vh] flex justify-center my-4 mx-2">
                <img src="ColinDis3.jpg" className="object-contain"></img>
            </div>

            <div className="w-[50%] h-[50vh] flex justify-center my-4 mx-2">
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