import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Logo from "./Logo";
import Navbar from "./Navbar";

const MobileView = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Sheet>
        <SheetTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </SheetTrigger>
        <SheetContent className="bg-slate-800 text-white">
          <SheetHeader>
            <SheetTitle className="mx-auto">
              <Logo />
            </SheetTitle>
            <SheetDescription>
              <Navbar className="mt-4 flex flex-col justify-between items-center gap-4" />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileView;
