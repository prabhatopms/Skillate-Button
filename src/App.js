import React from "react";
import "./App.css";
import SkButton from "./components/SkButton";

function App() {
  return (
    <div className="App">
      <h2 style={{ textAlign: "left", paddingBottom: "20px" }}>
        Button Styles
      </h2>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        Regular Buttons
      </div>
      <div className="setLight">
        <SkButton>Text</SkButton>
        <SkButton iconName="envelope"></SkButton>
        <SkButton iconName="envelope">Left Icon</SkButton>
        <SkButton iconName="envelope" iconAlign="right">
          Right Icon
        </SkButton>
        <SkButton iconName="envelope" iconAlign="right" loading>
          Loading
        </SkButton>
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        Primary Buttons
      </div>
      <div className="setLight">
        <SkButton category="primary">Text</SkButton>
        <SkButton iconName="envelope" category="primary"></SkButton>
        <SkButton iconName="envelope" category="primary">
          Left Icon
        </SkButton>
        <SkButton iconName="envelope" iconAlign="right" category="primary">
          Right Icon
        </SkButton>
        <SkButton iconName="envelope" loading category="primary">
          Loading
        </SkButton>
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        Grey Background Buttons
      </div>
      <div className="setLight">
        <SkButton category="secondary-grey">Text</SkButton>
        <SkButton iconName="envelope" category="secondary-grey"></SkButton>
        <SkButton iconName="envelope" category="secondary-grey">
          Left Icon
        </SkButton>
        <SkButton
          iconName="envelope"
          iconAlign="right"
          category="secondary-grey"
        >
          Right Icon
        </SkButton>
        <SkButton iconName="envelope" loading category="secondary-grey">
          Loading
        </SkButton>
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        Dark Background Buttons
      </div>
      <div className="setDark">
        <div className="setDarkContent">
          <SkButton category="skeleton">Text</SkButton>
          <SkButton iconName="envelope" category="skeleton"></SkButton>
          <SkButton iconName="envelope" category="skeleton">
            Left Icon
          </SkButton>
          <SkButton iconName="envelope" iconAlign="right" category="skeleton">
            Right Icon
          </SkButton>
          <SkButton iconName="envelope" loading category="skeleton">
            Loading
          </SkButton>
        </div>
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        Buttons Without Border{" "}
      </div>
      <div className="setLight">
        <SkButton category="borderless">Text</SkButton>
        <SkButton iconName="envelope" category="borderless"></SkButton>
        <SkButton iconName="envelope" category="borderless">
          Left Icon
        </SkButton>
        <SkButton iconName="envelope" iconAlign="right" category="borderless">
          Right Icon
        </SkButton>
        <SkButton iconName="envelope" loading category="borderless">
          Loading
        </SkButton>
      </div>
      <div style={{ textAlign: "left", marginLeft: "20px" }}>
        {" "}
        Miscellaneous Buttons
      </div>
      <div className="setLight">
        <SkButton iconName="envelope" isDanger>
          Danger
        </SkButton>
        <SkButton iconName="envelope" isSuccess>
          Safe
        </SkButton>
        <SkButton iconName="envelope" disabled>
          Disabled
        </SkButton>
        <SkButton iconName="envelope" iconColor="blue">
          Colored Icon
        </SkButton>
      </div>
    </div>
  );
}

export default App;
