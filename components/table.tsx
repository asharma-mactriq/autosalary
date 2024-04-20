"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

import { Link } from "@nextui-org/link";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import { title } from "./primitives";

export const Tables = () => {
  return (
    <div className="max-w-lg">
      <Table aria-label="Example empty table">
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>ROLE</TableColumn>
          <TableColumn>STATUS</TableColumn>
          <TableColumn>STYLE CODE</TableColumn>
          <TableColumn>SIZE</TableColumn>
          <TableColumn>TOTAL PCS</TableColumn>
        </TableHeader>
        <TableBody emptyContent={"No rows to display."}>{[]}</TableBody>
      </Table>
    </div>
  );
};

export const DynamicTables = ({ columns, rows, header, employee }) => {
  return (
    <div className="flex-col m-0 p-0 space-y-2">
      {/* <h1 className={title()}>{header}</h1> */}

      <Card className="">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md m-0 p-0">C&C</p>
            <p className="text-small text-default-500">Karigar Work</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>
            {header} : {employee}
          </p>
        </CardBody>
      </Card>

      <Table aria-label={header}>
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          )}
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
