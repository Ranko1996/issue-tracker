import { Badge, Table } from "@radix-ui/themes";
import React from "react";

interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const IssuesTablePage = async () => {
  const res = await fetch("http://localhost:3000/api/issues", {
    cache: "no-store",
  });
  const issues: Issue[] = await res.json();
  console.log(issues);

  return (
    <>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
              <Table.Cell>
                <Badge
                  color={
                    issue.status == "OPEN"
                      ? "red"
                      : issue.status == "CLOSED"
                      ? "green"
                      : "orange"
                  }
                  variant="soft"
                >
                  {issue.status}
                </Badge>
              </Table.Cell>
              <Table.Cell>
                {new Date(issue.createdAt).toLocaleDateString(undefined, {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default IssuesTablePage;
