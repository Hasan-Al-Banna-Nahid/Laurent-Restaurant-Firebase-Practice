/* eslint-disable no-unused-vars */
import React from "react";

const Blog = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        fontWeight: "800",
        padding: "30px",
      }}
    >
      <div>
        <h4 style={{ color: "#130f40" }}>
          1.Differences between uncontrolled and controlled components?
        </h4>
        <p style={{ color: "#535c68" }}>
          In React, controlled components refer to components that have their
          state and behavior controlled by the parent component. These
          components rely on props passed down from the parent component to
          update their state and behavior. Uncontrolled components refer to
          components that manage their own state internally.
        </p>
      </div>
      <div>
        <h4 style={{ color: "#130f40" }}>
          {" "}
          2.Difference between nodejs and express js?
        </h4>
        <p style={{ color: "#535c68" }}>
          Express is a minimal and flexible node. js web application framework,
          providing a robust set of features for building single and multi-page,
          and hybrid web applications. On the other hand, Node. js is detailed
          as "A platform built on Chrome's JavaScript runtime for easily
          building fast, scalable network Applications".
        </p>
      </div>
      <div>
        <h4 style={{ color: "#130f40" }}>
          3.What is a custom hook, and why will you create a custom hook?
        </h4>
        <p style={{ color: "#535c68" }}>
          Custom React JS hooks offer reusability as when a custom hook is
          created, it can be reused easily, which makes the code cleaner and
          reduces the time to write the code. It also enhances the rendering
          speed of the code as a custom hook does not need to be rendered again
          and again while rendering the whole code.
        </p>
      </div>
    </div>
  );
};

export default Blog;
