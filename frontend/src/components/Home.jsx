import React from "react";


const Home = () => {
  return (
    <div class="container">
      <div class="d-flex justify-content-center">
        <h1>Home Page</h1>
      </div>
      <div class="d-flex justify-content-center">
        <p>This is my attempt to create a minimal viable product of an audio hosting web application.</p>
      </div>

      <div class="d-flex justify-content-center">
        <img style={{"width":"100%", "height":"100%", "objectFit":"cover"}}src="https://picsum.photos/600/600?random=1" alt="random pic from the internet"/>
      </div>

      <h2>
        Disclaimer:
      </h2>
      <article class="d-flex justify-content-center">
        <p>I have never picked up React.js, Node.js and Docker prior, hence I have to read up online and learn everything from the scratch. Therefore, given the time constraint and with work commitments (monday-to-friday), this is the best that I can do over the weekend thus far. I have included comments in the source code for areas of improvement.</p>
      </article>
    </div>
  );
};

export default Home;