export const available = {
  YEAR: "year",
  MONTH: "month",
  WEEK: "week",
  DAY: "day",
};

const data = {
  [available.YEAR]: [
    {
      name: "Jan",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Apr",
      uv: 2500,
      pv: 1000,
      amt: 1500,
    },
    {
      name: "Jul",
      uv: 6000,
      pv: 8000,
      amt: 2290,
    },
    {
      name: "Oct",
      uv: 4090,
      pv: 2100,
      amt: 2181,
    },
  ],
  [available.MONTH]: [
    {
      name: "1st",
      uv: 3000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "5th",
      uv: 1500,
      pv: 1000,
      amt: 1500,
    },
    {
      name: "10th",
      uv: 5000,
      pv: 9000,
      amt: 2290,
    },
    {
      name: "15th",
      uv: 4090,
      pv: 2100,
      amt: 2181,
    },
  ],
  [available.WEEK]: [
    {
      name: "Sun",
      pv: 4000,
      uv: 2400,
      amt: 2400,
    },
    {
      name: "Tue",
      pv: 2500,
      uv: 1000,
      amt: 1500,
    },
    {
      name: "Thur",
      pv: 6000,
      uv: 8000,
      amt: 2290,
    },
    {
      name: "Sat",
      pv: 4090,
      uv: 2100,
      amt: 2181,
    },
  ],
  [available.DAY]: [
    {
      name: "12am",
      uv: 2000,
      pv: 400,
      amt: 2400,
    },
    {
      name: "6pm",
      uv: 5500,
      pv: 4000,
      amt: 1500,
    },
    {
      name: "12pm",
      uv: 7000,
      pv: 1000,
      amt: 2290,
    },
    {
      name: "6pm",
      uv: 4090,
      pv: 2100,
      amt: 2181,
    },
  ],
};

export default data;
