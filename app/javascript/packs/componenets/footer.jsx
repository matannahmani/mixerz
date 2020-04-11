import React from 'react'

const footer = () => {
  return (
    <div className="footer w-100">
      <div className="footer-links">
        <a href="#"><span className="iconify" data-icon="mdi:facebook" data-inline="false"></span></a>
        <a href="#" style={{marginTop: "3px"}}><span className="iconify" data-icon="ant-design:instagram-filled" data-inline="false"></span></a>
        <a href="#" style={{marginTop: "3px"}}><span className="iconify" data-icon="ant-design:youtube-filled" data-inline="false"></span></a>
      </div>
      <div className="footer-copyright">
        Mixerz-2020©
      </div>
    </div>
  )
}
export default footer;
