import { Defrosted } from "@/components/Defrosted";
import { Frozen } from "@/components/Frozen";
import { Peak } from "@/components/Peak";
import { Unknown } from "@/components/Unknown";
import { getDefrostedStatus } from "@/getDefrostedStatus";

export default function Home() {
  const status = getDefrostedStatus(new Date());

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
