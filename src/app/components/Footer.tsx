import YoutubeFillIcon from "remixicon-react/YoutubeFillIcon";
import LinkedinFillIcon from "remixicon-react/LinkedinFillIcon";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bottom-0 right-0 w-full">
      <section className="flex flex-1 w-full border rounded-b-xl border-lines-gunmetal">
        <p className="pl-4 max-w-[150px] w-full flex items-center">
          find me in:
        </p>
        <div className="flex w-full justify-between pl-5">
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/christiantongcruz/"
              target="_blank"
              className="p-2 border border-lines-gunmetal">
              <LinkedinFillIcon />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC8P1SDtIbrJwC3pyjmGIg3A"
              target="_blank"
              className="p-2 border border-lines-gunmetal">
              <YoutubeFillIcon />
            </Link>
          </div>
          <Link
            href="https://github.com/christian-tong"
            target="_blank"
            className="flex gap-2 border-l border-lines-gunmetal pr-5 pl-4 items-center">
            <p className="max-sm:hidden">@christian-tong</p>
            <GithubFillIcon />
          </Link>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
