import { ReactElement } from "react";
import Footer from "../../footer";
import Navbar from "../../navbar/auth";

const Dashboard = ({ children }: { children: ReactElement }) => {
  return (
    <div className="dashboard bg-background">
      <Navbar />
      <div className="inner p-28 px-10 min-h-[100svh]">{children}</div>
      <Footer />
    </div>
  );
};

export default Dashboard;
