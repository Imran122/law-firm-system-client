import { React} from "react";
import { Link } from "react-router-dom";
import TrashComponent from "./TrashComponent";
const TrashMainComponent = () => {

  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-10">
          <div className="users-list-div mt-3">
            {/* booking request card */}
              <div className="users-button">
                <Link to={"/dashboard/trash"} className="active">
                  Trash
                </Link>

                <TrashComponent/>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default TrashMainComponent;
