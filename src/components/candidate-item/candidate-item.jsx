import React from 'react';

const CandidateItem = ({ candidate: { id, nic, active }, onActiveToogle }) => (
  <tr>
    <td>{nic}</td>
    <td>
      <input type="checkbox" checked={active} onChange={() => onActiveToogle(id)} />
    </td>
  </tr>
);
export default CandidateItem;
