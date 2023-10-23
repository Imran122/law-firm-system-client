import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import "./Packages.css";
import usePackageList from "../../../../../hooks/usePackageList";

const SuperAdminPackagesComponent = () => {
  const [packageListData, setPackageListData] = usePackageList();
  const navigate = useNavigate();
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-10">
          <div className="not-dashboard-home-left-col">
            <div className="row mt-2">
              <div className="col col-6 col-lg-3 offset-lg-9">
                <Link to={"/dashboard/super-admin-add-package"}>
                  <button className="btn-get-started2">Add Package</button>
                </Link>
              </div>
            </div>
            <div className="row mt-4">
              {packageListData.map((data) => {
                return (
                  data.packageType === "fixed-package" && (
                    <div key={data._id} className="col col-12 col-lg-4 mb-3">
                      <div className="table-responsive upgrade-tab1">
                        <table className="table table-borderless">
                          <thead>
                            <tr>
                              <td>{data.packageName}</td>
                              <td className="upgrade-pkg">
                                ${data.packagesPrice} <span>/Monthly</span>
                              </td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td colSpan={2}>
                                <TiTick className="upgrade-tick" /> One country
                                Content
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <ImCross className="upgrade-cross" /> Feature 2
                              </td>
                            </tr>
                            <tr>
                              <td colSpan={2}>
                                <button
                                  onClick={() => {
                                    navigate(
                                      `/dashboard/super-admin-edit-package/${data._id}`,
                                      {
                                        replace: true,
                                      }
                                    );
                                  }}
                                  className="btn-get-started"
                                >
                                  Edit Package
                                </button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </div>

        <div className="col col-12 col-lg-4"></div>
      </div>
    </>
  );
};

export default SuperAdminPackagesComponent;
