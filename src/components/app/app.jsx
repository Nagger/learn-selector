import React, { Component } from 'react';

import CandidateList from '../candidate-list';

export default class App extends Component {
  state = {
    candidate: [
      { id: 1, nic: 'Artem', active: false },
      { id: 2, nic: 'Dorian', active: false },
      { id: 3, nic: 'Nicolson', active: true },
    ],
  };

  onActiveToogle = (id) => {
    const { candidate } = this.state;
    const oldCandidate = candidate[id - 1];
    const newCandidat = { ...oldCandidate, active: !oldCandidate.active };
    const newState = [...candidate.slice(0, id - 1), newCandidat, ...candidate.slice(id)];
    this.setState({
      candidate: newState,
    });
  };

  onFilter = (e) => {
    const { candidate } = this.state;
    this.setState({
      candidate: candidate.filter(cand => cand.nic.indexOf(e.target.value) !== -1),
    });
  };

  render() {
    return (
      <CandidateList candidate={this.state.candidate} onActiveToogle={this.onActiveToogle} onFilter={this.onFilter} />
    );
  }
}
