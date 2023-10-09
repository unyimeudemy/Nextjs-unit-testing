import { NextResponse } from "next/server";

export async function POST(req) {
  const json = await req.json();
  return NextResponse.status(200).json([json]);
}
