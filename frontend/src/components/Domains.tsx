import * as React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Domain from "./Domain";

import { api } from "../axios";

const Domains = () => {
  const [domains, setDomains] = React.useState([]);

  const fetchData = async () => {
    try {
      const response = await api.get("/analytics/domains");
      const result = response;
      setDomains(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Domain</TableCell>
            <TableCell>Redirects</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {domains.map((domain) => (
            <Domain domain={domain} />
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
};
export default Domains;
