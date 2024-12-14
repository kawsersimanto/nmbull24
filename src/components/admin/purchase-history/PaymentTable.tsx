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
            <TableHead>Transaction Date</TableHead>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Membership</TableHead>
            <TableHead>Amount Paid</TableHead>
            <TableHead>Receipt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.membership}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <Button variant="ghost" size="icon">
                  <FileText className="h-4 w-4" />
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
