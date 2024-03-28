import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Urunlerimiz = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Ürünlerimiz"} pageTitle={"Ürünlerimiz"} />
      {/* team */}
      <section className="mil-team mil-p-120-60">
        <div className="container">
          <h3 className="mil-mb-5">
            <span className="mil-accent">
            Temiz Akış Teknolojisi
            </span>{" "}
            daha temiz bir yarın için inşa ediyor
          </h3>
          <p className="mil-mb-120">
          Akışı mevcut en ileri teknolojiyle kontrol etmek, Endüstriyel damper serisinin özüdür. Modern Temiz Teknolojinin tam kalbinde yer alan ve süreçlerin güvenilirliğini ve enerji verimliliğini sağlayan Endüstriyel damper serisi, çok sayıda endüstriyel uygulamayı kapsayan tüm şekil, boyut ve malzeme seçeneklerine sahiptir. Damperlerimiz lider aktüatör teknolojisi ve limit anahtarları, sızdırmazlık hava fanları ve elektrik kabinleri gibi çeşitli gelişmiş seçeneklerle donatılmış olarak gelir; bu da onları mevcut en çok yönlü ve eksiksiz Temiz Akış paketi haline getirir. YENİ! Size kolaylık sağlamak için, çevredeki kanal sistemlerini tek bir tam paket damper kanalı teslimatına dahil edebiliriz. Sammet kanal sistemleri ayrıca ayrı kanal teslimatı olarak da mevcuttur.
          </p>
          <div className="row ">
            <div className="col-sm-6 col-lg-6">
              <Link href="iki-yollu-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/iki yollu damperler_920x950.png" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">2 Yollu Damper</h4>
                <p style={{color: 'black'}}>İnşaat ve madencilik sektörlerindeki ağır yük taşımacılığında devrim yaratan çift yönlü damperlerimiz, dayanıklılık ve verimlilikte yeni standartlar belirliyor. İhtiyacınız olan güvenilirlik ve performansı sunuyoruz.</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="uc-yollu-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/üç yollu_921x950.png" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">3 Yollu Damper</h4>
                <p style={{color: 'black'}}>3 yollu damperler, ana proses ile bypass arasındaki gaz akışını yönlendirmek için kullanılır. Bu damperler izolasyon veya kontrol amaçlı olabilir.</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link
                href="giyotin-damper"
                className="mil-team-card mil-mb-60 mil-mb-30"
              >
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/giyotin_921x950.png" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Giyotin Damper</h4>
                <p style={{color: 'black'}}>Fortek giyotin damperler, bakım ve arıza tespiti için esnek kullanımlar sunar; her durumda mükemmel sızdırmazlık için çeşitli sızdırmazlık sistemleriyle donatılmıştır.</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="cok-kanatli-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/çok kanatlı_921x950.png" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Çok Kanatlı Damper</h4>
                <p style={{color: 'black'}}>Fortek çok kanatlı damperler, üst düzey kontrol için idealdir; paralel ve karşılıklı hareket eden kanatlarla tam izolasyon ve akış yönetimi sağlar.</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="sizdirmazlik-hava-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/sızdırmazlık_921x950.png" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Sızdırmazlık Hava Damper</h4>
                <p style={{color: 'black'}}>Fortek sızdırmazlık hava damperleri, gazlara karşı %100 sızdırmazlık gerektiren durumlar için doğru çözümdür.</p>
              </Link>
            </div>
           
          </div>
        </div>
      </section>
      {/* team end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
     
     
    </Layouts>
  );
};
export default Urunlerimiz;
