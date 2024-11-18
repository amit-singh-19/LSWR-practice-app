import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAuthMode = () => setIsSignUp(!isSignUp);

  return (
    <section className="flex flex-col items-center justify-center h-screen gap-2">
      <Card className="w-[500px] max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            {isSignUp ? "Sign Up" : "Sign In"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs text-gray-500" htmlFor="email">
              Email or mobile phone number
            </Label>
            <Input id="email" type="text" placeholder="" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label className="text-xs text-gray-500" htmlFor="password">
                {isSignUp ? "Create password" : "Your password"}
              </Label>
              <Button
                variant="ghost"
                size="sm"
                className="h-auto p-0 text-sm text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <>
                    <EyeOffIcon className="w-4 h-4 mr-1" />
                    Hide
                  </>
                ) : (
                  <>
                    <EyeIcon className="w-4 h-4 mr-1" />
                    Show
                  </>
                )}
              </Button>
            </div>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder=""
            />
          </div>
          {isSignUp && (
            <div className="space-y-2">
              <Label
                className="text-xs text-gray-500"
                htmlFor="confirmPassword"
              >
                Confirm password
              </Label>
              <Input id="confirmPassword" type="password" placeholder="" />
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-col items-center gap-2">
          <Button className="w-full">{isSignUp ? "Sign Up" : "Sign In"}</Button>
          <p className="text-xs text-center text-gray-500">
            By continuing, you agree to the{" "}
            <Link to="#" className="underline">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link to="#" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </CardFooter>
      </Card>
      <div className="w-[400px]">
        {!isSignUp && (
          <div className="w-full mb-4 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">
                  New to our community
                </span>
              </div>
            </div>
          </div>
        )}
        <Button variant="outline" className="w-full" onClick={toggleAuthMode}>
          {isSignUp
            ? "Already have an account? Sign In"
            : "New to our community? Sign Up"}
        </Button>
      </div>
    </section>
  );
}
