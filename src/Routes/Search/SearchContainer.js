import React from "react";
import SearchPresenter from "./SearchPresenter";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    SearchTerm: "",
    error: null,
    loading: false,
  };

  render() {
    const { movieResults, tvResults, SearchTerm, error, loading } = this.state;
    return <SearchPresenter movieResults={movieResults} tvResults={tvResults} SearchTerm={SearchTerm} error={error} loading={loading} />;
  }
}
