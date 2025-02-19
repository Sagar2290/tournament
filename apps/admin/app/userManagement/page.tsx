import { userData, columns } from "./columns"
import { DataTable } from "../../components/data-table"
import { Button } from "@workspace/ui/components/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"


async function getData(): Promise<userData[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      firstName: "new"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      firstName: "new"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      firstName: "new"
    },

    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      firstName: "new"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      firstName: "new"
    },
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
      firstName: "new"
    },
    // ...
  ]
}

export default async function Page() {
  const data = await getData()
  return (
    <div className="card w-full p-5">
      <div className="w-full flex justify-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Invite</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Invite user</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Email
                </Label>
                <Input
                 id="name"
                  placeholder="Email"
                  className="col-span-3" 
                  value="sasa"
                  />
              </div>              
            </div>
            <DialogFooter>
              <Button type="submit">Send</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="container mx-auto py-10  p-10 border-black">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  )
}
