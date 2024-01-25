export const someFunc = (arg: number): string => {
  console.log(`arg: ${arg} test test`);

  return `test ${arg}}`;
};

const p = new Promise(async (resolve, reject) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos1/1');
  if (res.status !== 200) {
    reject(new Error('custom_error'));
  }

  const data = await res.json();
  resolve(data);
});

p.then(
  (res) => console.log(`res: ${res}}`),
  (error) => console.log(`error: ${error}`)
).finally(() => console.log('finish'));
