// api/issues/list/[status].ts

import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Status } from "@prisma/client";

export async function GET(request: Request) {
  let pretrazeniStatus = null;

  const url = new URL(request.url);
  const name = url.searchParams.get("status");
  if (name === "OPEN") {
    pretrazeniStatus = Status.OPEN; // Status.Status1 je pretpostavljeni tip iz vašeg Statusa
  } else if (name === "IN_PROGRESS") {
    pretrazeniStatus = Status.IN_PROGRESS;
  } else if (name === "CLOSED") {
    pretrazeniStatus = Status.CLOSED;
  }
  if (pretrazeniStatus !== null) {
    const issues = await prisma.issue.findMany({
      where: {
        status: {
          equals: pretrazeniStatus,
        },
      },
    });
    return NextResponse.json(issues);
  } else {
    const issues = await prisma.issue.findMany();
    return NextResponse.json(issues);
  }
}
