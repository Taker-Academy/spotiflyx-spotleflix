import { Spacing } from "@/components/Spacing";
import { HeaderHome } from "../home/HeaderHome";
import { HomeResearch } from "../research/HomeResearch";

export default function HomeSearchMain() {
    return (
      <main className="flex min-h-screen flex-col items-center p-10">

          <HeaderHome/>

          <Spacing size="sm"/>

          <HomeResearch/>

      </main>
    );
}