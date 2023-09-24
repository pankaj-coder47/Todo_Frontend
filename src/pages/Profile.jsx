import { useContext } from "react"
import { Content } from "../main"
import Loader from "../components/Loader";

const Profile = () => {
  const { loading,User } = useContext(Content);
  

  return (
    loading ? <Loader/> :<div className="container bg-dark profile d-flex py-4 px-5 my-4">
      <div className="userImage" placeholder="">
      </div>
      <div className="px-5">
      <h3>{User?.name} </h3> {/* user?.name it means if true than excuted name else not */}
      <p>{User?.email} </p>
      </div>
    </div>
  )
}

export default Profile
