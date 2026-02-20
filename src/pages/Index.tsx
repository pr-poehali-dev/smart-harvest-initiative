export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">SUSHI*МЯСО</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Адреса</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ДВА МИРА,
              <br />
              ОДИН <span>ВКУС</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Японская точность и мясная сочность под одной крышей. Суши от шефа и стейки на углях — выбирай своё или бери всё сразу.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Заказать
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ background: "url('https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80') center center / cover" }}>
            <div className="sticker">
              СВЕЖАК
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #СУШИ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              🔥 МЯСО
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * СУШИ КОТОРЫЕ РВУТ * МЯСО НА УГЛЯХ * ДВА МЕНЮ — ОДНО МЕСТО * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЙ ФЬЮЖН В ГОРОДЕ *
            СУШИ КОТОРЫЕ РВУТ * МЯСО НА УГЛЯХ * ДВА МЕНЮ — ОДНО МЕСТО * ОТКРЫТЫ ДО 2:00 * ЛУЧШИЙ ФЬЮЖН В ГОРОДЕ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ВЫБОР ШЕФА</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Суши зона */}
            <div className="menu-card">
              <span className="menu-tag">Хит суши</span>
              <img
                src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Спайси Лосось"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Спайси Лосось</h3>
                  <span className="price">890 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  8 роллов с лососем горячего копчения, авокадо, острым майо и хрустящим темпурой.
                </p>
              </div>
            </div>

            {/* Мясная зона */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--primary)", color: "white" }}>
                Хит мясо
              </span>
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Рибай на углях"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Рибай на углях</h3>
                  <span className="price">2 400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Мраморная говядина 300г, угольный гриль, соус из юдзу и имбиря.</p>
              </div>
            </div>

            {/* Фьюжн */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Фьюжн
              </span>
              <img
                src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Вагю-ролл"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Вагю-ролл</h3>
                  <span className="price">1 600 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Ролл с тонкими слайсами вагю, трюфельным маслом и хрустящим луком. Два мира в одном укусе.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding" style={{ borderTop: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">МЕНЮ НА ПЕРЕКУС</h2>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Сэндвич"
              />
              <div className="menu-card-body">
                <h3>Сэндвич с курицей / лососем / креветкой</h3>
                <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
                  Тостовый хлеб, огурец, творожный сыр, фирменный соус.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Бургер с креветкой"
              />
              <div className="menu-card-body">
                <h3>Бургер с креветкой</h3>
                <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
                  Булочки, фирменный соус, креветки, руккола, помидор, бекон, майонез.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Колбасоны"
              />
              <div className="menu-card-body">
                <h3>Колбасоны со свининой</h3>
                <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>
                  Обжаренные свиные колбаски.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ДВА МЕНЮ. ОДИН ВАЙБ.</h2>
            <p className="vibe-text">
              В одном зале — японская лаконичность суши-бара и тёплый угар мясного гриля. Мы не делаем компромиссов: каждая зона — это отдельный мир с полноценной кухней. Приходи за суши, уходи с рибаем. Или наоборот.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @SUSHI.MYASO
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Суши"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1558030006-450675393462?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Мясо"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1617196034183-421b4040ed20?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Роллы"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Стейк"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">SUSHI*МЯСО</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Место, где Япония встречает мясной гриль. Два меню, один адрес, ноль компромиссов.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню суши
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню мясо
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 12:00 – 02:00</li>
            <li>Сб–Вс: 11:00 – 02:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:+71234567890" style={{ color: "inherit", textDecoration: "none" }}>
                +7 (123) 456-78-90
              </a>
            </li>
            <li>
              <a href="mailto:hello@sushimyaso.ru" style={{ color: "inherit", textDecoration: "none" }}>
                hello@sushimyaso.ru
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}