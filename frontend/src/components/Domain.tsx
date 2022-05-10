import * as React from "react";

import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const Domain = (props: any) => {
  return (
    <TableRow>
      <TableCell>{props.domain.domain}</TableCell>
      <TableCell>{props.domain.redirects}</TableCell>
      <TableCell>{props.domain.createdAt}</TableCell>
    </TableRow>
  );
};

export default Domain;
