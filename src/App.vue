<template>
  <div id="app">
    <ProForm
      v-model="formState"
      :options="options"
    />
  </div>
</template>

<script>
import ProForm from './components/ProForm/ProForm'

export default {
  name: 'App',
  components: {
    ProForm
  },
  data () {
    return {
      formState: {}
    }
  },
  computed: {
    options () {
      return [
        {
          type: 'Input', // 类型
          props: {
            // 属性
            placeholder: '请输入'
          },
          label: '输入框', // 表单字段标题
          field: 'name', // 字段名
          slots: {
            prefix: 'input_prefix' // 插槽
          },
          rules: [{ required: true, message: '填写啊' }], // 校验规则
          col: 12 // 栅格
        },
        {
          type: 'Input',
          props: {
            placeholder: '请输入'
          },
          label: '输入框',
          field: 'name',
          slots: {
            prefix: 'input_prefix'
          },
          rules: [{ required: true, message: '填写啊' }],
          col: 12
        },
        {
          type: 'Select',
          props: {
            placeholder: '请输入',
            allowClear: true,
            options: [
              {
                label: '哈哈',
                value: '1'
              },
              {
                label: '嘻嘻',
                value: '2'
              }
            ]
          },
          label: '选择框',
          field: 'users',
          slots: {
            suffixIcon: 'select_suffix'
          },
          rules: [{ required: true, message: '填写啊' }]
        },
        {
          type: 'TimePicker',
          field: 'time',
          label: '时间选择'
        },
        {
          type: 'TimeRangePicker',
          field: 'time',
          label: '时间选择'
        }
        // {
        //   type: 'custom',
        //   field: 'name',
        //   label: '自定义',
        //   component: Custom,
        //   rules: [{ required: true, message: '填写啊' }]
        // }
      ]
    }
  }
}
</script>
