
import Topbar from "@/app/_components/topbar";

export default function Home() {
  return (
    <section className="flex flex-col px-12 h-screen">
      {/* Fixed topbar section */}
      <section className="fixed inset-x-0 top-0 z-50 w-full">
        <Topbar />
      </section>

      {/* Main content */}
      <section className="pt-16">
        <h1>Hello World</h1>
      </section>
    </section>
  );
}
