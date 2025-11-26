import React from "react";

function PageLayout({ header, footer, children }) {
  return (
    <div>
      <header>
        {header}
      </header>

      <main>
        {children}
        {footer}
      </main>
    </div>
  );
}

export default PageLayout;
