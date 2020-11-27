import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";
const Profile = () => {
  const { logout, user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div id="profile">
        <img id="profileimg" src={user.picture} alt={user.name} />
        <h2 id="title">{user.name}</h2>
        <p id="email">{user.email}</p>
        <button
          id="button"
          onClick={() => logout({ returnTo: window.location.origin })}
        >
          Log Out
        </button>
      </div>
    )
  );
};

export default Profile;
