import React from "react";
import { Button, DropdownMenu } from "@radix-ui/themes";
import Link from "next/dist/client/link";
import IssuesTablePage from "./table/page";
import Dropdown from "../components/Dropdown";
import { useState } from "react";

const IssuesPage = () => {
  // const [selectedValue, setSelectedValue] = useState("");
  return (
    <div>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>

      <IssuesTablePage />
    </div>
  );
};

export default IssuesPage;
