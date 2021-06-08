import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { TimePicker, Input } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import Utils from './utils';

import 'antd/dist/antd.css';
// import 'antd/lib/time-picker/style/index.css';
// import './index.css';

function QaTimePicker(props){
    const defaultValue = props.defaultValue ? moment(props.defaultValue, props.format) : null;
    const [hiddenInputValue, setHiddenInputValue] = useState(defaultValue ? defaultValue.format(props.format) : null)
    const onChange = (date, dateString) => setHiddenInputValue(dateString)

    return (
        <div>
            <Input
                type={ "hidden" }
                name={ props.name }
                value={ hiddenInputValue }
            />
            <TimePicker
                onChange = { onChange }
                locale = { locale }
                defaultValue = { defaultValue }
                allowClear = { Utils.transcodeBoolByStr(props.allowClear) }
                inputReadOnly = { Utils.transcodeBoolByStr(props.inputReadOnly) }
                placeholder = { props.placeholder }
                size = { props.size }
                format = { props.format }
                disabled = { Utils.transcodeBoolByStr(props.disabled) }
            />
        </div>
    );
}

function qaTimePicker(id, opt){
    const defaultOpt = {
        defaultValue: null,
        allowClear: true,
        inputReadOnly: true,
        placeholder: "请选择时间",
        size: "",
        format: "HH:mm:ss",
        name: "",
        disabled: false,
    };
    Object.assign(defaultOpt, opt);

    ReactDOM.render(
        <QaTimePicker
            name = { defaultOpt.name }
            defaultValue = { defaultOpt.defaultValue }
            allowClear = { defaultOpt.allowClear }
            inputReadOnly = { defaultOpt.inputReadOnly }
            placeholder = { defaultOpt.placeholder }
            size = { defaultOpt.size }
            format = { defaultOpt.format }
            disabled = { defaultOpt.disabled }
        />,
        document.getElementById(id),
    );
}

window.QaDatePicker = window.QaDatePicker ? window.QaDatePicker : {};
window.QaDatePicker = Object.assign(window.QaDatePicker, { qaTimePicker });