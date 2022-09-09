import React, { useEffect, useState } from "react";
import "./App.css";

const About = () => {
  const [fetchData, setFetchData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
      });
  }, []);
  return (
    <div>
      <header className="header">ABOUT</header>
      {fetchData !== undefined &&
        fetchData.map(
          (d, i) =>
            i > 3 &&
            i < 7 && (
              <div>
                <div className="tittle">{d.title}</div>
                <div className="body">{d.body}</div>
              </div>
            )
        )}
    </div>
  );
};

export default About;
