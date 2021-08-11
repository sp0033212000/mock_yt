import Header from "@/component/feature/Header";
import Footer from "@/component/feature/Footer";
import Content from "@/component/Content";

export default function Home() {
  return (
    <div className={"min-h-screen"}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
