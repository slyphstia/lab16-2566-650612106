import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Apiwit Boonyarit",
    studentId: "650612106",
  });
};
