export const isModern = function(): boolean {
  return hasAsyncAwait();
};

const hasAsyncAwait = function(): boolean {
  let isAsyncSupported;
  try {
    isAsyncSupported = eval(
      `typeof Object.getPrototypeOf(async function() {}).constructor === 'function'`
    );
  } catch (exception) {
    isAsyncSupported = false;
  }

  return isAsyncSupported;
};
