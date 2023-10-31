import { Issue, Status } from "@prisma/client";
import { Button, DropdownMenu } from "@radix-ui/themes";
import React from "react";

interface DropdownProps {
  setSelectedValue: (selectedStatus: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ setSelectedValue }) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Button variant="solid" highContrast>
            All
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="solid" highContrast>
          <DropdownMenu.Item onSelect={() => setSelectedValue(Status.OPEN)}>
            Open
          </DropdownMenu.Item>
          <DropdownMenu.Item
            onSelect={() => setSelectedValue(Status.IN_PROGRESS)}
          >
            In Progress
          </DropdownMenu.Item>
          <DropdownMenu.Item onSelect={() => setSelectedValue(Status.CLOSED)}>
            Closed
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default Dropdown;
