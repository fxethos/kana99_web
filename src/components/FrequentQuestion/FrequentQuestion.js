import React from 'react';
import {  Slide, Zoom } from "react-awesome-reveal";
import './FrequentQuestion.scss';
import FAQs from '../../content/FAQ';

const FrequentQuestion = () => {
  return (
    <React.Fragment>
      <div className="container-fluid FAQ_block">
        <div className="container">
          <Slide direction="left" triggerOnce="true">
            <div className="row">
              <div className="col-md-12 mb-5 text-center">
                <h3><b>FREQUENTLY ASKED QUESTIONS</b></h3>
              </div>
            </div>
          </Slide>
          <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
            {FAQs.map((faq, index) => {
              return (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                      <Zoom>
                      <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`}>
                        <span className="question">Q</span> {faq.question}
                      </a>
                      </Zoom>
                    </h4>
                  </div>
                  <div id={`collapse${index}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default FrequentQuestion;
