import React from 'react';
import Photo from '../ireneee.jpg'



const Home = () => {
  return <div className="card header" id="home">  
  <div className="container">
      <div className="leftContent">

          <h1> IRENE <br/> GLORIA </h1>
          <p style={{paddingBottom: '150px'}}>Hi I'm a Undergraduate Student</p>
          <div>
              <p className="icon"><i className="fas fa-map-marker-alt" />Indonesia</p>
         
              <i className="fab fa-instagram icon"></i>
              <a href="https://www.linkedin.com/in/irene-nainggolan-346676194/" className="icon">
              <i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/irenegloriia" className="icon"> <i className="fab fa-github"></i></a>
          </div>
      </div>
      <div className="rightContent">
          <img src={Photo} className="profilImage" alt="irene" />
    </div>
</div>

</div>;
};

export default Home;
