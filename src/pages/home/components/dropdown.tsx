import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { routes } from "@/data/route"
import { Link } from "react-router-dom"

const DropDown = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <Button size={"lg"} className="px-20 py-2 text-lg text-white bg-customBlue hover:bg-customBlue/90">
              START
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white rounded-none bg-customBlue">
           {routes.map((route, index) => (
            <>
            <DropdownMenuItem key={index} className="w-56 focus:bg-customDarkBlue focus:text-white">
              <Link to={route.path} className="text-center">  {route.label} </Link>
            </DropdownMenuItem>
         {index != routes.length - 1 &&  <DropdownMenuSeparator />}
            </>
           ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropDown