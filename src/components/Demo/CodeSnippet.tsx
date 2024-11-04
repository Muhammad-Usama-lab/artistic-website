import React from "react";
import "../../styles/demo.module.css";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const JsonSnippet = ({ data }) => {
  return (
    <JSONPretty
      id="json-pretty"
      //   mainStyle="background-color:#1e293b;"
      //   keyStyle="color:#cbd5e1;"
      //   valueStyle="color:#7dd3fc;"
      theme={{
        main: "line-height:1.3;background:#1e293b;overflow:auto;border-radius:10px;padding:10px;",
        error:
          "line-height:1.3;color:#66d9ef;background:#272822;overflow:auto;",
        key: "color:#cbd5e1;",
        string: "color:#f472b6;",
        value: "color:#7dd3fc;",
      }}
      data={data}
    ></JSONPretty>
  );
};

export default JsonSnippet;
