import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {/* Account Opening */}
        <div className="col-4 p-4">
          <h5>
            <i className="fa fa-plus-circle me-2"></i>Account Opening
          </h5>
          <a href="">Online Account Opening</a><br />
          <a href="">Offline Account Opening</a><br />
          <a href="">Company, Partnership and HUF Account</a><br />
          <a href="">NRI Account Opening</a><br />
          <a href="">Charges at Investo</a><br />
          <a href="">Investo IDFC FIRST Bank 3-in-1 Account</a><br />
          <a href="">Getting Started</a>
        </div>

        {/* Your Investo Account */}
        <div className="col-4 p-4">
          <h5>
            <i className="fa fa-user-circle me-2"></i>Your Investo Account
          </h5>
          <a href="">Login Credentials</a><br />
          <a href="">Account Modification and Segment Addition</a><br />
          <a href="">DP ID and bank details</a><br />
          <a href="">Your Profile</a><br />
          <a href="">Transfer and conversion of shares</a>
        </div>

        {/* Trading & Platforms */}
        <div className="col-4 p-4">
          <h5>
            <i className="fa fa-bar-chart me-2"></i>Your Investo Account
          </h5>
          <a href="">Margin/Leverage, Product and Order types</a><br />
          <a href="">Kite Web and Mobile</a><br />
          <a href="">Trading FAQs</a><br />
          <a href="">Corporate Actions</a><br />
          <a href="">Sentinel</a><br />
          <a href="">Kite API</a><br />
          <a href="">Pi and other platforms</a><br />
          <a href="">Stockreports+</a><br />
          <a href="">GTT</a>
        </div>

        {/* Funds */}
        <div className="col-4 p-4">
          <h5>
            <i className="fa fa-credit-card me-2"></i>Funds
          </h5>
          <a href="">Adding Funds</a><br />
          <a href="">Fund Withdrawal</a><br />
          <a href="">eMandates</a><br />
          <a href="">Adding Bank Accounts</a>
        </div>

        {/* Console */}
        <div className="col-4 p-4">
          <h5>
            <i className="fa fa-desktop me-2"></i>Console
          </h5>
          <a href="">Reports</a><br />
          <a href="">Ledger</a><br />
          <a href="">Portfolio</a><br />
          <a href="">60 Day Challenge</a><br />
          <a href="">IPO</a><br />
          <a href="">Referral Program</a>
        </div>

        {/* Coin */}
        <div className="col-4 p-4">
          <h5>
            <i className="fa fa-coins me-2"></i>Coin
          </h5>
          <a href="">Understanding Mutual Funds</a><br />
          <a href="">About Coin</a><br />
          <a href="">Buying and Selling through Coin</a><br />
          <a href="">Starting an SIP</a><br />
          <a href="">Managing your Portfolio</a><br />
          <a href="">Coin App</a><br />
          <a href="">Moving to Coin</a><br />
          <a href="">Government Securities</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
