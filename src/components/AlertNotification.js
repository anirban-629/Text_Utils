import React from "react";

export default function AlertNotification(props) {
  return (
    props.alert && (
      <div>
        <div className={`alert alert-${props.alert.color}`} role="alert">
          <strong>{props.alert.message}</strong>
        </div>
      </div>
    )
  );
}
  