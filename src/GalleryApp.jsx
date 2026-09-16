import axios from "axios";
import { useEffect, useState } from "react";

const GalleryApp = () => {
  const [userData, setUserData] = useState([]);
  useEffect(function (){
    getData();
  },[])
  const printUserData = "User Not Found"
  if(userData.length>0){
    printUserData = {userData.map((elem, idx) => {
          return (
            <div className="h-[25%] w-[17%] rounded-sm p-0 m-0" key={idx}>
              <a href={elem.url}>
                <img
                  className="h-full w-full object-cover"
                  src={elem.download_url}
                  alt=""
                />
              </a>
            </div>
          );
        })}
  }
  async function getData() {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15"
    );
    setUserData(response.data);
  }
    
  return (
    <div className="bg-black h-screen overflow-auto ">
      

      <div className=" flex gap-4 flex-wrap py-2">
        {printUserData}
      </div>
    </div>
  );
};

export default GalleryApp;