import AuthTabs from "@/components/auth/AuthTabs";
import Logo from "@/components/frontend/Logo";
import React from "react";

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <Logo />
      <AuthTabs />
    </div>
  );
};

export default AuthPage;
