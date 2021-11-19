const getErrorMessage = ({ status, message }) => {
  switch (status) {
    case 500: {
      return 'Ocurrió un error, intente nuevamente.';
    }
    case 404: {
      return 'No se encontraron productos con los parámetros de búsqueda proporcionados';
    }
    default: {
      return message;
    }
  }
};

const customErrorMiddleware = (err, req, res, next) => {
  const { response } = err ?? {};
  const { status, message } = response?.data ?? { status: 500 };

  res
    .status(status)
    .json({ status, message: getErrorMessage({ status, message }) });

  next();
};

export default customErrorMiddleware;
