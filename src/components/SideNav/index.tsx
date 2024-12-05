import { useNavigate } from "react-router";
import "./index.css";

export const SideNav = () => {
  const navigate = useNavigate();

  return (
    <div className="side-nav">
      <div onClick={() => navigate(`/`)} className="side-nav-item">
        Home
      </div>
      <div onClick={() => navigate(`/about`)} className="side-nav-item">
        About
      </div>
      <div onClick={() => navigate(`/contacts`)} className="side-nav-item">
        Contacts
      </div>
    </div>
  );
};
