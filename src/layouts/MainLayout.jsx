import Navbar from "../components/common/Navbar";
import Sidebar from "../components/common/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            flex: 1,
            padding: "30px",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default MainLayout;