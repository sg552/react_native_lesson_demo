function delayedPrint(time){
  console.info( (Date.now() / 1000) + "== 延迟 "+ time + "ms 后开始打印")
  return new Promise( resolve => {
    setTimeout( () =>{
      resolve(time + 500)
    }
    ,time)
  })
}

// 定义了一个封装后的方法： async ...
async function print(){

  // 调用该方法时， 传入一个参数就好了。resolver 不用传
  await delayedPrint(2000)

  // 这一行代码就是resolver的实现
  console.info((Date.now() / 1000) + "== hello!")
}

// 最后，调用这个 async方法
console.info("== code before print")
print()
console.info("== code after print")
