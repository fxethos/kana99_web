import React from "react";
import "./ScoreboardWK.scss";

function ScoreboardWK() {
  return (
    <div>
      <table class="rwd-table">
        <thead>
          <tr>
            <th>
              Players
              <span className="p-1">
                <i className="fas fa-chevron-down"></i>
              </span>
            </th>
            <th>
              Points
              <span className="p-1">
                <i className="fas fa-chevron-down"></i>
              </span>
            </th>
            <th>
              Credits
              <span className="p-1">
                <i className="fas fa-chevron-down"></i>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">
              <div className="credit_value"> 1</div>
            </td>
          </tr>
          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">
              <div className="credit_value"> 1</div>
            </td>
          </tr>

          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">
              <div className="credit_value"> 1</div>
            </td>
          </tr>

          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">
              <div className="credit_value"> 1</div>
            </td>
          </tr>

          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">1</td>
          </tr>
          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">1</td>
          </tr>
          <tr>
            <td data-th="Players">
              <div class="info">
                <div class="avatar">
                  <img src="//via.placeholder.com/200" alt="doc name" />
                </div>
                <div class="details">
                  <div class="name">MS Wade</div>
                  <div class="meta-info">
                    <span class="sp">AUS</span>
                  </div>
                </div>
              </div>
            </td>
            <td data-th="Points">
              <span class="star_bg">
                <span>
                  <i className="fas fa-star"></i>
                  <span className="star_value"> 0</span>
                </span>
              </span>
            </td>
            <td data-th="Credits">1</td>
          </tr>
        </tbody>
      </table>

      <div classs="row justify-content-center align-items-center">
        <div class="col-6 align-self-center m-auto">
          <button type="button" class="btn btn-primary custom_red_btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScoreboardWK;
