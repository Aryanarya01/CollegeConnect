import React from "react";

const NotFound = () => {
  const handleReturnHome = () => {
    window.location.href = "/home";
  };
  return (
    <div className="NotFound">
      <h1>404 Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <button
        type="button"
        onClick={handleReturnHome}
        class="btn"
        style={{
          marginTop: "1rem",
          fontWeight: "500",
          backgroundColor: "rgba(241, 172, 42, 1)",
          width: "8rem",
        }}
      >
        Return Home
      </button>
    </div>
  );
};

export default NotFound;
