import Footer from '../../components/footer/Footer'
import Hero from '@/components/hero/Hero';
import cis from  '../../../public/images-proyecto/cis-latam.png';


export default function CisLatam() {
  return (
    <>
      <div>
      <div><Hero
          title="CIS latam"
          backgroundImage={cis.src}
          clientInfo={{
            group: "",
            date: "2022 Ongoing",
            name: "CIS LATAM",
            categories: [
              "Video & Graphic Design",
              "Branding & Marketing Campaigns",
              "Digital & Go-To-Market Strategies",
              "App & Web UX/UI Design",
            ],
          }}
          aboutInfo="Cis Latam work showcase"
          services={{
            description:
              "We helped Cis Latam launch with a comprehensive digital and strategic package, covering everything from branding and video production to app design and go-to-market strategy.",
            list: [
              "video & graphic design",
              "Branding & Marketing Campaigns",
              "Digital & Go-To-Market Strategies",
              "App & Web UX/UI Design",
            ],
          }}
        /></div>
      </div>
    </>
  );
}
