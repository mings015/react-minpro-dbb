import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import GridPattern from "../../../../components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
    const linkMap = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.9547654072285!2d119.50619920795273!3d-5.1373485639023535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbefcac8ff6d28f%3A0x71a75740f01747c0!2sJl.%20Kejayaan%20Utara%2012%20No.L.406%2C%20RT.001%2FRW.01%2C%20Tamalanrea%2C%20Kec.%20Tamalanrea%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan%2090245!5e0!3m2!1sid!2sid!4v1728922894842!5m2!1sid!2sid"
  return (
    <div className="relative z-10 ">
      <GridPattern
        width={70}
        height={70}
        x={-1}
        y={-1}
        strokeDasharray={"10 2"}
        className={cn()}
      />

      <div className="relative flex flex-col items-center justify-center gap-10 py-20 border-t-2 border-border">
        <h1 className="text-3xl font-heading ">Contact Us</h1>
        <div className="grid grid-cols-1 gap-10 my-5 md:grid-cols-2">
          <div className="">
            <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  If you have any questions feel free to contact us
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid items-center w-full gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="messege">Message</Label>
                      <Textarea id="messege" />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button variant="neutral">Send</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="">
            <Card className="h-full" >
                <iframe src={linkMap} className="w-full md:h-full h-[400px]" ></iframe>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
