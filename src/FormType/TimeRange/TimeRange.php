<?php
namespace FormItem\DatePicker\FormType\TimeRange;

use Illuminate\Support\Str;
use Qscmf\Builder\FormType\FormType;

class TimeRange implements FormType
{
    public function build(array $form_type){
        $separator = $form_type['options']['valueSeparator']?:',';
        $default_value_arr = explode($separator, $form_type['value']);

        $opt = array_merge([
            'name' => $form_type['name'],
            'defaultValue' => $default_value_arr,
        ], $form_type['options'] ?: []);

        if($form_type['item_option']['read_only']){
            $opt['disabled'] = [true, true];
        }
        $view = new \Think\View();
        $view->assign('form', $form_type);
        $view->assign('gid', Str::uuid());
        $view->assign('opt', $opt);
        $content = $view->fetch(__DIR__ . '/time_range.html');
        return $content;
    }
}