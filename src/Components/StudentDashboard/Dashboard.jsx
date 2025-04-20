"use client";
import React from "react";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <header className={styles.container77}>
        <div className={styles.headerGroup}>
          <div className={styles.logoGroup}>
            <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/99f32d8565a55147a30aeb847fe7f5ad45a0fed6?placeholderIfAbsent=true" alt="Logo" className={styles.img} />
            <h1 className={styles.internQuest}>InternQuest</h1>
          </div>
          <nav className={styles.headerMenu6}>
            <a href="#" className={styles.frame}>
              Home
            </a>
            <a href="#" className={styles.frame2}>
              <span className={styles.internship}>Internship</span>
              <div className={styles.rectangle} />
            </a>
          </nav>
        </div>
        <div className={styles.userNav}>
          <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9a24457cfb6e3807ac4f3ad2dc1b17794b951aed?placeholderIfAbsent=true" alt="Notification" className={styles.img2} />
          <div className={styles.userProfile}>
            <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/f90aafbc04ea79ca5cc87df3cf637637d9add5bd?placeholderIfAbsent=true" alt="User" className={styles.img3} />
            <span className={styles.amandaSmith}>Amanda Smith</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/c423625d5bb2d090368751bc7b17634a88ee3c24?placeholderIfAbsent=true" alt="Dropdown" className={styles.img4} />
          </div>
        </div>
      </header>

      <main className={styles.container}>
        <div className={styles.mainLayout}>
          <aside className={styles.column}>
            <div className={styles.searchSection}>
              <h2 className={styles.browse}>BROWSE</h2>
              <div className={styles.textbox20}>
                <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/f3e14de49b89c98d303bab9db76d991484b2a3f5?placeholderIfAbsent=true" alt="Search" className={styles.img5} />
                <input
                  type="text"
                  placeholder="Search"
                  className={styles.search}
                />
              </div>
            </div>
          </aside>

          <aside className={styles.column2}>
            <section className={styles.container80}>
              <div className={styles.userInfo}>
                <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/b57660d970a430751bc00d3ffb770d2331ec1a74?placeholderIfAbsent=true" alt="Profile" className={styles.img6} />
                <div className={styles.userDetails}>
                  <h3 className={styles.username}>User name</h3>
                  <p className={styles.examplegmailcom}>example@gmail.com</p>
                </div>
              </div>

              <hr className={styles.img7} />

              <nav className={styles.sidebarMenu2}>
                <a href="#" className={styles.frame3}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/cd64881924191c38c5d40949fd04cb37c70a7203?placeholderIfAbsent=true" alt="Edit" className={styles.img8} />
                  <span className={styles.editprofile}>Edit profile</span>
                </a>
                <a href="#" className={styles.frame4}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/cbde743b585f36fee01d7af8bc21ea2923eaf387?placeholderIfAbsent=true" alt="Preferences" className={styles.img9} />
                  <span className={styles.preferences}>Preferences</span>
                </a>
              </nav>

              <hr className={styles.img10} />

              <div className={styles.themeToggle}>
                <div className={styles.sidebarMenu1}>
                  <button className={styles.frame5}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9f3f8d45e006e1bfe245127ab1af0c3ed1ffe223?placeholderIfAbsent=true"
                      alt="Night mode"
                      className={styles.img11}
                    />
                    <span className={styles.nightmode}>Night mode</span>
                  </button>
                </div>
                <div className={styles.switch1}>
                  <div className={styles.ellipse} />
                </div>
              </div>

              <hr className={styles.img12} />

              <nav className={styles.sidebarMenu3}>
                <a href="#" className={styles.frame6}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/fd68c9be037a78ebdde317dbe7e4f4077911f432?placeholderIfAbsent=true" alt="Help" className={styles.img13} />
                  <span className={styles.helpcenter}>Help center</span>
                </a>
              </nav>

              <nav className={styles.sidebarMenu4}>
                <button className={styles.frame7}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/c37eea86de5f1dea52c1d62afca835da83df28cc?placeholderIfAbsent=true" alt="Sign out" className={styles.img14} />
                  <span className={styles.signout}>Sign out</span>
                </button>
              </nav>
            </section>
          </aside>
        </div>
      </main>

      <section className={styles.container2}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentLayout}>
            <aside className={styles.column3}>
              <section className={styles.container79}>
                <header className={styles.filterHeader}>
                  <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/2b5b4eb4ea7b33b2b8d3cdf8d69a708af21e2c5c?placeholderIfAbsent=true" alt="Filters" className={styles.img15} />
                  <h2 className={styles.filters}>FILTERS</h2>
                </header>

                <hr className={styles.img16} />

                <div className={styles.filterSection}>
                  <div className={styles.filterGroup}>
                    <h3 className={styles.field}>Field</h3>
                    <div className={styles.checkbox6}>
                      <label className={styles.frame8}>
                        <input type="checkbox" className={styles.rectangle2} />
                        <span className={styles.nursing}>Nursing</span>
                      </label>
                      <label className={styles.frame9}>
                        <input
                          type="checkbox"
                          defaultChecked
                          className={styles.img17}
                        />
                        <span className={styles.engineering}>Engineering</span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.filterGroup}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9cd4ddba4468f63280f6be974cc46fa48108e703?placeholderIfAbsent=true" alt="Toggle" className={styles.img18} />
                    <div className={styles.checkbox8}>
                      <label className={styles.frame10}>
                        <input type="checkbox" className={styles.rectangle3} />
                        <span className={styles.computerScience}>
                          Computer Science
                        </span>
                      </label>
                      <label className={styles.frame11}>
                        <input
                          type="checkbox"
                          defaultChecked
                          className={styles.img19}
                        />
                        <span className={styles.multiMedia}>MultiMedia</span>
                      </label>
                    </div>
                  </div>
                </div>

                <hr className={styles.img20} />

                <div className={styles.filterSection}>
                  <div className={styles.filterGroup}>
                    <h3 className={styles.skills}>Skills</h3>
                    <div className={styles.checkbox7}>
                      <label className={styles.frame12}>
                        <input
                          type="checkbox"
                          defaultChecked
                          className={styles.img21}
                        />
                        <span className={styles.communication}>
                          Communication
                        </span>
                      </label>
                      <label className={styles.frame13}>
                        <input type="checkbox" className={styles.rectangle4} />
                        <span className={styles.problemSolving}>
                          Problem Solving
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className={styles.filterGroup}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9cd4ddba4468f63280f6be974cc46fa48108e703?placeholderIfAbsent=true" alt="Toggle" className={styles.img22} />
                    <div className={styles.checkbox9}>
                      <label className={styles.frame14}>
                        <input
                          type="checkbox"
                          defaultChecked
                          className={styles.img23}
                        />
                        <span className={styles.researchWriting}>
                          Research & Writing
                        </span>
                      </label>
                      <label className={styles.frame15}>
                        <input type="checkbox" className={styles.rectangle5} />
                        <span className={styles.msOffice}>MS Office</span>
                      </label>
                    </div>
                  </div>
                </div>

                <hr className={styles.img24} />
                <hr className={styles.img25} />

                <div className={styles.ratingSection}>
                  <header className={styles.ratingHeader}>
                    <h3 className={styles.rating}>Rating</h3>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9cd4ddba4468f63280f6be974cc46fa48108e703?placeholderIfAbsent=true" alt="Toggle" className={styles.img26} />
                  </header>
                  <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/1167d802205154a23ab911ea93a34352b59ee0db?placeholderIfAbsent=true" alt="5 stars" className={styles.img27} />
                  <div className={styles.ratingOption}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/97c0b19d7a942b7463cbf3b69250514003aee1a7?placeholderIfAbsent=true" alt="4 stars" className={styles.img28} />
                    <span className={styles.from4Stars}>from 4 stars</span>
                  </div>
                  <div className={styles.ratingOption}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/58a5742c92617b895d0a0c40b83641f9105e11ad?placeholderIfAbsent=true" alt="3 stars" className={styles.img29} />
                    <span className={styles.from3Stars}>from 3 stars</span>
                  </div>
                  <div className={styles.ratingOption}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/1f9d240f550cfb19e9002c600978d7e998c5170b?placeholderIfAbsent=true" alt="2 stars" className={styles.img30} />
                    <span className={styles.from2Stars}>from 2 stars</span>
                  </div>
                  <div className={styles.ratingOption}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/38bfc3bba3a2558035548c9c4d437da977405bf5?placeholderIfAbsent=true" alt="1 star" className={styles.img31} />
                    <span className={styles.from1Star}>from 1 star</span>
                  </div>
                </div>

                <hr className={styles.img32} />

                <button className={styles.button45}>Clear All</button>
              </section>
            </aside>

            <main className={styles.column4}>
              <section className={styles.listingSection}>
                <header className={styles.listingHeader}>
                  <h2 className={styles.internshipListings}>
                    Internship Listings
                  </h2>
                  <div className={styles.sortingGroup}>
                    <span className={styles.sortedBy}>Sorted By</span>
                    <select className={styles.dropdownButton3}>
                      <option>Most Relevant</option>
                    </select>
                  </div>
                </header>

                {/* Internship Cards */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                  <article key={index} className={styles.internshipCard}>
                    <div className={styles.cardLayout}>
                      <div className={styles.cardMain}>
                        <div className={styles.cardContent}>
                          <div className={styles.companyLogo}>
                            <img
                              src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9b2ca56e2072dab4128d6d3e1c9708199473ba9d?placeholderIfAbsent=true"
                              alt="Company"
                              className={styles.img33}
                            />
                          </div>
                          <div className={styles.jobInfo}>
                            <h3
                              className={
                                styles.internCybersecurityGovernanceRiskandComplianceStartAsap
                              }
                            >
                              Intern Cybersecurity, Governance, Risk, <br />
                              and Compliance (Start ASAP)
                            </h3>
                            <div className={styles.locationInfo}>
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/6e4800e7d0cab4b06ff4d1050ccc4c7b8bd6b143?placeholderIfAbsent=true"
                                alt="Company logo"
                                className={styles.img34}
                              />
                              <img
                                src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/e613a023346d2592f50c9adbe8e647fa11d55b45?placeholderIfAbsent=true"
                                alt="Location"
                                className={styles.img35}
                              />
                              <span className={styles.mandaluyong}>
                                Mandaluyong
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.cardActions}>
                        <button className={styles.button41}>
                          <span>Save</span>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/1dcf51dd53c649dc8d0838bc62497ff0859af23c?placeholderIfAbsent=true"
                            alt="Save"
                            className={styles.img36}
                          />
                        </button>
                        <button className={styles.button40}>INFO</button>
                      </div>
                    </div>
                  </article>
                ))}

                {/* Pagination */}
                <nav className={styles.pagination} aria-label="Page navigation">
                  <div className={styles.paginationGroup}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/a81e585229275d8309c44fcc4fbef72bb3a6de47?placeholderIfAbsent=true"
                      alt="Previous"
                      className={styles.img69}
                    />
                    <button className={styles.button69}>1</button>
                  </div>
                  <div className={styles.paginationGroup}>
                    <button className={styles.button62}>2</button>
                    <button className={styles.button63}>3</button>
                    <button className={styles.button64}>4</button>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/0b17a1c06627195eb6911bce2789976c29bd7ac9?placeholderIfAbsent=true" alt="More" className={styles.img70} />
                  </div>
                  <div className={styles.paginationGroup}>
                    <button className={styles.button66}>10</button>
                    <button className={styles.button67}>11</button>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/c991059eb530dd53e877113a5eee32b72326ce53?placeholderIfAbsent=true" alt="Next" className={styles.img71} />
                  </div>
                </nav>
              </section>
            </main>
          </div>
        </div>
      </section>

      <footer className={styles.container76}>
        <div className={styles.footerContent}>
          <div className={styles.footerLayout}>
            <div className={styles.column41}>
              <div className={styles.footerMain}>
                <div className={styles.companyInfo}>
                  <div className={styles.companyLogo}>
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/081fa67ceaed38af4d5ba454023ac94151a62a37?placeholderIfAbsent=true"
                      alt="InternQuest"
                      className={styles.img72}
                    />
                    <h2 className={styles.internQuest}>InternQuest</h2>
                  </div>
                  <address className={styles.contactInfo}>
                    <hr className={styles.img73} />
                    <div className={styles.addressGroup}>
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/9cccc395d0ed985ab9a2f28868d00068acdda9b6?placeholderIfAbsent=true"
                        alt="Location"
                        className={styles.img74}
                      />
                      <span className={styles.westStreetPortlandOr97205}>
                        1777 West Street, Portland, OR 97205
                      </span>
                    </div>
                    <div className={styles.contactGroup}>
                      <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/14b3b00e1a41e3dd7defb3ddd18a4c974144b20d?placeholderIfAbsent=true" alt="Phone" className={styles.img75} />
                      <span className={styles.css11234567893}>
                        (+1) 123 456 7893
                      </span>
                    </div>
                    <div className={styles.emailGroup}>
                      <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/2abdfb9761fadfbb677e2a147c6bca218c2c9e6b?placeholderIfAbsent=true" alt="Email" className={styles.img76} />
                      <span className={styles.nameemailcom}>
                        name@email.com
                      </span>
                    </div>
                  </address>
                </div>

                <nav className={styles.footerNav}>
                  <a href="#" className={styles.about}>
                    About
                  </a>
                  <a href="#" className={styles.services}>
                    Services
                  </a>
                  <a href="#" className={styles.projects}>
                    Projects
                  </a>
                  <a href="#" className={styles.contact}>
                    Contact
                  </a>
                </nav>

                <hr className={styles.img77} />

                <div className={styles.footerBottom}>
                  <span className={styles.brandInc}>© 2023 Brand, Inc.</span>
                  <span className={styles.separator}>•</span>
                  <a href="#" className={styles.privacy}>
                    Privacy
                  </a>
                  <span className={styles.separator}>•</span>
                  <a href="#" className={styles.terms}>
                    Terms
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.column42}>
              <div className={styles.ctaSection}>
                <hr className={styles.img79} />
                <div className={styles.ctaContent}>
                  <h2 className={styles.wouldliketotalkaboutyourfutureproject}>
                    Would like to talk about your future project?
                  </h2>
                  <button className={styles.button42}>
                    <span className={styles.getintouch}>Get in touch</span>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/a10161c246ee751e7e0cf16d54cc32994043ecb5?placeholderIfAbsent=true" alt="Arrow" className={styles.img80} />
                  </button>
                  <div className={styles.socialLinks}>
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/f5be95ad089f09873d2ae573c1bf739db158768e?placeholderIfAbsent=true" alt="Social" className={styles.img81} />
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/a9fed9726a474253b4c50cc809c64643088ce2ab?placeholderIfAbsent=true" alt="Social" className={styles.img82} />
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/2819b3aa37545932f1b48859a37c813b37c9233d?placeholderIfAbsent=true" alt="Social" className={styles.img83} />
                    <img src="https://cdn.builder.io/api/v1/image/assets/9397be3a9c734b2aa759b5c45301270f/64bb4994d54d997894ee649df913b2c9606917cb?placeholderIfAbsent=true" alt="Social" className={styles.img84} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
