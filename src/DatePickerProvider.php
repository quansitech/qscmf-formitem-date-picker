<?php
namespace FormItem\DatePicker;

use Bootstrap\Provider;
use Bootstrap\RegisterContainer;
use FormItem\DatePicker\FormType\Time\Time;
use FormItem\DatePicker\FormType\TimeRange\TimeRange;
use FormItem\DatePicker\FormType\DateRange\DateRange;

class DatePickerProvider implements Provider {

    public function register(){
        RegisterContainer::registerFormItem('time', Time::class);
        RegisterContainer::registerFormItem('time_range', TimeRange::class);
        RegisterContainer::registerFormItem('date_range', DateRange::class);

        RegisterContainer::registerSymLink(WWW_DIR . '/Public/date-picker', __DIR__ . '/../asset/date-picker');
    }
}