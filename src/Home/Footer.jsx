import React from 'react';
import { Row, Col } from 'antd';
import { footer } from './data';

export default function Footer() {
  return (
    <footer className="footer page-wrapper">
      <div className="footer-wrap page">
        <Row>
          {
        footer.map((foot, index) => (
          <Col key={index.toString()} md={6} xs={24} className="footer-item-col">
            <div className="footer-item">
              <h2>
                {foot.icon && <img style={{ marginRight: 16 }} src={foot.icon} alt="img" />}
                {foot.title}
              </h2>
              {foot.children.map(child => (
                <div key={child.link}>
                  <a target="_blank " href={child.link}>
                    {child.title}
                    {child.desc && (
                    <span
                      style={{ color: 'rgba(255, 255, 255, 0.65)' }}
                    > - {child.desc}
                    </span>)}
                  </a>
                </div>))}
            </div>
          </Col>
          ))
      }
        </Row>
      </div>
      <div className="footer-bottom">
        <div className="page">
          <Row>
            <Col md={4} xs={24} style={{ textAlign: 'left' }} className="mobile-hide">
              <a
                href="https://devpost.com/"
                rel="noopener noreferrer"
                target="_blank"
                style={{ color: 'rgba(256, 256, 256, 0.9)', textAlign: 'left' }}
              >
              Devpost Link
              </a>
            </Col>
            <Col md={20} xs={24}>
              <span
                className="mobile-hide"
                style={{ lineHeight: '16px', paddingRight: 12, marginRight: 11 }}
              >
                <a
                  href="https://github.com/srini047"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                Made in ❤️ @srini047
                </a>
              </span>
              <span style={{ marginRight: 24 }} className="mobile-hide">
                <a
                  href="https://www.buymeacoffee.com/srini047"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                Sponsor this project
                </a>
              </span>
              {/* <span style={{ marginRight: 12 }}>❤️</span>
              <span style={{ marginRight: 12 }}>@srini047</span> */}
            </Col>
          </Row>
        </div>

      </div>
    </footer>);
}
