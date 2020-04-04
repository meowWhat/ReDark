export default (type: 'success' | 'error' | 'warning' | 'info') => {
  let className = 'iconfont'
  if (type === 'success') {
    className = `${className} icon-roundcheckfill`
  }
  if (type === 'error') {
    className = `${className} icon-roundclosefill`
  }
  if (type === 'warning') {
    className = `${className} icon-warnfill`
  }
  if (type === 'info') {
    className = `${className} icon-infofill`
  }
  return className
}
