import ProFormItem from './components/ProFormItem/ProFormItem'
import ProFormButton from './components/ProFormButton/ProFormButton'
import { Form, FormItem } from 'element-ui'
export default {
  name: 'ProForm',
  components: {
    ProFormItem,
    ProFormButton,
    Form,
    FormItem
  },
  props: {
    value: {
      type: Object,
      default: () => ({})
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    formState: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  render () {
    // const generateFormItems = (options) => {
    //   const items = []
    //   Object.keys(options).forEach((key) => {
    //     items.push(<ProFormItem key={key} formItemData={options[key]} />)
    //   })
    //   return items
    // }

    return (
      <Form ref="formRef" >
        {/* {generateFormItems(this.options)} */}
        <FormItem>
          {this.$slots.footer || <ProFormButton onSubmit={() => this.$emit('submit')} onReset={() => this.$emit('reset')}></ProFormButton>}
        </FormItem>
      </Form>
    )
  }
}
