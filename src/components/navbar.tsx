import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link, useNavigate } from "react-router-dom";

const Navabr = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/test");
  };
  return (
    <header className="bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2 lg:px-6">
        <div className="flex items-center flex-1">
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt="CELPIP Logo"
              className="object-cover mr-2 w-80"
            />
          </Link>
        </div>
        <div className="items-center flex-1 hidden gap-2 md:flex ">
          <p className="text-sm text-[#262161] font-semibold">
            Selected Product:{" "}
          </p>
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-fit">
              <SelectValue placeholder="Click to Select Product" />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="practice-test" className="">
                FREE CELPIP-GENERAL PRACTICE TESTS (STARTER SET)
              </SelectItem>
              <SelectItem value="ls-practice-test" className="">
                FREE CELPIP-GENERAL LS PRACTICE TESTS (STARTER SET)
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-end flex-1">
          <Button
            variant="ghost"
            className="text-white bg-customBlue hover:bg-customBlue/90 hover:text-white"
            aria-label="Sign in"
          >
            <Link to={"/auth"}>
              <span className="transition duration-200">SIGN IN</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navabr;
