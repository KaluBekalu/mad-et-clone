import "../styles/globals.css";
import Navbar from "../components/Global/Navbar";
import Footer from "../components/Global/Footer";


function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
