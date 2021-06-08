import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Input } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

function QaDateRangePicker(props){
    const defaultValue = initDefaultValue(props.defaultValue, props.format);
    const [hiddenInputValue, setHiddenInputValue] = useState( initHiddenDefaultValue(defaultValue,  props.format, props.valueSeparator) )
    const onChange = (date, dateArr) => setHiddenInputValue(joinHiddenValueWithSep(dateArr, props.valueSeparator))

    return (
        <div>
            <Input
                type={ "hidden" }
                name={ props.name }
                value={ hiddenInputValue }
            />
            <RangePicker
                onChange = { onChange }
                locale = { locale }
                defaultValue = { defaultValue }
                allowClear = { props.allowClear }
                inputReadOnly = { props.inputReadOnly }
                size = { props.size }
                format = { props.format }
                disabled = { props.disabled }
                picker = { props.picker }
                showTime = { props.showTime }
            />
        </div>
    );
}

function initDefaultValue(defaultValue, format){
    return defaultValue.length === 2 ? [moment(defaultValue[0], format), moment(defaultValue[1], format)] : null;
}

function initHiddenDefaultValue(defaultValue, format, valueSeparator){
    return defaultValue ? joinHiddenValueWithSep([defaultValue[0].format(format), defaultValue[1].format(format)], valueSeparator) : null
}

function joinHiddenValueWithSep(value, valueSeparator){
    return value.join(valueSeparator);
}

function qaDateRangePicker(id, opt){
    const defaultOpt = {
        defaultValue: null,
        allowClear: true,
        inputReadOnly: true,
        size: "",
        format: null,
        name: "",
        disabled: false,
        valueSeparator: ',',
        picker: null,
        showTime: false,
    };
    Object.assign(defaultOpt, opt);

    ReactDOM.render(
        <QaDateRangePicker
            name = { defaultOpt.name }
            defaultValue = { defaultOpt.defaultValue }
            allowClear = { defaultOpt.allowClear }
            inputReadOnly = { defaultOpt.inputReadOnly }
            size = { defaultOpt.size }
            format = { defaultOpt.format }
            disabled = { defaultOpt.disabled }
            valueSeparator = { defaultOpt.valueSeparator }
            picker = { defaultOpt.picker }
            showTime = { defaultOpt.showTime }
        />,
        document.getElementById(id),
    );
}

window.QaDatePicker = window.QaDatePicker ? window.QaDatePicker : {};
window.QaDatePicker = Object.assign(window.QaDatePicker, { qaDateRangePicker });