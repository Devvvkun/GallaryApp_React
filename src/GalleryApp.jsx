import axios from "axios";
import { useState } from "react";

const GalleryApp = () => {
  const [userData, setUserData] = useState([]);

  async function getData() {
    const response = await axios.get(
      "https://picsum.photos/v2/list?page=2&limit=15"
    );

    setUserData(response.data);
  }

  return (
    <div>
      <button onClick={getData}>Get Data</button>

      <div className="w-full h-screen mx-4 flex gap-x-4 flex-wrap overflow-hidden">
        {userData.map((elem, idx) => {
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
      </div>
    </div>
  );
};

export default GalleryApp;