import '../index.css';
import CustomHeader from '../Header.jsx';

function MerchPage() {

    return (
        <>
            <p className="text-white text-4xl text-center py-4">Sorry!</p>
            <p className="text-white text-2xl text-center">The Merchandise section is not completed/active (and there is currently no timetable to get it running).
                Please enjoy these funny photos of the band instead.
            </p>
            <div className="flex max-h-[75vh] w-[70%] mx-auto mt-8 mb-8">
                <img src="BandPhoto2.jpg" alt="The Band at Halloween"className="object-contain w-full"></img>
            </div>
            <div className="flex max-h-[75vh] w-[70%] mx-auto mt-8 mb-8">
                <img src="DitAtWar.jpg" alt="Dit at War"className="object-contain w-full"></img>
            </div>
            <div className="flex max-h-[75vh] w-[70%] mx-auto mt-8 mb-8">
                <img src="DitSnap.jpg" alt="Dit Pic"className="object-contain w-full"></img>
            </div>
        </>
    )

}

export default MerchPage;