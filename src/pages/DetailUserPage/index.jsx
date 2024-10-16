import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GridPattern from "../UserListPage/components/GridPattern";
import BreadCrumb from "../UserListPage/components/BreadCrumb";

import CardComment from "./components/CardComment";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DetailUserPage = () => {
  return (
    <>
      <Header />
      <div className="relative">
        <GridPattern />
        <div className="container flex flex-col gap-5 mx-auto">
          <div className="flex flex-col gap-5 px-5 mt-10 sm:px-0">
            <BreadCrumb />
            <div>
              <div className="flex flex-col gap-10">
                <div className="flex flex-wrap w-full gap-5 sm:flex-nowrap">
                  <img
                    className="relative w-full border-2 rounded-base sm:w-1/2 aspect-square border-border shadow-light"
                    src="https://reqres.in/img/faces/7-image.jpg"
                    alt="foto"
                  />
                  <div className="flex flex-col justify-between w-full gap-5 sm:w-1/2">
                    <div className="flex flex-col gap-5">
                      <h1 className="text-4xl lg:text-5xl font-heading">
                        Michael Lawson
                      </h1>
                      <h2>ID : 7</h2>
                      <h2 className="text-xl">First Name : Michael</h2>
                      <h2 className="text-xl">Last Name : Lawson</h2>
                      <h2 className="text-xl">
                        Email : michael.lawson@reqres.in
                      </h2>
                      <h2 className="relative p-2 bg-slate-100 rounded-base">
                        Description : Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Et laborum cupiditate ab nobis earum
                        sequi optio quis, reprehenderit nulla autem numquam
                        vero, quos a quo corporis accusantium est sunt quibusdam
                        perspiciatis error nemo. Repellendus natus impedit ipsum
                        dolorum harum numquam a fugiat eius id saepe. Neque qui
                        nemo iste quisquam modi tempora ut, minus ipsum quaerat.
                        Dicta magnam excepturi tenetur, inventore accusamus
                        corrupti vero quis assumenda fuga, possimus voluptatem
                        aliquid et hic minima maxime tempora nihil harum
                        necessitatibus voluptate perferendis nam animi. Itaque
                        veritatis voluptatibus dolor veniam odio harum eaque
                        iure neque eos voluptatem vero excepturi dignissimos
                        officiis, aliquam pariatur!
                      </h2>
                    </div>
                    <div className="flex gap-5">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Edit Profile</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                              Make changes to your profile here. Click save when
                              youre done.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="name" className="text-right">
                                Name
                              </Label>
                              <Input
                                id="name"
                                defaultValue="Pedro Duarte"
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid items-center grid-cols-4 gap-4">
                              <Label htmlFor="username" className="text-right">
                                Username
                              </Label>
                              <Input
                                id="username"
                                defaultValue="@peduarte"
                                className="col-span-3"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button type="submit">Save changes</Button>
                          </DialogFooter>
                        </DialogContent>
                      </Dialog>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button>Open</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will
                              permanently delete your account and remove your
                              data from our servers.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </div>
                </div>
                <CardComment />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailUserPage;
