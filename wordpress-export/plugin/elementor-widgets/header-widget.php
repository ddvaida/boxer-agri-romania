<?php
/**
 * Header Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Header_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_header';
    }
    
    public function get_title() {
        return __('HeusTractors Header', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-header';
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
            'show_search',
            [
                'label' => __('Show Search', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'heustractors'),
                'label_off' => __('No', 'heustractors'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );
        
        $this->add_control(
            'sticky_header',
            [
                'label' => __('Sticky Header', 'heustractors'),
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
        
        $this->render_react_root('Header', [
            'showSearch' => $settings['show_search'] === 'yes',
            'sticky' => $settings['sticky_header'] === 'yes',
        ]);
    }
}
