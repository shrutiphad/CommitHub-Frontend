import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center mb-4">
        <h2>The Investo Universe</h2>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center align-items-center">
        
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/smallcaseLogo.png"
            alt="Smallcase" 
            width="80%"
            className="img-fluid mb-2"
          />
          <p className="text-muted text-small">
            Thematic investment platform
          </p>
        </div>

        
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/streaklogo.png"
            alt="Streak" width="60%"
            className="img-fluid mb-2"
          />
          <p className="text-muted text-small">
            Algo & strategy platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-2"
          />
          <p className="text-muted text-small">
            Options trading platform
          </p>
        </div>

       
        <div className="col-4 p-3 mt-5">
          <img
            src="/media/InvestoFundhouse.png"
            alt="Investo Fund House"
            width="40%"
            className="img-fluid mb-2"
          />
          <p className="text-muted text-small">
            Asset management
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/goldenPiLogo.png"
            alt="GoldenPi"
            className="img-fluid mb-2"
          />
          <p className="text-muted text-small">
            Bonds trading platform
          </p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img
            src="/media/dittoLogo.png"
            alt="Ditto"
            width="50%"
            className="img-fluid mb-2"
          />
          <p className="text-muted text-small">
            Insurance
          </p>
        </div>
      </div>

      <div className="row text-center mt-5">
        <div className="col">
          <button className="btn btn-primary px-4">
            Sign up now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
