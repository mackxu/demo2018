const to = (promise) => {
  return promise
    .then(data => [null, data])
    .catch(err => [err, undefined]);
};

const test = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 2000);
  });
}

const test2 = () => {
  return new Promise((resolve, reject) => {
    this.a.b = 2;
    setTimeout(() => {
      reject(2);
    }, 2000);
  });
}

const init = async () => {
  try {
    const t = await test();
    console.log(t);
    const t2 = await test2();
    console.log(t2);
  } catch(e) {
    console.log('catch');
    console.log(e);
  }
};

const init2 = async () => {
  let err, res;
  [err, res] = await to(test());
  // 影响主线程
  if (err) {
    return;
  }
  console.log(res);
  [err, res] = await to(test2());
  console.error(err);     // 打印错误
};

(() => {
  init2(); 
})();
