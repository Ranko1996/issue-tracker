"use client";
import Dropdown from "@/app/components/Dropdown";
import { Badge, Table } from "@radix-ui/themes";
// import React from "react";
import React, { useState, useEffect } from "react";

interface Issue {
  id: number;
  title: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const IssuesTablePage = () => {
  //   const [selectedValue, setSelectedValue] = useState("");
  //   const res = await fetch(
  //     `http://localhost:3000/api/issues/list?status=${selectedValue}`,
  //     // `http://localhost:3000/api/issues/list?status`,
  //     {
  //       cache: "no-store",
  //     }
  //   );
  const [selectedValue, setSelectedValue] = useState<string>("");
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("BLEEEEE");
      try {
        const res = await fetch(
          selectedValue
            ? `http://localhost:3000/api/issues/list?status=${selectedValue}`
            : `http://localhost:3000/api/issues/list`
          //   `http://localhost:3000/api/issues/list?status=${selectedValue}`
        );
        if (res.ok) {
          const data: Issue[] = await res.json();
          setIssues(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedValue]);

  return (
    <>
      <Dropdown setSelectedValue={setSelectedValue} />
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
