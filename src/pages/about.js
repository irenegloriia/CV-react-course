import React from 'react';

const About = () => {
  return <div className="card header" id="about">
            <section>
                <h2>About Me</h2>
                <p className="styleParagraf">I am a computer engineering student who is excited to try new things, can work
                    closely with the team
                    and also trying hard to improve a good output</p>

                <table className="th1">
                    <tr>
                        <th><i className="fas fa-user icon2"></i>Name</th>
                        <td>Irene Gloria Paulina Nainggolan</td>
                    </tr>
                    <tr>
                        <th style={{paddingRight :'50px'}}><i className="fas fa-calendar-day icon2"></i>Date of Birth</th>
                        <td>07-07-1999</td>
                    </tr>
                    <tr>
                        <th><i className="fas fa-phone icon2"></i>Phone</th>
                        <td>+62 812 5567 8164</td>
                    </tr>
                    <tr>
                        <th><i className="fas fa-location-arrow icon2"></i>Address</th>
                        <td>Berau, Kalimantan Timur</td>
                    </tr>
                    <tr>
                        <th><i className="fas fa-at icon2"></i>Email</th>
                        <td>ireneglorian@gmail.com</td>
                    </tr>
                </table>
            </section>

            <section>
                <h2>Skills</h2>
                <div className="skills">
                  <li>
                    <h4>HTML</h4><span className="bar"><span className="html"></span></span>
                    </li>
                    <li>
                        <h4>CSS</h4><span className="bar"><span className="css"></span></span>
                    </li>
                    <li>
                        <h4>C/C++</h4><span className="bar"><span className="c"></span></span>
                    </li>
                    <li>
                        <h4>Security System</h4><span className="bar"><span className="cyber"></span></span>
                    </li>
                </div>
            </section>
            <section>
                <h2>Character</h2>
                <div className="skills">
                  <li>
                    <h4>Thrusted</h4><span className="bar"><span className="char1"></span></span>
                    </li>
                    <li>
                        <h4>Team Work</h4><span className="bar"><span className="char2"></span></span>
                    </li>
                    <li style={{paddingBottom: '50px'}}>
                        <h4>Responsible</h4><span className="bar"><span className="char3"></span></span>
                    </li>
                </div>
            </section>
  </div>;
};

export default About ;
