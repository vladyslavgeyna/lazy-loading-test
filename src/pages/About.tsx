const About = () => {
  return (
    <div>
      <h1>About</h1>
      {Array.from({ length: 1000 }).map((_, index) => (
        <p key={index}>Filler content to simulate a large component...</p>
      ))}
    </div>
  );
};

export default About;
