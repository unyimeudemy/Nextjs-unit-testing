import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json([
    {
      id: 1,
      name: "unyime",
    },
    {
      id: 2,
      name: "emmanuel",
    },
    {
      id: 3,
      name: "udoh",
    },
  ]);
}
