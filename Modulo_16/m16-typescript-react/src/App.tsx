// App.tsx
import React from 'react';
import Button from './Components/Button/Button';
import Select from './Components/Select/Select';

const App: React.FC = () => {
  return (
    <div>
      <h1 className="ml3">Meu Componentes</h1>

      { }
      <Button align="center" variation="primary">
      </Button>
      <Button align="center" variation="secondary">
      </Button>
      <Button align="center" variation="tertiary">
      </Button>

      {}
      <Select
        direction="row"
        variation="primary"
        size="medium" 
        fSize="large" 
        id="seuIdAqui" 
        labelText="Escolha uma opção:"
      >
        <option value="opcao1">Opção 1</option>
        <option value="opcao2">Opção 2</option>
        <option value="opcao3">Opção 3 </option>

        {}
      </Select>
    </div>
  );
};

export default App;
