import { FormItem } from 'element-ui'
import DynamicItem from '../DynamicItem/DynamicItem'
export default {
  name: 'ProFormItem',
  computed: {
    formItemAttrs () {
      return this.$attrs.formItemAttrs || {}
    },
    formItemListeners () {
      return this.$listeners.formItemListeners || {}
    },
    formItemData () {
      return this.$attrs.formItemData || {}
    },
    formItemDataListeners () {
      return this.$listeners.formItemListeners || {}
    }
  },
  created () {
    this.formItemRef = this.$refs.formItemRef
    this.dynamicItemRef = this.$refs.dynamicItemRef
  },
  render () {
    return (
      <FormItem
        ref="formItemRef"
        {...this.formItemAttrs}
        {...this.formItemListeners}
      >
        <DynamicItem
          ref="dynamicItemRef"
          {...this.formItemData}
          {...this.formItemDataListeners}
        >
          {this.$slots.default}
        </DynamicItem>
      </FormItem>
    )
  }
}
