import Footer from "./components/footer.jsx";
import Header from "./components/header.jsx";
import TaskTable from "./components/taskTable.jsx";
export default function App() {
  return (
    <>
      <div className="w-[90vw] min-h-[97.3vh] max-w-[1260px] min-w-[650px] mt-5 mx-auto relative">
        <Header />
        <TaskTable />
        <Footer />
      </div>
    </>
  );
}
