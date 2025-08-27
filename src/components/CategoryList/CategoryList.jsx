import React, { useEffect, useRef } from "react";
import "./CategoryList.css";
import { categories } from "../../data/workData";
import { NavLink } from "react-router-dom";

const CategoryList = () => {
  const trackRef = useRef(null);
  const wrapRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const currentRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    const cards = Array.from(track.children);
    const prev = prevRef.current;
    const next = nextRef.current;

    const isMobile = () => matchMedia("(max-width:767px)").matches;

    function center(i) {
      const card = cards[i];
      const axis = isMobile() ? "top" : "left";
      const size = isMobile() ? "clientHeight" : "clientWidth";
      const start = isMobile() ? card.offsetTop : card.offsetLeft;
      wrap.scrollTo({
        [axis]: start - (wrap[size] / 2 - card[size] / 2),
        behavior: "smooth",
      });
    }

    function toggleUI(i) {
      cards.forEach((c, k) => c.toggleAttribute("active", k === i));
      prev.disabled = i === 0;
      next.disabled = i === cards.length - 1;
    }

    function activate(i, scroll) {
      if (i === currentRef.current) return;
      currentRef.current = i;
      toggleUI(i);
      if (scroll) center(i);
    }

    function go(step) {
      activate(Math.min(Math.max(currentRef.current + step, 0), cards.length - 1), true);
    }

    prev.onclick = () => go(-1);
    next.onclick = () => go(1);

    // Keyboard controls
    const keyHandler = (e) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };
    window.addEventListener("keydown", keyHandler);

    // Hover + click activation
    cards.forEach((card, i) => {
      card.addEventListener("mouseenter", () => {
        if (matchMedia("(hover:hover)").matches) activate(i, true);
      });
      card.addEventListener("click", () => activate(i, true));
    });

    // Touch swipe
    let sx = 0, sy = 0;
    track.addEventListener("touchstart", (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    });
    track.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60)
        go((isMobile() ? dy : dx) > 0 ? -1 : 1);
    });

    window.addEventListener("resize", () => center(currentRef.current));

    // Initialize
    toggleUI(0);
    center(0);

    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  }, []);

  return (
    <section className="category-section">
      <div className="head">
        <h2>Our Categories</h2>

        <div className="controls">
          <button ref={prevRef} className="nav-btn" aria-label="Prev">
            ‹
          </button>
          <button ref={nextRef} className="nav-btn" aria-label="Next">
            ›
          </button>
        </div>
      </div>

      <div className="slider" ref={wrapRef}>
        <div className="track" ref={trackRef}>
          {categories.map((cat) => (
            <article key={cat.id} className="project-card">
              <img className="project-card__bg" src={cat.bg} alt={cat.title} />
              <div className="project-card__content">
                <img className="project-card__thumb" src={cat.thumb} alt={cat.title} />
                <div>
                  <h3 className="project-card__title">{cat.title}</h3>
                  <p className="project-card__desc">{cat.desc}</p>
                  <NavLink to="/shop" end className="project-card__btn">
                    Details
                  </NavLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
