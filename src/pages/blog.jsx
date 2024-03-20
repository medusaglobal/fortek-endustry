import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Blog = () => {
  return (
    <Layouts footer={2}>
      <PageBanner
        pageName={"Blog"}
        pageTitle={"Blog Postları"}
      />
      {/* blog */}
      <section className="mil-blog mil-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 mil-mb-120">
              <Link
                href="/damper-inovasyon"
                className="mil-card mil-mb-60"
              >
                <div className="mil-cover-frame">
                  <img
                    src="uploads/mühendislik çözümleri_1000x667.png"
                    alt="project"
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      Damper Sistemlerinde İnovasyon: Fortek'in Mühendislik
                      Çözümleri
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Modern endüstriyel tesislerin karşı karşıya kaldığı en
                      büyük zorluklardan biri, optimum verimlilik ve
                      sürdürülebilirlik standartlarını korurken maliyetleri
                      düşürmektir. Bu alanda, damper sistemleri kritik bir rol
                      oynamaktadır ve Fortek Endüstriyel, bu konuda çığır açan
                      yenilikler sunuyor.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/enerji-ve-surdurebilirlik"
                className="mil-card mil-mb-60"
              >
                <div className="mil-cover-frame">
                  <img
                    src="uploads/enerji verimliliği_1000x667.png"
                    alt="project"
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      Enerji Verimliliği ve Sürdürülebilirlik: Fortek
                      Damperlerin Rolü
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Sürdürülebilir enerji kullanımı ve çevre dostu üretim
                      yöntemleri, günümüz endüstriyel işletmeleri için olmazsa
                      olmaz hale gelmiştir. Fortek Endüstriyel, enerji
                      verimliliği ve çevresel etkinliği artıran damper
                      sistemleriyle bu alanda öncülük ediyor.
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                href="/ozellestirilmis-damper"
                className="mil-card mil-mb-60"
              >
                <div className="mil-cover-frame">
                  <img
                    src="uploads/endüstriyel tesisler_1000x667.png"
                    alt="project"
                  />
                </div>
                <div className="mil-description">
                  <div className="mil-card-title">
                    <ul className="mil-dot-list mil-text-sm mil-mb-15">
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>
                      Endüstriyel Tesisler için Özelleştirilmiş Damper
                      Çözümleri: Fortek Farkı
                    </h4>
                  </div>
                  <div className="mil-card-text">
                    <p>
                      Endüstriyel tesislerin ihtiyaçları kadar farklıdır ve
                      Fortek Endüstriyel bu gerçeği en iyi anlayanlardan.
                      Standardizasyonun ötesinde, her müşterinin benzersiz
                      ihtiyaçlarını karşılamak için özelleştirilmiş damper
                      çözümleri sunuyoruz.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="mil-divider mil-mb-60" />
              {/* <div className="mil-pagination mil-hidden-arrows">
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-prev mil-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="mil-h6">Prev</span>
                  </div>
                </div>
                <ul className="mil-pagination-numbers">
                  <li className="mil-active">
                    <a href="#.">1</a>
                  </li>
                  <li>
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li>
                </ul>
                <div className="mil-slider-nav">
                  <div className="mil-slider-btn-next mil-blog-next">
                    <span className="mil-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-lg-4 col-xl-3 mil-mb-120">
              <div className="mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Son Postlar</h5>
                <Link
                  href="/enerji-ve-surdurebilirlik"
                  className="mil-post-sm mil-mb-15"
                >
                  <div className="mil-cover-frame">
                    <img
                      src="uploads/enerji verimliliği_1000x667.png"
                      alt="cover"
                    />
                  </div>
                  <div className="mil-description">
                    <h6>
                      Enerji Verimliliği ve Sürdürülebilirlik: Fortek
                      Damperlerin Rolü
                    </h6>
                  </div>
                </Link>
                <Link
                  href="/damper-inovasyon"
                  className="mil-post-sm mil-mb-15"
                >
                  <div className="mil-cover-frame">
                    <img
                      src="uploads/mühendislik çözümleri_1000x667.png"
                      alt="cover"
                    />
                  </div>
                  <div className="mil-description">
                    <h6>
                      Damper Sistemlerinde İnovasyon: Fortek'in Mühendislik
                      Çözümleri
                    </h6>
                  </div>
                </Link>
                <Link
                  href="/ozellestirilmis-damper"
                  className="mil-post-sm mil-mb-15"
                >
                  <div className="mil-cover-frame">
                    <img
                      src="uploads/endüstriyel tesisler_1000x667.png"
                      alt="cover"
                    />
                  </div>
                  <div className="mil-description">
                    <h6>
                      Endüstriyel Tesisler için Özelleştirilmiş Damper
                      Çözümleri: Fortek Farkı
                    </h6>
                  </div>
                </Link>
              </div>
              <div className="mil-divider mil-mb-60" />
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  );
};
export default Blog;
