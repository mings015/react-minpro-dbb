import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BASE_URL, END_POINT } from "@/helper/constants/endpoint";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const LoginCard = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        `${BASE_URL.API}${END_POINT.LOGIN}`,
        formData
      );
      const token = response.data?.token;
      localStorage.setItem("token", token);
      setSuccess(true);
      setError("");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (e) {
      setSuccess(false);
      setError(e.response?.data?.error || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      <p className="py-5 text-3xl font-heading">Welcome !! ✨</p>
      {success && 
        <Alert>
        <Terminal className="w-4 h-4" />
        <AlertTitle>Login Success</AlertTitle>
        <AlertDescription>
        Login Success
        </AlertDescription>
      </Alert>
      }
      {error && (
        <Alert variant="destructive">
          <Terminal className="w-4 h-4" />
          <AlertTitle>Error occurred</AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      )}
      <Tabs defaultValue="account" className="w-[350px] lg:w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Sign In</TabsTrigger>
          <TabsTrigger value="register">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card className="bg-main">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Please enter your credentials to access the application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText"
                onClick={handleLogin}
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Create a New Account, Fill out the form below to register for
                our application.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="registerEmail">Email</Label>
                <Input placeholder="Email" id="registerEmail" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="registerPassword">Password</Label>
                <Input
                  type="password"
                  placeholder="Password"
                  id="registerPassword"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText">
                Register
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginCard;
