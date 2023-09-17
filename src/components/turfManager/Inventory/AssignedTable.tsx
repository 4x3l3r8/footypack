import { Eye } from "lucide-react"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "~/components/ui/table"
import { invoices } from "~/utils/api"
  
  export function AssignedTable() {
    return (
      <Table>
        <TableHeader>
          <TableRow className="uppercase font-bold text-black">
            <TableHead className="w-[100px]">NO</TableHead>
            <TableHead>item name</TableHead>
            <TableHead>assigned to</TableHead>
            <TableHead >assigned by</TableHead>
            <TableHead>date collected</TableHead>
            <TableHead>status</TableHead>
            <TableHead>action</TableHead>

          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice, index) => (
            <TableRow key={invoice.id} className={index % 2 === 1 ? "bg-gray-100" : ""}>
              <TableCell className="font-bold text-primary underline">{invoice.id}</TableCell>
              <TableCell>
              <div className="truncate w-[150px]">
                {invoice.itemName}
              </div>
            </TableCell>
              <TableCell className="underline text-blue-500">{invoice.assignedTo}</TableCell>
              <TableCell>{invoice.assignedBy}</TableCell>
              <TableCell>{invoice.dateCollected}</TableCell>
              <TableCell>
                <div className={`w-auto rounded-full capitalize text-center p-2 text-xs ${invoice.status === 'returned' ? 'bg-green-100 text-primary' : 'bg-red-100 text-red-500'}`}>
                {invoice.status}
                </div>
              </TableCell>
              <TableCell><Eye /></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
  