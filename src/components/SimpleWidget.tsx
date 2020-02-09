import * as React from "react";

export interface SimpleWidget {
  name: string;
}

export const SimpleWidget = (props: SimpleWidget): JSX.Element => (
  <>
    <h2>Hello there:</h2>
    <h3>{props.name}</h3>
  </>
);
