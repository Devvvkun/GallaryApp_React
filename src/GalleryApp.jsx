import axios from "axios";
import { useEffect, useState } from "react";

const GalleryApp = () => {
  const [userData, setUserData] = useState([]);
  const [Page, setPage] = useState(1)
  {console.log(Page);}
  
  useEffect(function (){
    getData();
  },[Page])
  let printUserData = "User Not Found"
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
      <div className="flex justify-center items-center gap-4 w-screen mt-8">
        <button className="bg-yellow-500 rounded-2xl text-black px-4 py-2 " onClick={() => { if (Page>1)setPage(Page-1)}}>Prev</button>
        <button className="bg-yellow-500 rounded-2xl text-black px-4 py-2 "  onClick={() => {setPage(Page+1)}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default GalleryApp;