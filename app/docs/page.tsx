import { subtitle, title } from "@/components/primitives";
import { Tables, DynamicTables } from "@/components/table";
import { rows, columns, headers, employees } from "@/config/table-data";

export default function DocsPage() {
  return (
    <div className="m-4 flex flex-col gap-[3rem]">
      <div className="flex flex-col justify-start items-start  gap-[1.4rem] ">
        <h1 className={title()}>How does it work</h1>
      </div>
      <div className="flex flex-col max-w-lg justify-start items-start  gap-[0.4rem] ">
        <div className="">
          <h2 className={subtitle()}>Karigar Entry</h2>
        </div>
        <DynamicTables
          columns={columns}
          rows={rows}
          header={headers}
          employee={employees}
        />
      </div>
      <div className="flex flex-col justify-end items-end  gap-[1.4rem] ">
        <div className="">
          <h2 className={subtitle()}>Production Entry</h2>
        </div>
        <Tables />
      </div>
      <div className="flex flex-col max-w-lg justify-start items-start  gap-[0.4rem] ">
        <div className="">
          <h2 className={subtitle()}>Stock Entry</h2>
        </div>
        <Tables />
      </div>
    </div>
  );
}
