import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full min-h-[200px] flex flex-col sm:flex-row gap-6 p-4 sm:p-6 items-end relative sm:pl-5"
      style={{ backgroundColor: "#595959" }}
      aria-labelledby="site-footer"
    >
      <h2 id="site-footer" className="sr-only">
        Site footer
      </h2>
      <div className="w-full sm:w-1/2 h-fit flex flex-col gap-1.5 pr-28">
        <p className="text-white text-base font-normal leading-snug">
          © {new Date().getFullYear()} Loopframe
        </p>
        <p className="text-white text-sm font-normal">
          Information provided is intended for informational purposes only, is
          not guaranteed for accuracy and should not be considered legal advice.
        </p>
      </div>
      <div className="w-full sm:w-1/2 flex flex-col gap-4 items-end">
        <div className="absolute top-3 right-3" aria-hidden>
          <Image src="/logo.svg" alt="Loopframe logo" width={250} height={80} priority />
        </div>
        <nav aria-label="Footer links">
          <div className="w-fit flex justify-end items-center gap-6">
            <a href="mailto:info@loopframe.io" className="focus:outline-none focus:ring-2 focus:ring-white/70 rounded">
              <span className="text-white text-lg font-normal cursor-pointer">Contact Us</span>
            </a>
            <div className="w-px h-4 bg-white" aria-hidden></div>
            <Link href="/privacy-policy" className="text-white text-lg font-normal cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70 rounded">
              Privacy Notice
            </Link>
            <div className="w-px h-4 bg-white" aria-hidden></div>
            <Link href={"/terms-of-use"} className="text-white text-lg font-normal cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/70 rounded">
              Terms of Use
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
