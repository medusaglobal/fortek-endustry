import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import PartnersSection from "../components/sections/Partners";

import { getSortedPostsData } from "../lib/posts";

const SertifikaBanner = dynamic(
  () => import("@/src/components/sliders/SertifikaBanner"),
  {
    ssr: false,
  }
);
const LatestPostsSlider = dynamic(() => import("../components/sliders/LatestPosts"), { ssr: false });

const Careers = (props) => {
  return (
    <Layouts>
      <PageBanner pageName={"Sertifikalarımız"} pageTitle={"Sertifikalarımız"} />


      {/* careers */}
      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12">
            <h3 className="mil-mb-30">
              <span className="mil-accent"> Kalite </span> Politikamız
            </h3>
            <p>
            Tüm dünyadaki projelerin ihtiyaç ve beklentilerine yönelik üst düzey hizmetimiz ile müşteri memnuniyetini ve güvenini sürdürmek, kalite sistemimizi<span className="mil-accent"> ISO 9001 :2015</span> Kalite Yönetim Sistemi doğrultusunda sürdürmek ve Başarımızın, personelimizin bilgi birikimi, tecrübesi, özverisi, ekip çalışması ve sürekli gelişimin bir sonucu olduğunu göz önünde bulundurarak, personel bilgi düzeyimizi ve ekip çalışması yetkinliklerimizi geliştirmek için şirket eğitim ve destek programları yürütmek, etik ve kaliteye önem veren tedarikçilerle iyi ilişkileri sürdürmektir. {" "}
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}


      {/* counters */}
      <section className="mil-counters mil-deep-bg mil-p-120-90 mil-mt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30 mil-text-center" />
                <h5 className="mil-text-center mb-2">ISO 9001 & ISO 14001</h5>
                <div className="mil-text-center"> <img src="img/sertifika/LRcertifiedlogo.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2">KALİTE POLİTİKAMIZ & MİSYONUMUZ</h5>
                <div className="mil-text-center"> <img src="img/sertifika/qualityicon.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2">FORTEK ITP</h5>
                <div className="mil-text-center"> <img src="img/sertifika/Fortek.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2">Sağlık, İş Güvenliği ve Çevre Politikamız</h5>
                <div className="mil-text-center"> <img src="img/sertifika/recycleicon.png" style={{width : '50%'}} alt="" /> </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}

      {/* careers */}
      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12">
            <h3 className="mil-mb-30">
              <span className="mil-accent"> Fortek </span> ITP
            </h3>
            <p>
            Fortek ITP, <span className="mil-accent">ITP</span> gereksinimlerin yerine getirilmesini sağlamak için tüm üretim zincirini kapsayan, tüm teslimatlara yönelik bir kalite planıdır. Fortek standart ITP veya proje bazında değiştirilmiş olan, üzerinde anlaşmaya varılan yüksek kalite seviyesini karşılamanın kurallarını belirler.
  {" "}
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}

      {/* careers */}
      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12">
            <h3 className="mil-mb-30">
              <span className="mil-accent"> Sağlık, İş Güvenliği ve Çevre  </span> Politikamız
            </h3>
            <p>
            HSE politikamızdaki ilk hedefimiz doğru önlemler alarak ve tatmin edici bir çalışma ortamı sağlayarak insanların, çevrenin ve doğanın zarar görmesini engellemektir.Kişisel koruyucu donanımlar doğru zamanda doğru yerde kullanıldığından hayat kurtaracaktır.Bu doğrultuda <span className="mil-accent">ISO14001 & OHSAS18001</span> ile uyumlu bir şekilde iş güvenliği kurallarına uyacağımızı FORTEK olarak taahhüt ederiz.
          
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}


{/* counters */}
<section className="mil-counters mil-deep-bg mil-p-120-90 mil-mt-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30 mil-text-center" />
                <h5 className="mil-text-center mb-2"><a href="uploads/CE_INDUSTRIALDAMPER.pdf">CE INDUSTRIAL DAMPER CERTIFICATE</a></h5>
                
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2"><a href="uploads/COC_STACKDAMPER.pdf">COC STACK DAMPER CERTIFICATE</a></h5>
               
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2"> <a href="uploads/EAC_INDUSTRIALDAMPER.pdf"> EAC INDUSTRIAL DAMPER CERTIFICATE</a></h5>
              
              </div>
            </div>
            <div className="col-xl-3">
              <div className="mil-mb-30">
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <h5 className="mil-text-center mb-2"><a href="uploads/ISO90012015.pdf">ISO 9001 2015 CERTIFICATE</a> </h5>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}

    
      <div className="container mil-mt-60">
        <div className="mil-divider" />
      </div>

    </Layouts>
  );
};
export default Careers;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    }
  }
}
