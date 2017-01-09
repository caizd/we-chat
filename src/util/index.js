export function randomColor () {
  return '#' + (~~(Math.random() * (1 << 24))).toString(16)
}
export function genUid () {
  return new Date().getTime() + '' + Math.floor(Math.random() * 899 + 100)
}
export function randomPhoto () {
  var photos = ['../assets/photo/cute.png', '../assets/photo/haha.png', '../assets/photo/heisenberg.png', '../assets/photo/mj.png', '../assets/photo/ji.png', '../assets/photo/qwe.png', '../assets/photo/niu.png', '../assets/photo/shu.png', '../assets/photo/yaseng.png']
  return photos[parseInt(9 * Math.random())]
}
