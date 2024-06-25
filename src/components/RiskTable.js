import React from 'react';

const RiskTable = ({ risks }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome do risco</th>
          <th>Probabilidade</th>
          <th>Impacto</th>
        </tr>
      </thead>
      <tbody>
        {risks.map((risk, index) => (
          <tr key={index}>
            <td>{risk.riskName}</td>
            <td>{risk.probability}</td>
            <td>{risk.impact}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RiskTable;
