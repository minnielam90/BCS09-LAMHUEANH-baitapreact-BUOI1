import React, { Component } from "react";
import {
  Collection,
  CloudDownload,
  CardHeading,
  Bootstrap,
  Code,
  PatchCheck,
} from "react-bootstrap-icons";

export default class Item extends Component {
  render() {
    return (
      <div>
        <div className="item pt-4">
          <div className="container px-lg-5">
            <div className="row gx-lg-5">
              {/* fresh new layout */}
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      className="item_detail bg-primary bg-gradient text-white rounded-3 mb-4 text-center fs-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "50px",
                        marginTop: "-30px",
                      }}
                    >
                      <Collection />
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <h2 className="fs-4 fw-bold">Fresh new layout</h2>
                      <p className="mb-0">
                        With Bootstrap 5, we've created a fresh new layout for
                        this template!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* free to download */}
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      className="item_detail bg-primary bg-gradient text-white rounded-3 mb-4 text-center fs-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "50px",
                        marginTop: "-30px",
                      }}
                    >
                      <CloudDownload />
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <h2 className="fs-4 fw-bold">Free to download</h2>
                      <p className="mb-0">
                        As always, Start Bootstrap has a powerful collectin of
                        free templates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Jumbotron hero header */}
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      className="item_detail bg-primary bg-gradient text-white rounded-3 mb-4 text-center fs-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "50px",
                        marginTop: "-30px",
                      }}
                    >
                      <CardHeading />
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <h2 className="fs-4 fw-bold">Jumbotron hero header</h2>
                      <p className="mb-0">
                        The heroic part of this template is the jumbotron hero
                        header!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature boxes */}
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      className="item_detail bg-primary bg-gradient text-white rounded-3 mb-4 text-center fs-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "50px",
                        marginTop: "-30px",
                      }}
                    >
                      <Bootstrap />
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <h2 className="fs-4 fw-bold">Feature boxes</h2>
                      <p className="mb-0">
                        We've created some custom feature boxes using Bootstrap
                        icons!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple clean code */}
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      className="item_detail bg-primary bg-gradient text-white rounded-3 mb-4 text-center fs-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "50px",
                        marginTop: "-30px",
                      }}
                    >
                      <Code />
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <h2 className="fs-4 fw-bold">Simple clean code</h2>
                      <p className="mb-0">
                        We keep our dependencies up to date and squash bugs as
                        they come!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* A name you trust */}
              <div className="col-lg-6 col-xxl-4 mb-5">
                <div className="card bg-light border-0 h-100">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <div
                      className="item_detail bg-primary bg-gradient text-white rounded-3 mb-4 text-center fs-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        lineHeight: "50px",
                        marginTop: "-30px",
                      }}
                    >
                      <PatchCheck />
                    </div>
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                      <h2 className="fs-4 fw-bold">A name you trust</h2>
                      <p className="mb-0">
                        Start Bootstrap has been the leader in free Bootstrap
                        templates since 2013!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
