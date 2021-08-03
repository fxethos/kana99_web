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
         
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingTwo">
              <h4 className="panel-title">
                <Zoom>
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <span className="question">Q</span> Is Kana99 available in my state?
                </a>
                </Zoom>
              </h4>
            </div>
            <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
              <div className="panel-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading" role="tab" id="headingThree">
              <h4 className="panel-title">
              <Zoom>
                <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <span className="question">Q</span> Why can’t I place an entry?
                </a>
                </Zoom>
              </h4>
            </div>
            <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
              <div className="panel-body">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

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

            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingTwo">
                <h4 className="panel-title">
                  <Zoom>
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <span className="question">Q</span> Is Kana99 available in my state?
                  </a>
                  </Zoom>
                </h4>
              </div>
              <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                <div className="panel-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className="panel panel-default">
              <div className="panel-heading" role="tab" id="headingThree">
                <h4 className="panel-title">
                <Zoom>
                  <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span className="question">Q</span> Why can’t I place an entry?
                  </a>
                  </Zoom>
                </h4>
              </div>
              <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                <div className="panel-body">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>

  )
}

export default FrequentQuestion;
