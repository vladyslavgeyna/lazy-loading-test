const Contacts = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <img width={200} src="/image.jpg" />
      <img width={200} src="/image-3.jpg" />
      {Array.from({ length: 1000 }).map((_, index) => (
        <p key={index}>Filler content to simulate a large component...</p>
      ))}
    </div>
  );
};

export default Contacts;
