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

const getStatusByCode = (code) => {
  switch (code) {
    case 'NOT_FOUND': {
      return { status: 404 };
    }
    default: {
      return { status: 500 };
    }
  }
};

const customErrorMiddleware = (err, req, res, next) => {
  let error;

  if (!err || !err.response) {
    error = getStatusByCode(err?.message);
  } else {
    const { data, status } = err.response;
    error = { status: status ?? data.status, message: data.message };
  }

  const { status, message } = error;

  res
    .status(status)
    .json({ status, message: getErrorMessage({ status, message }) });

  next();
};

export default customErrorMiddleware;
