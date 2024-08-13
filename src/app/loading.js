import CircleLoader from "react-spinners/CircleLoader";

const Loading = () => {
  return (
    <div className="spinner">
      <CircleLoader color="#123abc" size={150} />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
