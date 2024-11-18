import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import DropDown from "./components/dropdown";

export default function Test() {
  return (
    <section className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <Card className="max-w-4xl mx-auto overflow-hidden bg-white border border-gray-300 rounded-none shadow">
        <CardHeader className="px-4 py-2 font-normal text-gray-600 bg-gray-200 border-b border-gray-300">
          Practice Test A
        </CardHeader>
        <CardContent className="min-h-[80vh]">
        <div className="p-6 space-y-4 text-sm text-gray-600">
          <ol className="mb-16 space-y-4 list-decimal list-inside">
            <li>
              You should give yourself 2 hours and 39 minutes to complete
              CELPIP-General Practice Test A. Press Start and select Complete
              Test from the drop-down menu to do the whole test, or click on one
              of the individual tests underneath it to try one component.
            </li>
            <li>
              Once you have completed the test, you can consult the{" "}
              <span className="text-customBlue">
                Performance Standards for Writing
              </span>{" "}
              and{" "}
              <span className="text-customBlue">
                Performance Standards for Speaking
              </span>{" "}
              to understand how your responses would be evaluated by CELPIP
              Raters. Please be sure to save your Writing responses and record
              your Speaking responses so you can review them later using the
              Performance Standards.
            </li>
            <li>
              You will need a headset or speakers for the Listening and Speaking
              components of the test. The practice test will not record your
              Speaking responses. If you wish to record your Speaking responses,
              we advise you to set up your recording device (cellphone, digital
              recorder, etc.) prior to starting the speaking section. For
              optimal performance, your computer should have a minimum
              resolution of 1024 x 768. Paper and pencils will be provided at
              the offical test for note-taking, so before you begin this sample
              test make sure that you have paper and a pen or pencil, since you
              may want to take notes.
            </li>
          </ol>
          <Separator />
          <div className="flex justify-center">
          <DropDown />
          </div>
           
          <Separator />

          <div
            className="relative px-4 py-3 text-sm text-gray-600 border rounded bg-customGray border-customBlue"
            role="alert"
          >
            <span className="p-1 px-2 text-white bg-customBlue rounded-2xl">
              NOTE
            </span>
            <span className="block sm:inline">
              {" "}
              In response to ongoing research and development, changes may
              occasionally be made to the CELPIP Test. There may be short
              periods of time when study materials do not exactly match the
              current official test format, and content may be updated to match
              changes to the CELPIP Test without prior notice. Check the CELPIP
              website for any updates to the CELPIP Test: <a href="https://www.celpip.ca" target="_blank" className="text-customBlue"> https://www.celpip.ca </a>.
            </span>
          </div>
        </div>
        </CardContent>
      <CardFooter className="h-8 border-t border-gray-300 bg-customGray">

      </CardFooter>
      </Card>
    </section>
  );
}
