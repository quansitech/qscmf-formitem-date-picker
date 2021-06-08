import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, Input } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'antd/dist/antd.css';
import RangeHelper from './range_helper';


const { RangePicker } = DatePicker;

function QaDateRangePicker(props){
    const defaultFormat = RangeHelper.resetFormatWithPickerType(props.format, props.picker, props.showTime)
    const defaultValue = RangeHelper.initDefaultValue(props.defaultValue, defaultFormat);
    const [hiddenInputValue, setHiddenInputValue] = useState( RangeHelper.initHiddenDefaultValue(defaultValue, defaultFormat, props.valueSeparator) )
    const onChange = (date, dateArr) => setHiddenInputValue(RangeHelper.joinHiddenValueWithSep(dateArr, props.valueSeparator))

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
                format = { defaultFormat }
                disabled = { props.disabled }
                picker = { props.picker }
                showTime = { props.showTime }
            />
        </div>
    );
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