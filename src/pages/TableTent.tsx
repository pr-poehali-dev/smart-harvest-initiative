export default function TableTent() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700;800&family=Montserrat:wght@400;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          background: #e0e0e0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 40px;
          min-height: 100vh;
        }

        .page {
          width: 148mm;
          min-height: 210mm;
          background: #fdf9f0;
          font-family: 'Montserrat', sans-serif;
          color: #1a1a1a;
          border: 3px solid #1a1a1a;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 10;
        }

        .header {
          background: #1a1a1a;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 3px solid #1a1a1a;
        }

        .logo {
          font-family: 'Unbounded', sans-serif;
          font-weight: 800;
          font-size: 20px;
          color: white;
          letter-spacing: -1px;
        }

        .logo span {
          color: #ff4d00;
        }

        .tagline {
          font-size: 9px;
          font-weight: 700;
          color: #bff000;
          text-transform: uppercase;
          letter-spacing: 1px;
          text-align: right;
          line-height: 1.3;
        }

        .section-title {
          font-family: 'Unbounded', sans-serif;
          font-size: 22px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 16px 20px 12px;
          border-bottom: 3px solid #1a1a1a;
          background: #bff000;
          line-height: 1;
        }

        .items {
          flex: 1;
          padding: 0;
        }

        .item {
          padding: 14px 20px;
          border-bottom: 2px solid #1a1a1a;
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .item:last-child {
          border-bottom: none;
        }

        .item-num {
          font-family: 'Unbounded', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #ff4d00;
          line-height: 1;
          flex-shrink: 0;
          width: 30px;
        }

        .item-body {
          flex: 1;
        }

        .item-name {
          font-weight: 800;
          font-size: 13px;
          text-transform: uppercase;
          line-height: 1.2;
          margin-bottom: 5px;
        }

        .item-desc {
          font-size: 11px;
          color: #555;
          line-height: 1.5;
          font-weight: 500;
        }

        .footer {
          background: #1a1a1a;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 3px solid #1a1a1a;
          margin-top: auto;
        }

        .footer-text {
          font-size: 10px;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .footer-badge {
          background: #ff4d00;
          color: white;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 4px 10px;
          border: 2px solid white;
          letter-spacing: 1px;
        }

        @media print {
          body {
            background: white;
            padding: 0;
            margin: 0;
          }
          .page {
            border: none;
            width: 148mm;
            min-height: 210mm;
          }
          .no-print { display: none; }
        }
      `}</style>

      <div className="no-print" style={{ position: "fixed", top: 20, right: 20, zIndex: 100, display: "flex", gap: 10 }}>
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
        <div className="grain" />

        <div className="section-title">МЕНЮ НА ПЕРЕКУС</div>

        <div className="items">
          <div className="item">
            <div className="item-num">01</div>
            <div className="item-body">
              <div className="item-name">Сэндвич с курицей / лососем / креветкой</div>
              <div className="item-desc">Тостовый хлеб, огурец, творожный сыр, фирменный соус</div>
            </div>
          </div>

          <div className="item">
            <div className="item-num">02</div>
            <div className="item-body">
              <div className="item-name">Бургер с креветкой</div>
              <div className="item-desc">Булочки, фирменный соус, креветки, руккола, помидор, бекон, майонез</div>
            </div>
          </div>

          <div className="item">
            <div className="item-num">03</div>
            <div className="item-body">
              <div className="item-name">Колбасоны со свининой</div>
              <div className="item-desc">Обжаренные свиные колбаски</div>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="footer-text" style={{ color: "#999" }}>SushiМясо © 2024</div>
          <div className="footer-badge">Спроси официанта</div>
        </div>
      </div>
    </>
  );
}