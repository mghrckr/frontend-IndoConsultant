export default function VissionMission() {
  return (
    <div className="flex justify-center items-center space-x-10 overflow-hidden">
      <div className="about-thumb2 mb-50 max-w-sm"> {/* Div kiri */}
        <div className="about-img-1 wow fadeInLeft" data-wow-delay=".3s">
          <img
            className="wow fadeInLeft"
            data-wow-delay=".4s"
            src="/about_1-1-testt.jpg"
            alt="img"
          />
        </div>
        <div
          className="about-img-2 video-wrap jump-reverse wow fadeInLeft"
          data-wow-delay=".5s"
        >
          <img src="/about_1-2-testt.jpg" alt="img" />
          <a
            href="https://www.youtube.com/watch?v=1kUE0BZtTRc"
            className="play-btn popup-video wow fadeInLeft"
          >
            <i className="fas fa-solid fa-play" />
          </a>
        </div>
        <div
          className="about-shape-1 jump wow fadeInLeft"
          data-wow-delay=".6s"
        >
          <img src="/about_2-3.png" alt="img" />
        </div>
      </div>
      <div className="about-content-wrap flex flex-col max-w-md space-y-4 mt-4"> {/* Menambahkan space-y-4 untuk ruang vertikal */}
        <div className="title-area mb-4">
          <span className="sub-title wow fadeInRight" data-wow-delay=".3s">
            VISI
          </span>
          <h2 className="sec-title wow fadeInRight" data-wow-delay=".4s">
            The best integrated green business in The World
          </h2>
        </div>
        <div className="about-list-wrap">
          <span className="sub-title wow fadeInRight" data-wow-delay=".5s">
            MISI
          </span>
          <div className="about-list-box wow fadeInRight" data-wow-delay="1s">
            <div className="about-list-icon">
              <i className="fas fa-check" />
            </div>
            <div className="list-content-area">
              <h3 className="list-title">
                Business Transformation through implementation of our Green
                Company Values
              </h3>
            </div>
          </div>
          <div
            className="about-list-box wow fadeInRight"
            data-wow-delay=".6s"
          >
            <div className="about-list-icon">
              <i className="fas fa-check" />
            </div>
            <div className="list-content-area">
              <h3 className="list-title">
                To accelerate the innovation of our client
              </h3>
            </div>
          </div>
          <div
            className="about-list-box wow fadeInRight"
            data-wow-delay=".7s"
          >
            <div className="about-list-icon">
              <i className="fas fa-check" />
            </div>
            <div className="list-content-area">
              <h3 className="list-title">Provide more efficient operation</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
