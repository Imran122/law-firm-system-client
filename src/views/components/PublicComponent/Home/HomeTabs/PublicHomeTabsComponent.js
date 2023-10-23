import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import {VscLaw} from "react-icons/vsc";
import {ImBook} from "react-icons/im";
import {GiBookshelf} from "react-icons/gi";
import "./HomeTabs.css";

const PublicHomeTabsComponent = () => {

  return (
    <>
      <div className="container mt-5">
        <div className="row">
            <div className="col col-12 col-lg-12">
            <Tabs
                defaultActiveKey="practice_areas"
                id="uncontrolled-tab-example"
                className="mb-3 lm_home_tabs"
              >
                <Tab eventKey="practice_areas" title="Practice areas">
                  <div className="row lm_home_tabs_content">
                      <div className="col col-12 col-lg-10">
                          <p>On a sunny Saturday afternoon in Silicon Valley, two proud fathers stood on the sidelines of a soccer field. They were watching their young daughters play together, and it was only a matter of time before they struck up a conversation about work. The taller of the two men was Danny Shader, a serial entrepreneur who had spent time at Netscape.</p>
                      </div>
                      <div className="col col-2 col-lg-2 d-none d-xl-block">
                        <VscLaw/>
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="sectors" title="Sectors">
                    <div className="row lm_home_tabs_content">
                        <div className="col col-12 col-lg-10">
                            <p>On a sunny Saturday afternoon in Silicon Valley, two proud fathers stood on the sidelines of a soccer field. They were watching their young daughters play together, and it was only a matter of time before they struck up a conversation about work. The taller of the two men was Danny Shader, a serial entrepreneur who had spent time at Netscape.</p>
                        </div>
                        <div className="col col-2 col-lg-2 d-none d-xl-block">
                            <GiBookshelf/>
                        </div>
                    </div>
                </Tab>
                <Tab eventKey="resource" title="Resources">
                    <div className="row lm_home_tabs_content">
                        <div className="col col-12 col-lg-10">
                            <p>On a sunny Saturday afternoon in Silicon Valley, two proud fathers stood on the sidelines of a soccer field. They were watching their young daughters play together, and it was only a matter of time before they struck up a conversation about work. The taller of the two men was Danny Shader, a serial entrepreneur who had spent time at Netscape.</p>
                        </div>
                        <div className="col col-2 col-lg-2 d-none d-xl-block">
                            <ImBook/>
                        </div>
                    </div>
                </Tab>
              </Tabs>
            </div>
        </div>
      </div>
    </>
  );
};

export default PublicHomeTabsComponent;