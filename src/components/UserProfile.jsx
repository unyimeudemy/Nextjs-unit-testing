import React from "react";

export default function UserProfile({
  username,
  displayName,
  email,
  isEmailVerified,
}) {
  return (
    <div>
      <div>
        Display name:{" "}
        {displayName.length > 30 ? (
          <span data-testid="display-name">
            {" "}
            {displayName.slice(0, 25).concat("...")}
          </span>
        ) : (
          <span data-testid="display-name"> {displayName}</span>
        )}
      </div>
      <div>Username: {username}</div>
      <div>Email: {email}</div>
      <div>
        Verified:{" "}
        {isEmailVerified ? (
          <span>Email verified</span>
        ) : (
          <span>Email not verified</span>
        )}
      </div>
    </div>
  );
}
