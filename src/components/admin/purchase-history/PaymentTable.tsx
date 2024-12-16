import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { GoFileDirectoryFill } from "react-icons/go";
import { LiaFile } from "react-icons/lia";

const transactions = [
  {
    date: "12/09/2024",
    id: "TXN789456",
    membership: "Standard",
    amount: "$150",
  },
];

const PaymentTable = () => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-ts font-medium text-[#1D2939]">
              Transaction Date
            </TableHead>
            <TableHead className="text-ts font-medium text-[#1D2939]">
              Transaction ID
            </TableHead>
            <TableHead className="text-ts font-medium text-[#1D2939]">
              Membership
            </TableHead>
            <TableHead className="text-ts font-medium text-[#1D2939]">
              Amount Paid
            </TableHead>
            <TableHead className="text-ts font-medium text-[#1D2939]">
              Receipt
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="text-ts font-medium text-[#475467]">
                {transaction.date}
              </TableCell>
              <TableCell className="text-ts font-medium text-[#475467]">
                {transaction.id}
              </TableCell>
              <TableCell className="text-ts font-medium text-[#475467]">
                {transaction.membership}
              </TableCell>
              <TableCell className="text-ts font-medium text-[#475467]">
                {transaction.amount}
              </TableCell>
              <TableCell className="text-ts font-medium text-[#475467]">
                <Button variant="ghost" size="icon">
                 <GoFileDirectoryFill size={24}/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PaymentTable;
