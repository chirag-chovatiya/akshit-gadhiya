import React, { useState } from "react";

const DashboardBreadcrumb = ({ pageName, title = false, totalData = 0 }) => {
  const [pagePath, setPagePath] = useState(pageName.split("/"));

  const linkMaker = (endElement) => {
    const endIndex = pagePath.indexOf(endElement);
    return pagePath.slice(0, endIndex + 1).join("/").toLowerCase();
  };

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white capitalize">
        {title
          ? title
          : (pagePath.length > 1 ? pagePath[pagePath.length - 2] : "") +
            " " +
            pagePath[pagePath.length - 1]}
        {totalData > 0 && (
          <span className="ml-2 font-semibold text-black dark:text-white">
            = {totalData}
          </span>
        )}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <a className="font-medium" href="/admin">
              <i className="fa-solid fa-house"></i> /
            </a>
          </li>
          {pagePath.map((path, index) => (
            <li key={index} className="font-medium">
              <a href={`/admin/${linkMaker(path)}`}>
                <span className="text-custom-blue dark:text-white capitalize">
                  {path}
                </span>
              </a>
              {index < pagePath.length - 1 ? " / " : ""}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default DashboardBreadcrumb;
