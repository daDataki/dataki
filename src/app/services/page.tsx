
import "./services.css";
import Header from "../../components/header1/Header1";
import Service from "../../components/service/Service";
import Footer from "../../components/footer/Footer"


export default function Servicies() {
  return (
    <div>
      <Header
        className="text-white"
        logoSrc="/images-proyecto/logo.png"
        menuIconSrc="/images-proyecto/menuWhite.png"
        logoSrcOpen="/images-proyecto/logo.png"
        menuCloseIcon="/images-proyecto/closeMenu.svg"
      />
      <div className="bg-black">
        <div className="relative pl-24 py-56">
          <h1 className="uppercase text-white  font-antonio font-bold text-services" >services</h1>
          <h2 className="absolute top-[53%] left-[95px] transform translate-x-[30%] text-easternBlue font-signature font-light text-we">We provide</h2>
        </div>
      </div>
      <Service />
      <Footer />
    </div>
  );
}
