import { Button } from "@/components/ui/button";
import logo from "../../public/logo-vertical.png";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section>
      <div className="flex flex-col items-center max-w-5xl gap-8 p-8 mx-auto my-8 bg-white shadow-sm">
        <div>
          <img src={logo} alt="Logo" className="object-cover" />
        </div>
        <div className="space-y-4 text-center">
          <h2 className="text-xl font-medium">
            Free CELPIP-General Practice Tests (Starter Set)
          </h2>
          <p className="text-sm">
            This practice test package contains two complete CELPIP-General
            Tests. The package also includes answer keys for the Listening and
            Reading Tests and Performance Standards showing the key factors that
            CELPIP Raters consider when they assess Writing and Speaking
            responses.
          </p>
          <p className="text-sm">
            Click{" "}
            <span className="cursor-pointer text-customBlue hover:underline">
              here
            </span>{" "}
            to complete a survey on this product. We appreciate your feedback!
          </p>
        </div>
        <div className="flex gap-2">
          <Button> <Link to={"/test"}>
            Start
          </Link>
          </Button>
          <Button variant={"outline"}>Your Score</Button>
        </div>
        <div className="space-y-4 text-sm text-center text-customBlue">
          <p> Test Format</p>
          <p> Performance Standards for the CELPIP-General Writing Test</p>
          <p> Performance Standards for the CELPIP-General Speaking Test</p>
          <p>Practice Test A - Listening Transcripts </p>
          <p> Practice Test B - Listening Transcripts Study</p>
          <p> Materials Bookstore Score Comparison Chart</p>
        </div>
      </div>
    </section>
  );
}
