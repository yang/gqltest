import React from 'react';
import './App.css';
import {GraphiQL} from "graphiql";
import { createGraphiQLFetcher } from "@graphiql/toolkit";

const fetcher = createGraphiQLFetcher({
  url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
});

function App() {
  return (
    <div>
      <GraphiQL fetcher={fetcher}/>
    </div>
  );
}

export default App;
