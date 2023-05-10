const itemsSelectBasicData = [
    {
      name: "item 1",
      icon: "pi pi-briefcase"
    },
    {
      name: "item 2",
      icon: "pi pi-flag"
    },
    {
      name: "item 3",
      icon: "pi pi-map"
    },
    {
      name: "item 4",
      icon: "pi pi-book"
    },
  ];

  const createArrayChilds = (arr) => {
    return arr.map((item) => {
      return {
        key: item.name,
        label: item.name,
        icon: item.icon
      };
    });
  }

  export const itemsTesting = [
    {
      key: "0",
      label: "Datos Básicos",
      data: "Documents Folder",
      icon: "pi pi-fw pi-book",
      children: createArrayChilds(itemsSelectBasicData)
    },
]