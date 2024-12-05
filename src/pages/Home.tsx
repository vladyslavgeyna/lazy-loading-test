const Component = () => {
  return (
    <div>
      <h1>Home</h1>
      <img width={200} src="/image-2.jpg" />
      <img width={200} src="/image-4.jpg" />
      {Array.from({ length: 1000 }).map((_, index) => (
        <p key={index}>Filler content to simulate a large component...</p>
      ))}
    </div>
  );
};

export default Component;