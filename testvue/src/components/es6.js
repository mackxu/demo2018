// 强制要求参数
export const validateParams = () => {
  const required = () => { throw new Error('需要传递参数') }
  const add = (a = required(), b = required()) => a + b
  console.log(add(1, 4))
}

// 数组中的数值翻倍，并挑选出那些大于50的数
// 先是map更新值, 然后再过滤大于50的值
// 用forEach + 数组实现
// reduce可以同时实现map和filter
export const doubleOver50 = () => {
  const arr = [10, 20, 30, 40]
  const list = arr.reduce((res, num) => {
    num *= 2
    if (num > 50) res.push(num)
    return res
  }, [])
  console.log(list)
}
// 使用reduce取代map和filter
export const reduceFilter = () => {
  const arr = [10, 20, 30, 40]
  const list = arr.reduce((res, num) => {
    if (num > 25) res.push(num)
    return res
  }, [])
  console.log(list)
}

// 使用reduce匹配圆括号
// 用counter计数,遇到(时 加1, 遇到) 减1
export const validateItem = () => {
  const str = '(()))'
  const res = str.split('').reduce((count, char) => {
    // matched ) before (
    if (count < 0) return count
    if (char === '(') {
      ++count
    } else if (char === ')') {
      --count
    }
    return count
  }, 0)
  console.log(res)
}
// 统计数组中相同项的个数
export const itemCount = () => {
  const arr = [1, 1, 3, 2, 4, 2, 4, 2, 5, 1, 3, 6]
  const res = arr.reduce((counter, item) => {
    counter[item] = counter[item] ? ++counter[item] : 1
    return counter
  }, {})
  console.log(res)
}
// 删除不需要的属性
export const deleteProperty = () => {
  const obj = { a: 1, b: 2, c: 3 }
  const { b, ...cleanObj } = obj
  console.log(cleanObj)
}

// 合并对象
export const mergeObjs = () => {
  const obj1 = { a: 1, b: 2, c: 3 }
  const obj2 = { d: 11, c: 22, e: 44, a: 100 }
  const mergeObj = { ...obj1, ...obj2 }
  console.log(mergeObj)
}
export default itemCount
