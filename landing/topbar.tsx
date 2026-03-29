import RenderIf from "@/components/common/render-if";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Topbar = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  if (!isLoggedIn)
    return (
      <div
        className="fixed z-40 w-full h-16 top-0 left-0 flex justify-end items-center px-4 sm:px-8 lg:px-10 gap-3"
        role="navigation"
        aria-label="Topbar"
      >
        <RenderIf condition={!isLoggedIn}>
          <Link href="/login" aria-label="Login">
            <Button>Login</Button>
          </Link>
          <Link href="/register" aria-label="Register" className="text-brandBlue text-sm cursor-pointer underline underline-offset-2">
            or register
          </Link>
        </RenderIf>
      </div>
    );
  return null;
};
export default Topbar;
