module.exports = () => {
  require('./conference').start()
  console.log('Conference service running...')
  require('./email')
  console.log('EMail service running...')
  require('./seminar')
  console.log('Seminar service running...')
}
