import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function StressTest() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Choose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </DialogContent>
        </Dialog>
      </TooltipTrigger>
      <TooltipContent>Click the button to open dialog</TooltipContent>
    </Tooltip>
  );
}
