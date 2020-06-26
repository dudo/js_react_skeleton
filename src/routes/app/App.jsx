import NavTop from "../../components/navTop";
import NavBottom from "../../components/navBottom";

const App = ({ children }) => {
  return (
    // instead of a fragment, a context provider is a good HOC here.
    <>
      <NavTop />
      {children}
      <NavBottom />
    </>
  );
};

export default App;
