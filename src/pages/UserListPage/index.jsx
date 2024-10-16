import Footer from "@/components/Footer";
import Header from "@/components/Header";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import BreadCrumb from "./components/BreadCrumb";
import GridPattern from "./components/GridPattern";
import Paginations from "./components/Paginations";
import { Link } from "react-router-dom";

const UserListPage = () => {
  return (
    <div>
      <Header />
      <div className="relative">
        <GridPattern />
        <div className="container flex flex-col gap-5 mx-auto">
          <div className="flex flex-col gap-5 px-5 mt-10 sm:px-0">
            <BreadCrumb />
            <div className="flex items-center justify-end gap-5 ">
              <Search />
              <Input
                className="w-[200px] relative"
                type="search"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-wrap justify-center grid-cols-3 gap-20">
              <Card className="relative bg-bg w-[350px]">
                <CardHeader>
                  <CardTitle>
                    <div className="container mb-5 bg-black border-2 aspect-square border-border rounded-base shadow-light">
                      <img
                        className="w-full aspect-square"
                        src="https://reqres.in/img/faces/7-image.jpg"
                        alt="foto"
                      />
                    </div>
                  </CardTitle>
                  <CardTitle>Michael Lawson</CardTitle>
                  <CardDescription>First Name : Michael</CardDescription>
                  <CardDescription>Last Name : Lawson</CardDescription>
                  <CardDescription>
                    {" "}
                    Email : michael.lawson@reqres.in
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Link to="/user-detail/:id">
                        <Button>Details</Button>
                    </Link>
                </CardFooter>
                
              </Card>
              <Card className="relative bg-bg w-[350px]">
                <CardHeader>
                  <CardTitle>
                    <div className="container mb-5 bg-black border-2 aspect-square border-border rounded-base shadow-light">
                      <img
                        className="w-full aspect-square"
                        src="https://reqres.in/img/faces/7-image.jpg"
                        alt="foto"
                      />
                    </div>
                  </CardTitle>
                  <CardTitle>Michael Lawson</CardTitle>
                  <CardDescription>First Name : Michael</CardDescription>
                  <CardDescription>Last Name : Lawson</CardDescription>
                  <CardDescription>
                    {" "}
                    Email : michael.lawson@reqres.in
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative bg-bg w-[350px]">
                <CardHeader>
                  <CardTitle>
                    <div className="container mb-5 bg-black border-2 aspect-square border-border rounded-base shadow-light">
                      <img
                        className="w-full aspect-square"
                        src="https://reqres.in/img/faces/7-image.jpg"
                        alt="foto"
                      />
                    </div>
                  </CardTitle>
                  <CardTitle>Michael Lawson</CardTitle>
                  <CardDescription>First Name : Michael</CardDescription>
                  <CardDescription>Last Name : Lawson</CardDescription>
                  <CardDescription>
                    {" "}
                    Email : michael.lawson@reqres.in
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative bg-bg w-[350px]">
                <CardHeader>
                  <CardTitle>
                    <div className="container mb-5 bg-black border-2 aspect-square border-border rounded-base shadow-light">
                      <img
                        className="w-full aspect-square"
                        src="https://reqres.in/img/faces/7-image.jpg"
                        alt="foto"
                      />
                    </div>
                  </CardTitle>
                  <CardTitle>Michael Lawson</CardTitle>
                  <CardDescription>First Name : Michael</CardDescription>
                  <CardDescription>Last Name : Lawson</CardDescription>
                  <CardDescription>
                    {" "}
                    Email : michael.lawson@reqres.in
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative bg-bg w-[350px]">
                <CardHeader>
                  <CardTitle>
                    <div className="container mb-5 bg-black border-2 aspect-square border-border rounded-base shadow-light">
                      <img
                        className="w-full aspect-square"
                        src="https://reqres.in/img/faces/7-image.jpg"
                        alt="foto"
                      />
                    </div>
                  </CardTitle>
                  <CardTitle>Michael Lawson</CardTitle>
                  <CardDescription>First Name : Michael</CardDescription>
                  <CardDescription>Last Name : Lawson</CardDescription>
                  <CardDescription>
                    {" "}
                    Email : michael.lawson@reqres.in
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="relative bg-bg w-[350px]">
                <CardHeader>
                  <CardTitle>
                    <div className="container mb-5 bg-black border-2 aspect-square border-border rounded-base shadow-light">
                      <img
                        className="w-full aspect-square"
                        src="https://reqres.in/img/faces/7-image.jpg"
                        alt="foto"
                      />
                    </div>
                  </CardTitle>
                  <CardTitle>Michael Lawson</CardTitle>
                  <CardDescription>First Name : Michael</CardDescription>
                  <CardDescription>Last Name : Lawson</CardDescription>
                  <CardDescription>
                    {" "}
                    Email : michael.lawson@reqres.in
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <Paginations />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserListPage;
