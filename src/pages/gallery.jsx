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

        </>
    );

}

export default Gallery;