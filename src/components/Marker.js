const Marker = ({ src }) => {
  return (
    <img
      src={src}
      alt="bouldering wall"
      style={{ objectFit: "contain", height: "100vh" }}
    />
  );
};

export default Marker;
