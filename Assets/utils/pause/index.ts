export default (timespan: number) =>
  new Promise((resolve: Function, reject: Function) =>
    setTimeout(() => resolve(true), timespan)
  );
