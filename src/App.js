import React from "react";
import "./App.css";
import SkButton from "./components/SkButton";

function App() {
  return (
    <div className="App">
      <h2>Button Styles</h2>
      <div className="setLight">
        <div style={{ width: "150px" }}> Regular Buttons</div>
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
      <div className="setLight">
        <div style={{ width: "150px" }}> Primary Buttons</div>
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
      <div className="setLight">
        <div style={{ width: "150px" }}> Grey Background Buttons</div>
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
      <div className="setDark">
        <div style={{ width: "150px", color: "#fff" }}>
          {" "}
          Dark Background Buttons
        </div>
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
      <div className="setLight">
        <div style={{ width: "150px" }}> Buttons Without Border </div>
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

      <div className="setLight">
        <div style={{ width: "150px" }}> Miscellaneous Buttons</div>
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
