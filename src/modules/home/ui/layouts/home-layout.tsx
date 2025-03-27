import { HomeNavbar } from "../components/home-navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      <div className="w-full">
        <HomeNavbar />
        <div className="flex min-h-screen pt-[4rem]">{children}</div>
      </div>
    </div>
  );
};
