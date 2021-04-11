import React from "react";

export default function TeamMember(props) {
  const { info } = props;

  if (!info) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="teamMember">
      <h2>{info.name}</h2>
      <p>Email: {info.email}</p>
      <p>Role: {info.role}</p>
    </div>
  );
}
