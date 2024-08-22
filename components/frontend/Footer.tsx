import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-4">
      <div className="container mx-auto">
        <div className="xl:flex items-center justify-between">
          <div className="text-muted-foreground text-sm text-center">
            &copy; Studbook. All rights reserved. {currentYear}
          </div>
          <div className="text-muted-foreground text-sm text-center">
            Built by Reynan Decena
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
