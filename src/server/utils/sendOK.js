export const sendOK = (res, body) => {
  res.status(200).json({
    ...body,
    author: {
      name: 'Sebastián',
      lastname: 'López',
    },
  });
};
