import React from "react";
import gbFlag from "../../../../../assets/images/gb_flag.png";
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
import useContributeSingleDataDetails from "../../../../../hooks/useContributeSingleDataDetails";

const PublicInsightDetailsCardComponent = ({ articleItemContent }) => {
  const shareUrl = "https://law-firm-client-render.onrender.com/insights/details";
  const [contributeDetails, setContributeDetails] =
    useContributeSingleDataDetails();

  return (
    <>
      <div className="col col-12 col-lg-9">
        <div className="row">
          <div className="col col-12 col-lg-11">
            <div className="ja-details-card">
              <h1>{articleItemContent?.contentTitle}</h1>
              <div className="row mt-4 ja-card-de-auth">
                <div className="col col-4 col-lg-2 ja-auth-card">
                  <h3>Author</h3>
                  <p>{contributeDetails?.authorName}</p>
                </div>
                <div className="col col-4 col-lg-2 ja-auth-card">
                  <h3>Insight Categorey</h3>
                  <p>{contributeDetails?.insightCategorey}</p>
                </div>
                <div className="col col-4 col-lg-2 ja-auth-card">
                  <h3>Published</h3>
                  <p>
                    {new Date(contributeDetails.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="col col-4 col-lg-2 ja-auth-card">
                  <h3>Review Date</h3>
                  <p>
                    {new Date(
                      contributeDetails.reviewDate
                    ).toLocaleDateString()}
                  </p>
                </div>
                <div className="col col-4 col-lg-2 ja-auth-card">
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

              <div className="mt-4 ja-card-desc">
                <div
                  dangerouslySetInnerHTML={{
                    __html: articleItemContent?.content,
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

export default PublicInsightDetailsCardComponent;
