export const mokWarehouse = [
  {
    barCode: "CH2022001",
    type: "chair",
    master: "Alex Urbanskyi",
  },
  {
    barCode: "CH2022002",
    type: "chair",
    master: null,
  },
  {
    barCode: "CH2022003",
    type: "chair",
    master: 'Shvec Roman',
  },
  {
    barCode: "LT2022001",
    type: "laptop",
    master: "Alex Urbanskyi",
    configuration: [
      {
        model: "Lenovo",
        cpu: "Pentium i5",
        diskType: "SSD",
        memorySize: "16Gb",
      },
    ],
  },
  {
    barCode: "DT2022001",
    type: "desktop",
    master: "Alex Urbanskyi",
    configuration: [
      {
        cpu: "Pentium i5",
        diskType: "SSD",
        memorySize: "16Gb",
        videoCard: "NVIDIA 4Gb",
      },
    ],
  },
  {
    barCode: "MO2022001",
    type: "monitor",
    master: "Alex Urbanskyi",
    configuration: [
      {
        model: "LG",
        screenSize: "22.5",
      },
    ],
  },
  {
    barCode: "MO2022002",
    type: "monitor",
    master: "Shev Roman",
    configuration: [
      {
        model: "LG",
        screenSize: "25",
      },
    ],
  },
];
