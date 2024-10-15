import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils"; // Pastikan path impor ini benar
import { Button } from "@/components/ui/button";
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

const LoginPage = () => {
  return (
    <div className="flex flex-col h-screen md:flex-row">
      <div className="flex flex-col items-center justify-center w-full h-full md:w-1/2">
        <GridPattern
          width={40}
          height={40}
          x={-1}
          y={-1}
          strokeDasharray={"10 2"}
          className={cn(
            
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
          )}
        />
        <div className="relative">
          <p className="py-5 text-3xl font-heading">Welcome !! ✨</p>
          <Tabs defaultValue="account" className="w-[350px] lg:w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="account">Sign In</TabsTrigger>
              <TabsTrigger value="password">Sign Up</TabsTrigger>
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
                    <Input placeholder="Email" id="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="Password" id="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white text-text dark:bg-secondaryBlack dark:text-darkText">
                    Login
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="password">
              <Card>
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>
                    Create a New Account, Fill out the form below to register
                    for our application.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="space-y-1">
                    <Label htmlFor="email">Email</Label>
                    <Input placeholder="Email" id="email" />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="password">Password</Label>
                    <Input placeholder="Password" id="password" />
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
      </div>

      <div className="items-center justify-center hidden p-10 bg-main md:flex md:w-1/2">
        <div className="text-white">
          <h2 className="my-4 text-3xl font-heading">
            Sign in with account below to access dashboard
          </h2>
          <div className="my-2 italic">
          <p>email : eve.holt@reqres.in</p>
          <p>password : cityslicka</p>
          </div>
          <p className="my-4 text-xl">
          This DemoApp is fully integrated with the ReqRes API</p>
          
          <Button variant="neutral" className="my-6">
            <a href="https://reqres.in/">Learn more about Reqress API</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
