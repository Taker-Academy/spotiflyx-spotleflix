import { Spacing } from "@/components/Spacing";
import { HeaderHome } from "../home/HeaderHome";
import { HomeResearch } from "../research/HomeResearch";
import { Footer } from "@/components/footer";

export default function HomeSearchMain() {
    return (
      <main className="flex min-h-screen flex-col items-center">

          <HeaderHome/>

          <Spacing size="sm"/>

          <HomeResearch/>

          <Footer/>

      </main>
    );
}