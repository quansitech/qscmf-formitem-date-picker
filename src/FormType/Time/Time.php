<?php
namespace FormItem\DatePicker\FormType\Time;


use Illuminate\Support\Str;

class Time implements \Qscmf\Builder\FormType\FormType
{
    public function build(array $form_type){
        $opt = array_merge([
            'name' => $form_type['name'],
            'defaultValue' => $form_type['value'],
        ], $form_type['options'] ?: []);

        if($form_type['item_option']['read_only']){
            $opt['disabled'] = true;
        }
        $view = new \Think\View();
        $view->assign('form', $form_type);
        $view->assign('gid', Str::uuid());
        $view->assign('opt', $opt);
        $content = $view->fetch(__DIR__ . '/time.html');
        return $content;
    }
}