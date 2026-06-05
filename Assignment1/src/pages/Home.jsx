function Home() {
  return (
    <div className="container">

      <img src="/me.jpg" className="hero-img" alt="me" />

      <h1>Fatima Dabbous</h1>
      <h3>Software Developer | Public Health Background | Fitness Enthusiast</h3>

      <div className="card">
        <p>
          I am a Software Engineering student who blends technology with real-world
          understanding from my background in Public Health and Safety.
        </p>

        <p>
          I’m passionate about building systems that improve healthcare, wellness,
          and everyday user experiences through clean and efficient software design.
        </p>

        <p>
          Outside of coding, I’m deeply involved in fitness and personal training —
          which has shaped my discipline, consistency, and mindset as a developer.
        </p>
      </div>

      <a href="/about">
        <button>Explore My Work</button>
      </a>

    </div>
  );
}

export default Home;