/* eslint-disable no-unused-vars */
import React from 'react';
import {
  AcademicCapIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  BoltIcon,
  LightBulbIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid';

const values = [
  {
    name: 'Smart',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Professional',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Innovative',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus voluptas blanditiis et.',
    icon: LightBulbIcon,
  },
  {
    name: 'Respect',
    description:
      'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
    icon: UserGroupIcon,
  },
  {
    name: 'Integrity',
    description:
      'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
    icon: SparklesIcon,
  },
  {
    name: 'Trusted',
    description:
      'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
    icon: ShieldCheckIcon,
  },
];

const Values = () => {
  return (
    <div className="process-area-3 space overflow-hidden position-relative">
      <div
        className="portfolio-shape1_2 shape-mockup absolute bottom-0 right-0"
        data-bottom="0%"
        data-right={0}
      >
        <img src="/process-shape1-2.png" alt="img" />
      </div>
      <div
        className="process-shape3_2 shape-mockup jump-reverse d-lg-block d-none"
        data-top={0}
        data-left={0}
      >
        <img src="/service-shape1-2.png" alt="img" />
      </div>
      <div className="container container2">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8">
            <div className="title-area text-center">
              <h2 className="sec-title wow fadeInUp" data-wow-delay=".2s">
                Our Value
              </h2>
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                Sebagai perusahaan yang bergerak di bidang{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="row gy-30 justify-content-center">
          <div style={{ marginBottom: '60px' }}>
            <div className="process-card style3 wow fadeInUp" data-wow-delay=".2s">
              <div className="process-card-icon">
                <div className="process-num">S</div>
              </div>
              <h3 className="process-card-title">Smart</h3>
            </div>
          </div>
          <div />
          <div style={{ marginBottom: '60px' }}>
            <div className="process-card style3 wow fadeInUp" data-wow-delay=".3s">
              <div className="process-card-icon">
                <div className="process-num">P</div>
              </div>
              <h3 className="process-card-title">Professional</h3>
            </div>
          </div>
          <div />
          <div style={{ marginBottom: '60px' }}>
            <div className="process-card style3 wow fadeInUp" data-wow-delay=".4s">
              <div className="process-card-icon">
                <div className="process-num">I</div>
              </div>
              <h3 className="process-card-title">Inovative</h3>
            </div>
          </div>
          <div />
          <div style={{ marginBottom: '60px' }}>
            <div className="process-card style3 wow fadeInUp" data-wow-delay=".5s">
              <div className="process-card-icon">
                <div className="process-num">R</div>
              </div>
              <h3 className="process-card-title">Respect</h3>
            </div>
          </div>
          <div />
          <div style={{ marginBottom: '60px' }}>
            <div className="process-card style3 wow fadeInUp" data-wow-delay=".6s">
              <div className="process-card-icon">
                <div className="process-num">I</div>
              </div>
              <h3 className="process-card-title">Integrity</h3>
            </div>
          </div>
          <div />
          <div>
            <div className="process-card style3 wow fadeInUp" data-wow-delay=".7s">
              <div className="process-card-icon">
                <div className="process-num">T</div>
              </div>
              <h3 className="process-card-title">Trusted</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
