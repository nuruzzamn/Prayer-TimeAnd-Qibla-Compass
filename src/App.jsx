import Header from "../src/layout/Header";
import Fragment from "../src/layout/Fragment";
import MiddleSection from "../src/layout/MiddleSection";

function App() {
  return (
    <>
      <section className="max-container flex justify-center items-center bg-green-100 padding sm:bg-red-100">
        <section className="max-w-screen-sm sm:padding-x pb-5 flex justify-center items-center flex-col border border-gray-300 rounded-lg shadow-2xl">
          <Header className=""/>
          <Fragment className=""/>
          <MiddleSection className=""/>
          {/* <br /> */}
        </section>
      </section>
    </>
  );
}

export default App;
 