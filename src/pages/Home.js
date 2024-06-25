import React, { useState } from 'react';
import RiskChart from '../components/RiskChart';
import RiskForm from '../components/RiskForm';
import RiskTable from '../components/RiskTable';

const Home = () => {
  const [risks, setRisks] = useState([]);

  const handleAddRisk = (values, { resetForm }) => {
    setRisks([...risks, values]);
    resetForm();
  };

  const handleExportJson = () => {
    const dataStr = JSON.stringify(risks, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

    const exportFileDefaultName = 'risk-data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportJson = (event) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      const importedRisks = JSON.parse(e.target.result);
      setRisks(importedRisks);
    };
    fileReader.readAsText(event.target.files[0]);
  };

  return (
    <div>
      <h1>Gerenciamento de Riscos</h1>
      <RiskForm onSubmit={handleAddRisk} />
      <RiskTable risks={risks} />
      {risks.length > 0 && <RiskChart risks={risks} />}
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleExportJson}>Export to JSON</button>
        <input
          type="file"
          accept=".json"
          onChange={handleImportJson}
          style={{ display: 'block', marginTop: '10px' }}
        />
      </div>
    </div>
  );
};

export default Home;
