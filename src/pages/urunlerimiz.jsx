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
            Fortek 
            </span>{" "}
            endüstriyel olarak,
          </h3>
          <p className="mil-mb-120">
           enerji santralleri veendüstriyel tesisler icin gaz akışını kontrol edecek ya da tamsızdırmaz şekilde kesecek çok çeşitli damperler imal etmekteyiz.Doğru damper ve aktüatör tipinin seçilmesi konusundadanışmanlık yaparak ve projenin başlangıcından itibaren enverimli tasarım seçimlerinin yapılmasını sağlamaktayız.Önceden dikkatli bir planlama yapılması, son müşterinin heruygulama için ideal ve en iyi çalışan damper sistemlerinialmasını sağlıyoruz.
          </p>
          <div className="row ">
            <div className="col-sm-6 col-lg-6">
              <Link href="iki-yollu-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/2YOLLUDAMPER.jpeg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">2 Yollu Damper</h4>
                <p style={{color: 'black'}}>Fortek 2 yollu klapeler, basit ve uygun maliyetli bir kontrol ve sızdırmazlık sağlar. Uygulamanız için gereken doğru sızdırmazlık verimliliğini sağlamak için sızdırmazlık hava fanı dahil olmak üzere çeşitli sızdırmazlık düzenlemeleri kullanılabilir.</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="uc-yollu-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/3YOLLUDAMPER.jpeg" alt="Team member" />
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
                  <img src="uploads/GİYOTİNDAMPER.jpeg" alt="Team member" />
                  <div className="mil-team-circle" />
                </div>
                <h4 className="mil-mb-10">Giyotin Damper</h4>
                <p style={{color: 'black'}}>Fortek giyotin damperler, bakım ve arıza tespiti için esnek kullanımlar sunar; her durumda mükemmel sızdırmazlık için çeşitli sızdırmazlık sistemleriyle donatılmıştır.</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-6">
              <Link href="cok-kanatli-damper" className="mil-team-card mil-mb-60">
                <div className="mil-image-frame mil-mb-30">
                  <img src="uploads/ÇOKKANATLIDAMPER.jpeg" alt="Team member" />
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
