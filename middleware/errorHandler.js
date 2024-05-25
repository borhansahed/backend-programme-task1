export const globalErrorHandler = (err, _, res, __) => {
  let status = err.status || 500;
  let message = err.message || "something went wrong";
  let errorMessages = [];

  if (err.name === "ZodError") {
    status = 400;
    message = "Zod Error";
    errorMessages = Object.values(err.errors).map((e) => {
      return {
        path: e.path,
        message: e.message,
      };
    });
  }

  res.status(status).json({ message, error: errorMessages });
};
