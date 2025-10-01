<?php
/**
 * Boxer Series Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Boxer_Series_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_boxer_series';
    }
    
    public function get_title() {
        return __('HeusTractors Boxer Series', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-gallery-grid';
    }
    
    protected function register_controls() {
        // Content Section
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'heustractors'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        
        $this->add_control(
            'series',
            [
                'label' => __('Series', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'agf',
                'options' => [
                    'agf' => __('AGF Series', 'heustractors'),
                    'nex' => __('NEX Series', 'heustractors'),
                    'dm' => __('DM Series', 'heustractors'),
                    'fm' => __('FM Series', 'heustractors'),
                ],
            ]
        );
        
        $this->add_control(
            'show_selector',
            [
                'label' => __('Show Series Selector', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'heustractors'),
                'label_off' => __('No', 'heustractors'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );
        
        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('BoxerSeries', [
            'series' => $settings['series'],
            'showSelector' => $settings['show_selector'] === 'yes',
        ]);
    }
}
