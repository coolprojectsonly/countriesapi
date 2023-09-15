export const makeData = () => {
  const data = [];
  for (let i = 0; i < 50; i++) {
    data.push({
      id: i,
      firstName: `First Name ${i}`,
      lastName: `Last Name ${i}`,
      age: Math.floor(Math.random() * 100),
      visits: Math.floor(Math.random() * 100),
      status: i % 2 === 0 ? "Active" : "Inactive",
      profileProgress: Math.floor(Math.random() * 100),
    });
  }
  return data;
};
