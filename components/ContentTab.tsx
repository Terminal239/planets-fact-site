const ContentTab = () => {
  return (
    <nav className="content-tab">
      <ul className="between">
        <li className="selected">
          <button>
            <span>01</span> Overview
          </button>
        </li>
        <li>
          <button>
            <span>02</span> Structure
          </button>
        </li>
        <li>
          <button>
            <span>03</span> Surface
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ContentTab;
