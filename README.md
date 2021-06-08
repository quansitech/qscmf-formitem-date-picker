# qscmf-formitem-date-picker
使用antd组件datePick开发的formType日期类组件

## 安装

```php
composer require qscmf-formitem-date-picker
```

## 组件列表
+ [Time](https://github.com/quansitech/qscmf-formitem-date-picker#Time)
+ [TimeRange](https://github.com/quansitech/qscmf-formitem-date-picker#TimeRange)
+ [DateRange](https://github.com/quansitech/qscmf-formitem-date-picker#DateRange)


### Time
```label
时间选择器
```

```php
// 最简单的时间选择器
->addFormItem('time', 'time', '时间')
```

```label
通过修改form_item的options来修改选择器的属性，具体设置参考通用配置属性
```

### TimeRange
```label
时间范围选择器
```

```php
// 最简单的时间范围选择器
->addFormItem('time_range', 'time_range', '时间范围')
```

通过修改form_item的options来修改选择器的属性，设置说明如下，其余参考通用配置属性。

| 参数 | 说明 | 类型 | 默认值 |
|:---------- |:----------|:----------|:----------|
| valueSeparator | 值分隔符 | string | , |


```lebal
valueSeparator 说明
范围选择器的值默认使用 **,** 拼接，例如时间范围选择器的值为 *05:00:00,06:00:00*。
可以通过配置该值来修改拼接符，如该值为 ** - ** ，则以上时间范围选择器返回的值为 *05:00:00 - 06:00:00*。

传值给范围选择器时，拼接符应该一致，否则初始化值为null。
```

```php
->addFormItem('time_range1', 'time_range', '时间范围1') // 返回的值05:00:00,06:00:00
->addFormItem('time_range2', 'time_range', '时间范围2','',["valueSeparator" => " - "]) // 返回的值05:00:00 - 06:00:00
->setFormData(['time_range1'=>'05:00:00,06:00:00','time_range2' => '05:00:00 - 06:00:00'])
```

### DateRange
```label
日期范围选择器
```

```php
// 最简单的日期范围选择器
->addFormItem('date_range', 'date_range', '日期范围')
```

通过修改form_item的options来修改选择器的属性，设置说明如下，其余参考通用配置属性。

| 参数 | 说明 | 类型 | 默认值 |
|:---------- |:----------|:----------|:----------|
| picker | 设置选择器类型 | string，可选值 date I week I month I quarter I year | date |
| showTime | 增加时间选择功能 | boolean | false |
| valueSeparator | 值分隔符 | string | , |



#### 以下是通用配置属性

| 参数 | 说明 | 类型 | 默认值 |
|:---------- |:----------|:----------|:----------|
| defaultValue | 默认值 | string |  |
| allowClear | 是否显示清除按钮 | boolean | true |
| inputReadOnly | 设置输入框为只读 | boolean | true |
| placeholder | 输入框提示文字 | string | "请选择时间" |
| size | 输入框大小 | string，可选值 large I middle I small |  |
| format | 设置日期格式 | string |  |
| name | item名 | string |  |
| disabled | 禁用 | boolean | false |