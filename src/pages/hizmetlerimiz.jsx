import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Content from "@/src/data/pages/services/damper-uretimi.json";
import PartnersSection from "../components/sections/Partners";

const Hizmetlerimiz = () => {
    return (
        <Layouts footer={2}>
            <PageBanner
                pageName={"Hizmetlerimiz"}
                pageTitle={"Hizmetlerimiz"}
            />
            {/* call to action */}
            <div className="container">
                <div className="mil-divider" />
            </div>
            {/* steps */}
            <section className="mil-p-120-90">
                <div
                    className="mil-deco"
                    style={{ bottom: 0, right: "35%", transform: "rotate(180deg)" }}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-12 mil-mb-90">
                            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                                Hizmetlerimiz ve Çözümlerimiz
                            </span>
                            <h2 className="mil-mb-30">
                                Damper Üretimi
                            </h2>
                            <p className="mil-dark">
                                Fortek endüstriyel olarak, enerji santralleri veendüstriyel tesisler icin gaz akışını kontrol edecek ya da tamsızdırmaz şekilde kesecek çok çeşitli damperler imal etmekteyiz. Doğru damper ve aktüatör tipinin seçilmesi konusundadanışmanlık yaparak ve projenin başlangıcından itibaren enverimli tasarım seçimlerinin yapılmasını sağlamaktayız. Önceden dikkatli bir planlama yapılması, son müşterinin heruygulama için ideal ve en iyi çalışan damper sistemlerinialmasını sağlıyoruz. Üretim faaliyetleri uluslararası standart ve kodların ışığındagerçekleştirilmektedir. İmalat ve kalite kontrol kademelerininher birinde yine EN, ASME, API gibi genel standartlarınınöngördüğü kalite gereklikleri eksiksiz olarak karşılanmaktadır. Bu kapsamda üretilen damper tipleri;
                            </p>
                        </div>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-circle mil-mb-30">
                                    <span>01</span>
                                </div>
                                <h4 className="mil-mb-15">2 Yollu Damperler</h4>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>02</span>
                                </div>
                                <h4 className="mil-mb-15">3 yollu Damperler</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-mb-30">
                                    <span>03</span>
                                </div>
                                <h4 className="mil-mb-15">Giyotin Damperler</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-mb-30">
                                    <span>04</span>
                                </div>
                                <h4 className="mil-mb-15">Çok kanatlı Damperler</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-circle mil-mb-30">
                                    <span>05</span>
                                </div>
                                <h4 className="mil-mb-15">Marine Damperler</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>06</span>
                                </div>
                                <h4 className="mil-mb-15">Kelebek Damperler</h4>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>07</span>
                                </div>
                                <h4 className="mil-mb-15">Tam sızdırmazlık Damperleri</h4>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* steps end */}
            <div className="container">
                <div className="mil-divider" />
            </div>
            <section className="mil-p-120-90">
                <div className="container ">
                    <div className="row">
                        <div className="col-12 mil-mb-90">
                            <p className="mil-dark">
                                Enerji verimliliğinin ve emisyon değerlerinin çok önemli olduğugünümüzde, klapelerin güvenilir ve sorunsuz bir şekilde calışması,modern tesisler için bir zorunluluk haline gelmiştir. Fortekendüstriyel, kendi tasarladığı klape sistemlerini ve hali hazırdamevcut klape sistemlerini geliştirmek icin yaptığı Ar-Geçalışmaları sonucunda, hava yastıklamalı & metal alaşım contalısızdırmazlık sistemi ile %100 seviyelerinde sızdırmazlık sağlamayıbaşarmıştır. Geliştirdiğimiz bu sistem bir çok projede test edilerek,olumlu geri dönüşler almış ve tasarımımız müşterilerimiztarafından da onaylanmıştır. Fortek endüstriyel, özel tasarımimalatlar ve kısa teslim süreleri ile büyük avantajlarsağlamaktadır.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <div className="mil-divider" />
            </div>
            {/* services */}
            <section className="mil-services mil-p-120-90">
                <div
                    className="mil-deco"
                    style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }}
                />
                <div className="container">
                    {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Quality and Performance
          </span> */}
                    <h2 className="mil-mb-90">
                        Damper Sistemlerinin Moderniazsyonu ve Yönetimi
                    </h2>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/1.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">01</span> Modernizasyon
                                    </h5>
                                    <p>
                                        Tasarım ve mühendislik hizmetlerimiz,eski sistemlerin işletimgereksinimlerini yenidendeğerlendirebilir ve damperlerin,bileşenlerin veya kontrollerinyenilenmesinden veyadeğiştirilmesinden yararlanıpfaydalanamayacağınıza dairtavsiyelerde bulunabilir. Mevcutçalışma koşullarınızı vegereksinimlerinizi değerlendirebilir veekipmanın ömrünü iyileştirecekve/veya uzatarak uzun vadeli tasarrufsağlayacak yeni çözümler sunabiliriz.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/2.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">02</span> Bakım
                                    </h5>
                                    <p>
                                        Damper arızaları öngörülebilir ve önlenebilir olabilir;uyarı işaretleri genellikle deneyimli damperuzmanlarının görebileceği şekilde bulunur ve dampersistemlerinizin uygun şekilde yönetilmesi ve bakımı,ekipmanın ömrünün uzatılmasına yardımcı olabilir.Damperlerin genellikle büyük bir kurulumun küçük birparçası olduğunu ancak sürecin performansı, verimliliği,istikrarı ve karlılığı açısından kritik öneme sahipolduklarını da biliyoruz. Bunu göz önünde bulundurarak,Fortek personeli tarafından yapılan düzenli bakım,ekipmanınızın güvenilebilecek iyi bir çalışmadurumunda olduğuna dair iç rahatlığı sağlayabilir.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/3.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">03</span> Saha Yönetimi
                                    </h5>
                                    <p>
                                        Satış Sonrası Saha Hizmetleri Ekibimiz,herhangi bir sektördeki damperkurulumlarının servis denetimlerini, rutinbakımını veya kapsamlı retrofit / revizyonunusağlamaktadır. Tüm saha çalışmaları belirliyöntem bildirimleri ve riskdeğerlendirmeleriyle desteklenir. Deneyimliekibimiz operasyonunuzdaki herhangi birarızayı en aza indirecek ve ayrıntılı bir servisraporu, tavsiyeler, güncellenmiş yedek parçalisteleri ve tüm işlerin tamamlanmasıyla ilgilibir iyileştirme planı ile güvence verecektir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* services end */}
            {/* services */}
            <section>
                <div className="container mil-mb-120">
                    <div className="row">
                        <div className="mil-mb-60">
                            <h2 className="mil-mb-30">
                            Proje tasarımı değerlendirmeleri
                            </h2>
                            <p className="mil-dark">
                                Projelerde verim ve performansı geliştirmek,kaynak israfını azaltmak, maliyetleri ve projesürelerini düşürmek,istenen kalite seviyelerineerişmek için, yapılmasıönerilen proje yönetimmodelini tespit etmek hayati öneme haizdir. Bir projenin başarısı, onu planlarken harcanançaba, gösterilen özen ve proje ekibininyetenekleri ile doğru orantılıdır. Bu nedenleproje yönetimi, detaylı planlama, disiplin veproje süreçlerinde ciddi hassasiyetgerektirenbir konudur. Fortek Endüstriyel, yurt içi ve yurt dışında,müşterilerineproje yönetimi konusundahizmet verebilecek deneyim ve gerekliteknolojik donanıma sahiptir ve prensip olarak, proje yönetim hizmetleri ISO 9001 KYS çerçevesinde oluşturulmuş süreçlerin birbütünü şeklinde ilerlemektedir. <br /> <strong>Bu kapsamda verilen hizmetler:</strong>
                            </p>
                        </div>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-circle mil-mb-30">
                                    <span>01</span>
                                </div>
                                <h4 className="mil-mb-15">Proje tasarımı değerlendirmeleri</h4>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>02</span>
                                </div>
                                <h4 className="mil-mb-15">Proje fizibilite analizleri</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-mb-30">
                                    <span>03</span>
                                </div>
                                <h4 className="mil-mb-15">Ekipman yerleşimi</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-mb-30">
                                    <span>04</span>
                                </div>
                                <h4 className="mil-mb-15">İmalat ve montaj resimlerinin hazırlanmas</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-circle mil-mb-30">
                                    <span>05</span>
                                </div>
                                <h4 className="mil-mb-15">3D modelleme</h4>
                                <p>
                                </p>

                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>06</span>
                                </div>
                                <h4 className="mil-mb-15">Cfd analizleri</h4>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>07</span>
                                </div>
                                <h4 className="mil-mb-15">Potansiyel ve/veya yenilenebilir enerjiseçenekleri</h4>
                                <p>
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="mil-mb-60">
                                <div className="mil-number-icon mil-lines mil-mb-30">
                                    <span>08</span>
                                </div>
                                <h4 className="mil-mb-15">Enerji verimliliği ve alternatif üretimteknolojileri</h4>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mil-mb-120">
                    <div className="row">
                        <div className="mil-mb-60">
                            <h2 className="mil-mb-30">
                            Ürün Tedarik Yönetimi
                            </h2>
                            <p className="mil-dark">
                            Fortek endüstriyel tesisler ve enerji santralleri için globaldüzeyde ekipman tedarikleri yapmaktadır. Ekiplerimizpratik çözümler üreterek, etkin zaman ve maliyet kontrolüile en kaliteli teslim şartlarının sağlamaya odaklanarak projeteslimini gerçekleştir.<br /> <strong>Fortek aşağıdaki ürünlerin tedariğini sağlar;</strong>
                            </p>
                        </div>
                    </div>
                    <div className="row mil-mb-30-adapt">
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/1.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">01</span> Elektrikli Aktuatör
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/2.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">02</span> Pnömatik Aktuatör
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/3.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">03</span> Hidrolik Aktuatör
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/4.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">04</span> Pozisyoner
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/5.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">05</span> Junction Box
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/6.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">06</span> Limit Switch
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/7.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">07</span> Cable Glands
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/8.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">08</span> Blower
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/9.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">09</span> Kazanlar
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/10.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">10</span> By-Pass Baca Sistemleri
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/11.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">11</span> GT Egzoz Sistemleri
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/12.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">12</span> Hvac Sistemleri
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/13.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">13</span> Endüstriyel Kimyasallar
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/14.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">14</span> Özel alaşım sac tedarikleri
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/15.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">15</span> Inconel
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/16.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">16</span> Hastelloy
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/17.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">17</span> Avista
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/18.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">18</span> Hitemp Hardox
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6">
                            <div className="mil-service-item mil-without-lines mil-mb-60">
                                <div className="mil-service-icon">
                                    <div className="mil-icon-frame mil-icon-frame-md">
                                        <img src="img/icons/md/19.svg" alt="icon" />
                                    </div>
                                </div>
                                <div className="mil-service-text">
                                    <h5 className="mil-mb-30">
                                        <span className="mil-accent">19</span> Kompansatör
                                    </h5>
                                    <p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layouts>
    );
};
export default Hizmetlerimiz;
