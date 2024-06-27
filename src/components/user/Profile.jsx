import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Profile = () => {
  const { user } = useContext(AppContext);
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <div className="container text-center my-5">
            <h1>Profile</h1>
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{user?.name}</h5>
                    <p className="card-text">{user?.email}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
