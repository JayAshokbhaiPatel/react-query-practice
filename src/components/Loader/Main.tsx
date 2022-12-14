function Main() {
  return (
    <div className="main">
      <div className="main__loaderContainer">
        <svg className="loader" viewBox="0 0 100 100">
          <circle
            className="path"
            cx="50"
            cy="50"
            r="30"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default Main;
