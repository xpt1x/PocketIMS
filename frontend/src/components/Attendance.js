import React from "react";

export default function Attendance({ attendance }) {
  return (
    <>
      {attendance ? (
        <h2>Attendance fetched</h2>
      ) : (
        <h2>Waiting for attendance</h2>
      )}
    </>
  );
}
