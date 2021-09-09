import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/free-brands-svg-icons";

// import Sit from '../../SitDraco';
// Components
// import Glitch from "../glitch";

//Style
import "../style/_swiper.scss";
// import "../../style/glitch.scss";

//Images

// Data
import slides from "../data/slides.json";

console.clear();

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);


  return (
    <div
      key={slide.id}
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >    
            <div
              className="slideContent"
              // style={{
              //   backgroundImage: `url('${slide.iframe}')`
              // }}
            >
            {/* <Glitch /> */}
            
              <div className="font-face-gm">
                      <div className="slideContentIframe">

                          <div className="slideContentInner">

                              {/* SLIDER CARD 0 */}
                              <div className="card0">
                                <h2 className="slideWelcome">{slide.welcome}</h2>
                                <h3 className="slideName">{slide.name}</h3>
                              </div>
                                <div className="iframeWrapper">
                                  <iframe
                                    className="slideIframe"
                                    src={slide.iframe}
                                    backgroundColor="red"
                                    title="My Avitar"
                                    frameBorder="0" 
                                    scrolling="no" 
                                    allowFullScreen="false"
                                    allowtransparency="true">
                                  </iframe>
                                </div>
                             
                            
                                {/* SLIDER CARD 1 */}
                              <div className="card1">
                                <h3 className="slideUserName">{slide.userName}</h3>
                                  <p className="slideLastLogin">{slide.lastLogin}</p>
                                  <p className="slideWinnings">{slide.winnings}</p>
                                  <p className="slideLastDeposit">{slide.lastDeposit}</p>
                                  <p className="slideTips">{slide.tips}</p>
                              </div>

                                {/* SLIDER CARD 2 */}
                              <div className="card2">
                                <h2 className="fundsTitle">{slide.fundsTitle}</h2>
                                <p className="fundingSource">{slide.fundingSource}</p>
                                <div className="slideIcon">
                                  <div className="bitCoin">
                                    <FontAwesomeIcon
                                    className="slideIcon"
                                    icon={require("@fortawesome/free-brands-svg-icons")[slide.icon0]}
                                    />
                                  </div>
                                  <div className="payPal">
                                    <FontAwesomeIcon
                                    className="slideIcon"
                                    icon={require("@fortawesome/free-brands-svg-icons")[slide.icon1]}
                                    />
                                  </div>
                                  <div className="visa">
                                    <FontAwesomeIcon
                                    className="slideIcon"
                                    icon={require("@fortawesome/free-brands-svg-icons")[slide.icon2]}
                                    />
                                  </div>
                                </div>
                                
                                <h3 className="slideCard">{slide.card}</h3>
                                <p className="slideCardOnFile">
                                  <h6>{slide.cardOnFile0}</h6>
                                  <h6>{slide.cardOnFile1}</h6>
                                  <h6>{slide.cardOnFile2}</h6>
                                  <p>{slide.newCardDetails}</p>
                                </p>
                                <p className="slideFunds">{slide.funds}</p>
                                <p className="fundsAmount">{slide.fundsAmount}</p>
                                <h2 className="addAmount">{slide.addAmount}</h2>
                              </div>

                                {/* SLIDER CARD 3 */}
                              <div className="card3">
                                <h2 className="gamesTitle">{slide.gamesTitle}</h2>
                                <p className="slideMostGames">{slide.mostGames}</p>
                                <p className="slideMostWins">{slide.mostWins}</p>
                                <p className="slideLastWin">{slide.lastWin}</p>
                              </div>
                                
                                {/* SLIDER CARD 4 */}
                              <div className="card4">
                                <h2 className="blackjackTitle">{slide.blackjackTitle}</h2>
                              </div>
                                  <iframe
                                    className="slideIframe2"
                                    src={slide.iframe2}
                                    backgroundColor="red"
                                    title="My Avitar"
                                    frameBorder="0" 
                                    scrolling="no" 
                                    allowFullScreen="false"
                                    allowtransparency="true">
                                  </iframe>
                                
                                {/* SLIDER CARD 5 */}
                              <div className="card5">
                                <h2 className="pokerTitle">{slide.pokerTitle}</h2>
                              </div>
                                  <iframe
                                    className="slideIframe3"
                                    src={slide.iframe3}
                                    backgroundColor="red"
                                    title="My Avitar"
                                    frameBorder="0" 
                                    scrolling="no" 
                                    allowFullScreen="false"
                                    allowtransparency="true">
                                  </iframe>
                      </div>
                  </div>
              </div>
            </div>
        
    </div>
  );
}



  function Slides() {
  
    const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  
    return (
        
          <div className="slides">
            <button className="shadowfilter" onClick={() => dispatch({ type: "PREV" })}>›</button>
  
              {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={slide.id} />;
              })}
            <button className="shadowfilter" onClick={() => dispatch({ type: "NEXT" })}>‹</button>
          </div>
    )
  }
  
    export default Slides;