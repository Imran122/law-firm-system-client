import React from "react";
import gbFlag from "../../../../../assets/images/gb_flag.png";
import { Tab, Tabs } from "react-bootstrap";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import "./CaseLawDetails.css";
import useAuth from "../../../../../hooks/useAuth";
import useContributeSingleDataDetails from "../../../../../hooks/useContributeSingleDataDetails";

const PublicCaseLawDetailsCardComponent = ({ caseItemContent }) => {
  const { caseDetailsData, setCaseDetailsData } = useAuth();
  const shareUrl = "http://localhost:3000/case-law/details";
  const [contributeDetails, setContributeDetails] =
    useContributeSingleDataDetails();

  return (
    <>
      <div className="col col-12 col-lg-9">
        <div className="row">
          <div className="col col-12 col-lg-11">
            <div className="ja-details-card">
              <h1>{caseDetailsData?.contentTitle}</h1>
              <div className="row mt-4 ja-card-de-auth">
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Case Class</h3>
                  <p>{contributeDetails?.caseClass}</p>
                </div>
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Case Action</h3>
                  <p>{contributeDetails?.caseAction}</p>
                </div>
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Case Citation</h3>
                  <p>{contributeDetails?.caseCitation}</p>
                </div>
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Case Parties</h3>
                  <p>{contributeDetails?.caseParties}</p>
                </div>
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Case Number</h3>
                  <p>{contributeDetails?.caseNumber}</p>
                </div>
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Counsel Name</h3>
                  <p>{contributeDetails?.counselName}</p>
                </div>
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Judgment Date</h3>
                  <p>
                    {new Date(
                      contributeDetails.judgmentDate
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="col col-6 col-lg-3 ja-auth-card">
                  <h3>Country</h3>
                  <p>{contributeDetails?.countryNameList}</p>
                </div>
              </div>

              <div className="mt-4 d-block d-sm-none ja-card-share">
                <EmailShareButton url={""}>
                  <EmailIcon size={32} round />
                </EmailShareButton>
                <FacebookShareButton url={shareUrl}>
                  <FacebookIcon size={32} round />
                </FacebookShareButton>
                <LinkedinShareButton url={shareUrl}>
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                <RedditShareButton url={shareUrl}>
                  <RedditIcon size={32} round />
                </RedditShareButton>
                <TelegramShareButton url={shareUrl}>
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                <TumblrShareButton url={shareUrl}>
                  <TumblrIcon size={32} round />
                </TumblrShareButton>
                <TwitterShareButton url={shareUrl}>
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                <ViberShareButton url={shareUrl}>
                  <ViberIcon size={32} round />
                </ViberShareButton>
                <WhatsappShareButton url={shareUrl}>
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>
              </div>
              <div className="mt-4 cl-overview-desc">
                <p>
                  <strong>Overview: </strong>
                  {contributeDetails?.caseBookOverview}
                </p>
              </div>
              <div className="mt-4 ja-card-desc">
                <div
                  dangerouslySetInnerHTML={{
                    __html: caseDetailsData?.content,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col col-12 col-lg-1">
            <div className="d-none d-lg-block ja-card-share">
              <EmailShareButton url={""}>
                <EmailIcon size={32} round />
              </EmailShareButton>
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <RedditShareButton url={shareUrl}>
                <RedditIcon size={32} round />
              </RedditShareButton>
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon size={32} round />
              </TelegramShareButton>
              <TumblrShareButton url={shareUrl}>
                <TumblrIcon size={32} round />
              </TumblrShareButton>
              <TwitterShareButton url={shareUrl}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <ViberShareButton url={shareUrl}>
                <ViberIcon size={32} round />
              </ViberShareButton>
              <WhatsappShareButton url={shareUrl}>
                <WhatsappIcon size={32} round />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicCaseLawDetailsCardComponent;
