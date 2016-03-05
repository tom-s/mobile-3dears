import React from 'react'

const Pricing = (props) => {
  return (
    <section className="Pricing">
      <div className="container">
        <h2 className="Title">Join today for a one-time price</h2>
        <div className="row ">
          <div className="Pricing_box">
            <div className="Pricing_header col-xs-12">
              <div className="Price_text"><span className="Currency">$</span><span className="Amount">12</span></div>
            </div>
            <div className="Pricing_body col-xs-12">
              <ul className="List">
                <li><hr /></li>
                <li><i className="glyphicon glyphicon-ok"> </i>&nbsp;  No monthly fee</li>
                <li><hr /></li>
                <li><i className="glyphicon glyphicon-ok"> </i>&nbsp;  Free access to all future content</li>
                <li><hr /></li>
                <li><i className="glyphicon glyphicon-ok"> </i>&nbsp;  Detailed user statistics</li>
              </ul>
            </div>
            <div className="Pricing_footer col-xs-12">
              <a href="/sign_up" className="btn btn-danger btn-join">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing