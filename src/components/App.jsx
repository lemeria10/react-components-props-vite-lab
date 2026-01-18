import React from "react";
import blogData from "../data/blog";  // data folder is one level up from components
import Header from "./Header/Header"; // sibling folder
import About from "./About/About";    // sibling folder
import Articlelist from "./Articlelist/Articlelist"; // sibling folder


console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header name={blogData.name} />

      {/* About Section */}
      <About image={blogData.image} about={blogData.about} />

      {/* Articles */}
      <Articlelist articles={blogData.posts} /> {/* pass posts from blogData */}
    </div>
  );
}

export default App;
