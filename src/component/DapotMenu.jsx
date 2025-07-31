export function SubmenuGrid({ items = [], activeIndex, setActiveIndex }) {
  return (
    <div className="d-flex flex-wrap gap-2 submenu-animate">
      {items.map((item, index) => (
        <div
          key={index}
          className={`border rounded p-3 text-center flex-grow-1 submenu-item ${
            activeIndex === index ? 'bg-light border-primary' : ''
          }`}
          style={{
            minWidth: '120px',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out'
          }}
          onClick={() => setActiveIndex(index)}
        >
          <span className="fw-semibold">{item}</span>
        </div>
      ))}
    </div>
  );
}
