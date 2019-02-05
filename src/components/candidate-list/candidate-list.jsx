import React, { Component } from 'react';
import CandidateItem from '../candidate-item';

class CandidateList extends Component {
  render() {
    const { onActiveToogle, onFilter, candidate } = this.props;
    const candidats = candidate.map(cand => (
      <CandidateItem candidate={cand} key={cand.id} onActiveToogle={onActiveToogle} />
    ));
    return (
      <div>
        <input placeholder="filter" name="filter" onChange={onFilter} />
        <table>
          <thead>
            <tr>
              <th>Nic</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>{candidats}</tbody>
        </table>
      </div>
    );
  }
}
export default CandidateList;
