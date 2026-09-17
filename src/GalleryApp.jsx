import axios from "axios";
import { useEffect, useState } from "react";

const GalleryApp = () => {
  const [userData, setUserData] = useState([]);
  const [Page, setPage] = useState(1)
  
  useEffect(function (){
    getData();
  },[Page])
  let printUserData = <h3 className="text-gray-300 translate-x-1/2 absolute top-1/2 left-[42%] font-bold text-2xl">Loading...</h3>
  if(userData.length>0){

    printUserData = userData.map((elem, idx) => {
          return (
            <div className="h-50 w-72 p-2" key={idx}>
              <a href={elem.url}>
                <img
                  className="h-full w-full object-cover rounded-2xl ml-4 mt-6 p-2 pb-0"
                  src={elem.download_url}
                  alt=""
                />
              </a>
              <h2 className="text-white pl-8 pb-2">{elem.author}</h2>
            </div>
          );
        })
  }
  async function getData() {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${Page}&limit=15`
    );
    setUserData(response.data);
    
  }
    
  return (
    <div className="bg-black h-screen overflow-auto ">
      

      <div className=" flex gap-3 flex-wrap py-2">
        {printUserData}
        {userData.length>0 && ( 
      <div className="flex justify-center items-center gap-4 w-screen mt-8 " >
        <button className="bg-yellow-500 rounded-2xl text-black px-4 py-2 " onClick={() => { if (Page>1)setPage(Page-1); setUserData([]); } }>Prev</button>
        <h3 className="text-white">Page {Page}</h3>
        <button className="bg-yellow-500 rounded-2xl text-black px-4 py-2 "  onClick={() => {setPage(Page+1); setUserData([])}}>Next</button>
        </div>)}
      </div>
    </div>
  );
};

export default GalleryApp;