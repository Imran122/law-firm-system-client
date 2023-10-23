import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import "./Membership.css";
import useAuth from "../../../../../hooks/useAuth";
import usePackageList from "../../../../../hooks/usePackageList";

const MembershipUpgradeComponent = () => {
  const { user, setUser, upgrageMembershipPlan, setUpgrageMembershipPlan } =
    useAuth();

  const navigate = useNavigate();
  /*   const upgradeMembership = (id) => {
    setUpgrageMembershipPlan({ id: id });
    navigate("/dashboard/payment", { replace: true });
  }; */
  const [packageListData, setPackageListData] = usePackageList();
  return (
    <>
      <div className="row g-0">
        <div className="col col-12 col-lg-10">
          <div className="not-dashboard-home-left-col">
            <div className="row">
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
                                <Link
                                  to={`/dashboard/payment/${data._id}`}
                                  className="btn-get-started"
                                >
                                  Get started
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )
                );
              })}

              {/*  <div className="col col-12 col-lg-4 mb-3">
                <div className="table-responsive upgrade-tab2">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <td>Platinum</td>
                        <td className="upgrade-pkg2">
                          $30 <span>/Monthly</span>
                        </td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={2}>
                          <TiTick className="upgrade-tick" /> All COuntry
                          Content
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <TiTick className="upgrade-tick" /> Feature 2
                        </td>
                      </tr>
                    
                      <tr>
                        <td colSpan={2}>
                          <button
                            onClick={() => upgradeMembership("platinum")}
                            className="btn-get-started2"
                          >
                            Get started
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        <div className="col col-12 col-lg-4"></div>
      </div>
    </>
  );
};

export default MembershipUpgradeComponent;
