function read_from_remote(){
  console.info("== 2 秒后会返回一个值")
  return new Promise(setTimeout(function(){
    return 888
  }, 2000)
  )
}

async function delay_sum(number){
  console.info("in delay_sum, go")
  value = await read_from_remote()
  console.info("value is:" + value)
  console.info("=lalal , in delay_sum")
  return number + value
}

console.info("== before run code")
delay_sum(666)
console.info("== after run code")
