import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/dist/client/link";
import IssuesTablePage from "./table/page";

const IssuesPage = () => {
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
