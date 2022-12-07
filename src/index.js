import React from "react";
import "@compiled/react";

export const Component = ({ moarPadding }) => {
  return (
    <div
      css={{
        padding: moarPadding ? "6px 18px 6px 32px" : "6px 18px",
      }}
    />
  );
};
