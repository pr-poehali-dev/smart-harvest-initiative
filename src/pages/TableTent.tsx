export default function TableTent() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;800;900&family=Montserrat:wght@400;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #2a2a2a;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px;
          min-height: 100vh;
        }

        .page {
          width: 148mm;
          height: 210mm;
          font-family: 'Montserrat', sans-serif;
          color: white;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #1a1a1a;
        }

        /* Фоновая текстура из крупных букв */
        .bg-text {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
          opacity: 0.06;
          line-height: 0.85;
        }

        .bg-text span {
          font-family: 'Unbounded', sans-serif;
          font-weight: 900;
          font-size: 52px;
          text-transform: uppercase;
          color: white;
          white-space: nowrap;
          letter-spacing: -2px;
        }

        /* Акцентная полоса сверху */
        .top-bar {
          background: #ff4d00;
          height: 12px;
          width: 100%;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        /* Заголовок */
        .title-block {
          padding: 20px 24px 16px;
          border-bottom: 2px solid rgba(255,255,255,0.15);
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .title-label {
          font-size: 11px;
          font-weight: 700;
          color: #ff4d00;
          text-transform: uppercase;
          letter-spacing: 3px;
          margin-bottom: 6px;
        }

        .title-main {
          font-family: 'Unbounded', sans-serif;
          font-size: 30px;
          font-weight: 900;
          text-transform: uppercase;
          line-height: 0.95;
          color: white;
        }

        .title-main em {
          font-style: italic;
          color: #bff000;
          font-family: 'Montserrat', sans-serif;
          font-weight: 800;
        }

        /* Блоки блюд */
        .items {
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }

        .item {
          flex: 1;
          padding: 18px 24px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
        }

        .item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: transparent;
        }

        .item:nth-child(1)::before { background: #ff4d00; }
        .item:nth-child(2)::before { background: #bff000; }
        .item:nth-child(3)::before { background: #2d31fa; }

        .item-num {
          font-family: 'Unbounded', sans-serif;
          font-size: 11px;
          font-weight: 800;
          color: rgba(255,255,255,0.3);
          letter-spacing: 2px;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .item-name {
          font-weight: 800;
          font-size: 17px;
          text-transform: uppercase;
          line-height: 1.15;
          margin-bottom: 8px;
          color: white;
          letter-spacing: -0.3px;
        }

        .item-desc {
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
          font-weight: 500;
        }

        /* Футер */
        .footer {
          background: #ff4d00;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .footer-logo {
          font-family: 'Unbounded', sans-serif;
          font-weight: 900;
          font-size: 16px;
          color: white;
          letter-spacing: -1px;
        }

        .footer-hint {
          font-size: 10px;
          font-weight: 700;
          color: rgba(255,255,255,0.8);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        @media print {
          body { background: white; padding: 0; margin: 0; }
          .page { width: 148mm; height: 210mm; }
          .no-print { display: none; }
        }
      `}</style>

      <div className="no-print" style={{ position: "fixed", top: 20, right: 20, zIndex: 100 }}>
        <button
          onClick={() => window.print()}
          style={{
            background: "#ff4d00",
            color: "white",
            border: "3px solid #1a1a1a",
            boxShadow: "4px 4px 0 #1a1a1a",
            padding: "10px 20px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: 13,
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Печать
        </button>
      </div>

      <div className="page">

        {/* Фоновый текст-текстура */}
        <div className="bg-text">
          <span>СЭНДВИЧ</span>
          <span>БУРГЕР</span>
          <span>КОЛБАСОНЫ</span>
          <span>СЭНДВИЧ</span>
          <span>БУРГЕР</span>
          <span>КОЛБАСОНЫ</span>
        </div>

        <div className="top-bar" />

        <div className="title-block">
          <div className="title-label">SushiМясо — меню</div>
          <div className="title-main">МЕНЮ<br />НА <em>ПЕРЕКУС</em></div>
        </div>

        <div className="items">
          <div className="item">
            <div className="item-num">— 01</div>
            <div className="item-name">Сэндвич с курицей /<br />лососем / креветкой</div>
            <div className="item-desc">Тостовый хлеб, огурец, творожный сыр, фирменный соус</div>
          </div>

          <div className="item">
            <div className="item-num">— 02</div>
            <div className="item-name">Бургер с креветкой</div>
            <div className="item-desc">Булочки, фирменный соус, креветки, руккола,<br />помидор, бекон, майонез</div>
          </div>

          <div className="item">
            <div className="item-num">— 03</div>
            <div className="item-name">Колбасоны<br />со свининой</div>
            <div className="item-desc">Обжаренные свиные колбаски</div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-logo">SUSHI*МЯСО</div>
          <div className="footer-hint">Спроси официанта</div>
        </div>
      </div>
    </>
  );
}
