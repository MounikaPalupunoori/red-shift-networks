import PropTypes from 'prop-types';
import {
    TableCell,
    TableRow,
    TableBody,
    Table,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const TableSkeletonLoader = ({ rows, columns }) => {
  return (
    <Table>
    <TableBody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: columns }).map((_, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton className="w-[100px] h-[18px] rounded-full" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
    </Table>
  );
};
  
TableSkeletonLoader.propTypes = {
  rows: PropTypes.number,
    columns: PropTypes.number,
};

export default TableSkeletonLoader;