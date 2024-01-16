import {
  // eslint-disable-next-line no-unused-vars
  Input, InputNumber, Radio, RadioGroup, RadioButton, Checkbox, CheckboxButton, CheckboxGroup, Switch, Select, Option, OptionGroup, DatePicker, TimeSelect, TimePicker, Popover, Tooltip, Tree, ColorPicker
} from 'element-ui'
export default {
  name: 'DynamicItem',
  created () {
    this.dynamicItemRef = this.$refs.dynamicItemRef
  },
  render () {
    const { type, ...props } = this.$attrs
    return (
      type ? <component ref="dynamicItemRef" is={type} {...props} {...this.$listeners} /> : null
    )
  }
}
