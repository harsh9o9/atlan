import React from "react";
import Header from "./Header";

const Output = (props) => {
  return (
    <section className="output">
      <Header header="Output" />
      <div className="output__result">
        <table>
          <thead>
            <tr>
              {props.titles.map((e) => (
                <th key={e}>{e}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((e, index) => (
              <tr key={index}>
                {e.map((v) => (
                  <td key={v}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Output;
