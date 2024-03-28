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
            <h3 className="mil-mb-30" style={{ textAlign: 'center' }}>
              Fortek Belgesi <span className="mil-accent"> Sözümüzdür </span>
            </h3>
            <p style={{ textAlign: 'center' }}>
              Kaliteye mutlak bağlılık{" "}
              <span className="mil-accent">Fortek'te temel bir değer ve zihniyettir</span>,
              Damper sektöründeki uzun vadeli ve öncü kalite geliştirme çalışmalarımıza dayanarak, birinci sınıf kalite vaadimiz olan Fortek Sertifikasını ortaklarımıza sunmaktan gurur duyuyoruz. Kalite tanımımız, bitmiş ürünlerin kolayca ölçülebilir kalitesinin çok ötesine geçer. Mümkün olan en yüksek müşteri memnuniyetine ulaşmayı hedefleyerek yaptığımız her şeyde takip ettiğimiz sistematik ve organize çalışma modelidir. Fortek Sertifikası, duvardaki bir sertifika ya da belgedeki bir damga yerine, toplam kalitenin vaadidir. Bir numaralı hedefimiz memnun bir müşteridir. Hedefimiz sadece iyi bir ortak değil, en iyisi olmaktır.
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}
      {/* banners slider */}
      <SertifikaBanner />
      {/* banners slider end */}

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
                <h5 className="mil-text-center mb-2">ÇEVRE POLİTİKASI</h5>
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
              ISO 9001 <span className="mil-accent"> & </span> ISO 14001
            </h3>
            <p>
              Fortek, tüm günlük faaliyetlerimizde takip ettiğimiz, kapsamlı, resmi olarak denetlenen ve sertifikalandırılmış bir  {" "}
              <span className="mil-accent">ISO 9001 ve ISO 14001</span>,
              yönetim sistemine sahiptir. Bunun amacı, tasarım ve üretimden müşteri hizmetleri ve teslimatlara kadar süreç boyunca maksimum kaliteyi garanti etmektir.
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
              <span className="mil-accent"> Kalite </span> Politikamız
            </h3>
            <p>
              Fortek'te kalite, mümkün olan en yüksek müşteri memnuniyetine ulaşmayı hedefleyerek operasyonlarımızı yürütme, ürün üretme ve hizmet sunma şeklimiz anlamına gelir. Bu hedefe, müşterilerimizin spesifikasyonlarına ve taleplerine cevap veren, sözleşmeli teslimat programlarını karşılayan, güvenilir, emniyetli, rekabetçi fiyatlı ve son kullanımları için ideal olan ürünler üretilerek ulaşılır. Fortek'te herkes şirketin kalite sistem yönergelerini takip eder ve sistem geliştirme sürecine aktif olarak katılır. Üstelik ürünlerimiz ve operasyonlarımız, aldığımız müşteri geri bildirimlerine göre sürekli olarak geliştirilmektedir. {" "}
              <span className="mil-accent">ISO 9001 ve ISO 14001</span>,
              yönetim sistemine sahiptir. Bunun amacı, tasarım ve üretimden müşteri hizmetleri ve teslimatlara kadar süreç boyunca maksimum kaliteyi garanti etmektir.
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}

      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12" style={{textAlign : 'center'}}>
          <img
                src="img/sertifika/sertifikaBanner2.jpg"
                alt="banner"
                className="img-fluid"
                style={{width : '100%'}} 
              />
          </div>
        </div>
      </section>

      {/* careers */}
      <section className="mil-careers mil-p-120-50 mil-mt-60">
        <div className="container">
          <div className="col-xl-12">
            <h3 className="mil-mb-30">
              <span className="mil-accent"> Kalite </span> Misyonu
            </h3>
            <p>
            Müşterilerimiz bizimle çalıştıktan sonra  {" "}
              <span className="mil-accent"> FORTEK'i </span> süresiz olarak tedarikçi olarak tutmak istiyorlar ve bizi diğer firmalara da tedarikçi olarak tavsiye ediyorlar.
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
              <span className="mil-accent"> Fortek </span> ITP
            </h3>
            <p>
            ITP, gereksinimlerin yerine getirilmesini sağlamak için tüm üretim zincirini kapsayan, tüm teslimatlara yönelik bir kalite planıdır. Fortek standart   {" "}
              <span className="mil-accent"> ITP </span> veya proje bazında değiştirilmiş olan, üzerinde anlaşmaya varılan yüksek kalite seviyesini karşılamanın kurallarını belirler. 
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
              <span className="mil-accent"> Çevre </span> Politikası
            </h3>
            <p>
            Fortek olarak, iş operasyonlarımızın sürekli iyileştirilmesine olan bağlılığımızın yanı sıra, müşteri tesislerinin ve süreçlerinin çevresel etkilerinin azaltılmasını teşvik etmek amacıyla sunduğumuz ürünleri kullanma sözü veriyoruz.

Çevresel unsurlar, Fortek'in günlük işleyişinin bir parçasıdır. Şirket yönetimi ve tüm personelimiz, tüm projelerimizde operasyonel yönergelerin yazılı prensiplerine uyulması konusunda anlaşmıştır. Üretim ve teslimat zincirimizin her aşamasında – mühendislikten son teslime, son kullanıma ve nihai ürün imha edilene kadar – çevre mevzuatı, yönetmelikleri ve gereksinimlerini dikkate alıyoruz.
<span className="mil-accent"> Açık iletişim yoluyla </span> 
, şirket personelimize ve ortaklarımıza Fortek'in çevre koruma konusundaki taahhüdünü bildirmeyi ve bu alanda tüm ilgili taraflar arasında yeni işbirlikleri teşvik etmeyi amaçlıyoruz.

İşimizle ilişkilendirilen çevresel unsurları tanıyor ve her endişe alanı için hedefler belirledik. Çevresel politikamızın ve hedeflerimizin denetimi düzenli olarak yapılırken, işletme yöntemlerimiz, ürünlerdeki değişiklikler, işletme çevreleri ve mevzuat değişikliklerinin gerektirdiği şekilde sürekli olarak iyileştirilmektedir.  {" "}
          
            </p>
          </div>
        </div>
      </section>
      {/* careers end */}

    
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
