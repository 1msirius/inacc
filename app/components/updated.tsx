import React from "react";
import { format } from "date-fns";

const LastUpdated: React.FC = () => {
  const lastUpdated = format(new Date(), "MMM dd, yyyy");
  const capitalizedLastUpdated =
    lastUpdated.charAt(0).toUpperCase() + lastUpdated.slice(1);

  return (
    <span className="italic font-medium">
      Last updated: {capitalizedLastUpdated}
      {/* <span className="dark:text-[#4CAF82] text-[#036938]"></span> */}
    </span>
  );
};

export default LastUpdated;
