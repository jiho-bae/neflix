import { tvApi } from "api";
import React from "react";
import SeasonPresenter from "./SeasonPresenter";

export default class extends React.Component {
  state = {
    result: null,
    seasonTitle: null,
    error: null,
    loading: true,
  };
  async componentDidMount() {
    const {
      match: {
        params: { id, seasonId },
      },
    } = this.props;
    try {
      const { data: result } = await tvApi.season(id, seasonId);
      const {
        data: { name: mainTitle },
      } = await tvApi.showDetail(id);
      this.setState({
        result,
        seasonTitle: `${mainTitle} ${result.name}`,
      });
    } catch {
      this.setState({
        error: "Can't find season",
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  render() {
    const { result, seasonTitle, error, loading } = this.state;
    return <SeasonPresenter result={result} seasonTitle={seasonTitle} error={error} loading={loading} />;
  }
}
