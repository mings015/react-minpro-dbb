import { Pencil, Delete } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const ButtonAction = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-56">
          <Button className="w-56">Action</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Select Action</DropdownMenuLabel>
          <DropdownMenuItem>
            <Pencil className="w-4 h-4 mr-2" />
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Delete className="w-4 h-4 mr-2" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ButtonAction;
