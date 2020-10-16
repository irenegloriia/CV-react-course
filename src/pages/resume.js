import React from 'react';

const Resume = () => {
  return <div className="card header" id="resume">
  <h2>Resume</h2>
  <section className="styleParagraf">
      <h3>Education</h3>
      <p style={{paddingBottom: '30px'}}>Telkom University Bandung <br/> 2017 - Now <br/>Computer Enggineering</p>
      <p>SMAN 4 BERAU <br/> 2014 - 2017 <br/> Majoring Natural Science </p>
  </section>

  <section>
      <h3 style={{paddingLeft: '100px',fontSize: '25px'}}>Internship</h3>
      <div className="container2">
          <div className="content">
              <h4>PT. Dopay Aplikasi Indonesia | Internship</h4>
              <p>Position : Front End</p>
              <p>Processing customer requests for services through the system</p>
          </div>

          <div className="content">
              <h4>PT. Telkom Indonesia at Yogyakarta | Internship</h4>
              <p>Position : Costumer Care</p>
              <p>Processing customer requests for services through the system</p>
          </div>

      </div>
  </section>

  <section>
      <h3 style={{paddingLeft: '100px',fontSize: '25px'}}>Organization Experience</h3>
      <div className="container1">
          <div className="content">
              <h4>Security Laboratory</h4>
              <p>General Coordinator Asisten - 2020</p>
              <p>Organize all Laboratory activities</p>
          </div>

          <div className="content">
              <h4>Technopreneur National Seminar </h4>
              <p>Vice Chairman - 2019</p>
              <p>Lead and direct in the preparation of activities</p>
          </div>

          <div className="content">
              <h4>Centurion Event at Computer Engineering </h4>
              <p>Staff of Event Division - 2019</p>
              <p>Build the event concept and arrange the timeline event</p>
          </div>

          <div className="content">
              <h4>BPH Student Association of Computer Engineering </h4>
              <p>Staff of Academic and Professional Division - 2018/2019</p>
              <p>Help improve the academic quality of Computer Engineering majors</p>
          </div>

      </div>
  </section>
</div>;
};

export default Resume;
