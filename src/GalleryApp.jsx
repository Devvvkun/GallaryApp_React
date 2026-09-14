import axios from "axios"
const GalleryApp = () => {
const [userData, setUserData] = useState([])
let printUserData = "User Not Available";
async function getData(){
      const data = await axios .get('https://picsum.photos/v2/list?page=2&limit=100')
}


  
  return (
    <div>
        <button onClick={getData}>Get Data</button>
        console.log(data)
    </div>
  )
}

export default GalleryApp