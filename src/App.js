import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import AuthActivation from "./views/pages/AuthActivation/AuthActivation";
import Dashboard from "./views/pages/Dashboard/Dashboard";
import Login from "./views/pages/Login/Login";
import Signup from "./views/pages/Signup/Signup";
import PrivateRoute from "./routes/PrivateRoute";
import PublicHomePage from "./views/pages/PublicPages/Home/PublicHomePage";
import PublicBooks from "./views/pages/PublicPages/Books/PublicBooks";
import PublicJournalArticle from "./views/pages/PublicPages/JournalArticle/PublicJournalArticle";
import PublicLaws from "./views/pages/PublicPages/Laws/PublicLaws";
import PublicCaseLaw from "./views/pages/PublicPages/CaseLaw/PublicCaseLaw";
import PublicInsights from "./views/pages/PublicPages/Insights/PublicInsights";
import PublicSubArea from "./views/pages/PublicPages/SubjectArea/PublicSubArea";
import Auth0Authorization from "./views/pages/Auth0Authorization/Auth0Authorization";
import MemberCustomPaymentComponent from "./views/components/Dashboard/member/MemberCustomPayment/MemberCustomPaymentComponent";
import MyCSubAreaInfoComponent from "./views/components/Dashboard/contribute/MyContribution/MyCSubAreaComponent/MyCSubAreaInfoComponent";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicHomePage />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/books/*"
            element={
              <PrivateRoute>
                <PublicBooks />
              </PrivateRoute>
            }
          />
          <Route
            path="/journal-article/*"
            element={
              <PrivateRoute>
                <PublicJournalArticle />
              </PrivateRoute>
            }
          />
          <Route
            path="/laws/*"
            element={
              <PrivateRoute>
                <PublicLaws />
              </PrivateRoute>
            }
          />
          <Route
            path="/case-law/*"
            element={
              <PrivateRoute>
                <PublicCaseLaw />
              </PrivateRoute>
            }
          />
          <Route
            path="/insights/*"
            element={
              <PrivateRoute>
                <PublicInsights />
              </PrivateRoute>
            }
          />
          <Route
            path="/subject-area/*"
            element={
              <PrivateRoute>
                <PublicSubArea />
              </PrivateRoute>
            }
          />
          <Route path="/auth0authorization" element={<Auth0Authorization />} />

          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/custom-package-payment/:_id"
            element={
              <PrivateRoute>
                <MemberCustomPaymentComponent />
              </PrivateRoute>
            }
          />
          <Route path="/auth/activate/:id" element={<AuthActivation />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
