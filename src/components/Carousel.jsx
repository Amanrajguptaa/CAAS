import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <div className="relative">
      <div className="text-[2px] sm:text-[5px] md:text-[10px]">
        <section className="mx-3 md:mx-10 h-auto bg-[#0038c7] relative  ">
          {/* Background Image */}
          <div className="relative overflow-hidden">
            <img className="" src="/gridd.png" alt="" />
          </div>

          <div className="absolute inset-0 flex ">
            <div class="main-container">
              <div class="card-container">
                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    The team exceeded my expectations with their creative designs! They perfectly captured my brand's essence, delivering stunning visuals that have helped elevate my business presence. I couldn’t be happier with the results
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="22.5px"
                        width="22.5px"
                      />
                    </span>
                    <span class="tag">Coffea</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    Their graphic design services are top-notch! From concept to execution, they delivered captivating designs that were exactly what I needed for my new product launch
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Priya K</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    Thanks to their expert social media marketing, our engagement skyrocketed! We saw a significant boost in followers, website traffic, and overall brand visibility. Their strategic approach truly works
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Travel Today</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    Their social media marketing services have been a game-changer for our brand. With their targeted campaigns, we’ve connected with the right audience, driving measurable results in just a few months!
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Vikram D</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    I’m impressed by how well they manage our social media platforms. They consistently post engaging content, respond to comments, and keep our online community active. It’s such a relief to have them handle everything
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Smile Hospital</span>
                  </div>
                </div>
              </div>

              <div class="card-container">
                <div class="card">
                  <div class="card-img">
                    <div className="text-wrap overflow-y-scroll overflow-x-hidden text-[2px] sm:text-[5px] md:text-[10px] ">
                    Their social media management is seamless! We can focus on running the business while they handle posts, interactions, and analytics. It’s made a huge difference in our online presence
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Rajiv T</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    Their digital marketing strategy has driven incredible growth for our business. From SEO to PPC, every aspect of our campaign was executed flawlessly, and the ROI speaks for itself!
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Rana Hospital</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    They transformed our online visibility with their digital marketing expertise. We’ve seen substantial improvements in lead generation and conversions thanks to their well-rounded approach
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Amit P</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    Their social media designs are eye-catching and aligned with our brand identity. Every post is visually appealing and draws attention, leading to increased engagement across our platforms
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Blacksoft Solution</span>
                  </div>
                </div>

                <div class="card">
                  <div class="card-img">
                    <div className="text-[2px] sm:text-[5px] md:text-[10px] text-wrap overflow-y-scroll overflow-x-hidden">
                    The social media designs they created for us are simply fantastic! Each graphic is tailored to fit our brand and campaigns, making our social media pages look professional and inviting
                    </div>
                  </div>

                  <div class="card-lbl">
                    <span class="icon">
                      <img
                        src="/star.png"
                        alt=""
                        height="17.5px"
                        width="17.5px"
                      />
                    </span>
                    <span class="tag">Karan J</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Carousel;
