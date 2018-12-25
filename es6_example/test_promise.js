my_promise = new Promise((resolve) => {
  console.info("== in promise")
  // 如果该promise 操作成功的话，
  let result = true   //假设成功
  // 运行成功对应的代码
  resolve()
  console.info("== in the last line of promise")
})

my_promise.then(function(){
  console.info("== hi , I am resolve function")
})
