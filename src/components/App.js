
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      <PageLayout header={<h1>Welcome to my webiste</h1>} footer={<p>2023 My Webiste. All rights reserved</p>}> 
      <p>This is the content of my webiste </p>
      </PageLayout>
    </div>
  )
}

export default App
