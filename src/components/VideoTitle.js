const VideoTitle=({title,overview})=>{
    return(
     <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-5xl font-bold"> {title}</h1>
        <p className="py-6 text-sm w-1/4">{overview}</p>
        <div className="">
            <button className="bg-white text-black p-4 px-12 hover:bg-opacity-80 rounded-lg text-xl"> ▶️ Play</button>
            <button className="bg-gray-400  text-white p-4 mx-2 hover:bg-opacity-80 px-12 bg-opacity-50 rounded-lg text-xl">More Info</button>
        </div>
    </div>
    )
}
export default VideoTitle;