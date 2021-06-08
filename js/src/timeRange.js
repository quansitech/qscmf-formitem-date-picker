import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { TimePicker, Input } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import 'antd/dist/antd.css';
import RangeHelper from './range_helper';
import Utils from './utils';

function QaTimeRangePicker(props){
    const defaultFormat = RangeHelper.resetFormatWithPickerType(props.format, props.picker, props.showTime)
    const defaultValue = RangeHelper.initDefaultValue(props.defaultValue, defaultFormat);
    const [hiddenInputValue, setHiddenInputValue] = useState( RangeHelper.initHiddenDefaultValue(defaultValue,  defaultFormat, props.valueSeparator) )
    const onChange = (date, dateArr) => setHiddenInputValue(RangeHelper.joinHiddenValueWithSep(dateArr, props.valueSeparator))

    return (
        <div>
            <Input
                type={ "hidden" }
                name={ props.name }
                value={ hiddenInputValue }
            />
            <TimePicker.RangePicker
                onChange = { onChange }
                locale = { locale }
                defaultValue = { defaultValue }
                allowClear = { Utils.transcodeBoolByStr(props.allowClear) }
                inputReadOnly = { Utils.transcodeBoolByStr(props.inputReadOnly) }
                size = { props.size }
                format = { defaultFormat }
                disabled = { Utils.transcodeBoolByStr(props.disabled) }
                order = { Utils.transcodeBoolByStr(props.order) }
            />
        </div>
    );
}

function qaTimeRangePicker(id, opt){
    const defaultOpt = {
        defaultValue: null,
        allowClear: true,
        inputReadOnly: true,
        size: "",
        format: "HH:mm:ss",
        name: "",
        disabled: false,
        valueSeparator: ',',
        order: true,
    };
    Object.assign(defaultOpt, opt);

    ReactDOM.render(
        <QaTimeRangePicker
            name = { defaultOpt.name }
            defaultValue = { defaultOpt.defaultValue }
            allowClear = { defaultOpt.allowClear }
            inputReadOnly = { defaultOpt.inputReadOnly }
            size = { defaultOpt.size }
            format = { defaultOpt.format }
            disabled = { defaultOpt.disabled }
            valueSeparator = { defaultOpt.valueSeparator }
            order = { defaultOpt.order }
        />,
        document.getElementById(id),
    );
}

window.QaDatePicker = window.QaDatePicker ? window.QaDatePicker : {};
window.QaDatePicker = Object.assign(window.QaDatePicker, { qaTimeRangePicker });