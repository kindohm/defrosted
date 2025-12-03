"use client";

import { useSearchParams } from "next/navigation";
import { Defrosted } from "@/components/Defrosted";
import { Frozen } from "@/components/Frozen";
import { Peak } from "@/components/Peak";
import { Unknown } from "@/components/Unknown";
import { getDefrostedStatus } from "@/getDefrostedStatus";

export default function Home() {
  const searchParams = useSearchParams();
  const testDateParam = searchParams.get("testDate");

  let now = new Date();
  if (testDateParam) {
    const parsed = new Date(testDateParam);
    if (!isNaN(parsed.getTime())) {
      now = parsed;
    }
  }

  const status = getDefrostedStatus(now);

  return (
    <main className="container" style={{ marginTop: "3rem" }}>
      <h1>Is Mariah Carey defrosted?</h1>

      {status === "defrosted" ? (
        <Defrosted />
      ) : status === "frozen" ? (
        <Frozen />
      ) : status === "hot" ? (
        <Peak />
      ) : (
        <Unknown />
      )}
    </main>
  );
}
