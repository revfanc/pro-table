import { Button } from 'element-ui'
export default {
  name: 'ProFormButton',
  render () {
    return (
      <div>
        {this.$slots.before}
        <Button type="primary" onClick={() => this.$emit('submit')}>提交</Button>
        {this.$slots.middle}
        <Button type="info" onClick={() => this.$emit('reset')}>重置</Button>
        {this.$slots.after}
      </div>
    )
  }
}
