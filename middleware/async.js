
  // this lets the error handling in one place
  module.export = function asyncMiddleware(handler) {
    return async(req, res, next) => {
      try {
        await handler();
      }
      catch(ex) {
        next(ex);
      }
    }
  }