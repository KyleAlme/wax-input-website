import '../index.css';
import React, { useState } from 'react';

function changePhotoIndex(index, direction, length) {
    return ((index + direction + length) % length)
}

function HomePage() {
    const [photoIndex, setPhotoIndex] = useState(0);

    const PhotoList = ["/BandPhoto2.jpg", "/BandPhoto3.jpg", "/BandPhoto4.jpg"];

    const nextPhotoIndex = () => {
        setPhotoIndex(prev => changePhotoIndex(prev, 1, PhotoList.length));
    };

    const prevPhotoIndex = () => {
        setPhotoIndex(prev => changePhotoIndex(prev, -1, PhotoList.length));
    };

    return (
        <div class="flex justify-center">
            <div class="flex relative m-auto">
                <button class="text-white" onClick={() => prevPhotoIndex()}>Prev</button>
            </div>
            <div class="place-items-center w-5/6">
                <div class="">
                    <img src={PhotoList[photoIndex]} class="object-contain"></img>
                </div>
            </div>
            <div class="flex relative m-auto">
                <button class="text-white" onClick={() => nextPhotoIndex()}>Next</button>
            </div>
        </div>
    );

}

export default HomePage;