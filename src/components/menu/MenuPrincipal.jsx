import React, { useState, useEffect } from 'react';
import { Tree } from 'primereact/tree';
import { itemsTesting } from './MenuPrincipal.utils';

export default function MenuPrincipal() {
    const [selectedKey, setSelectedKey] = useState('');


    return (
        <div className="card flex justify-content-center">
           <Tree
                value={itemsTesting}
                selectionMode="single"
                selectionKeys={selectedKey}
                onSelectionChange={(e) => setSelectedKey(e.value)}
                className="w-full md:w-30rem"
                filter
                filterMode="strict"
                filterPlaceholder="Buscar item"
              />
        </div>
    )
}
   