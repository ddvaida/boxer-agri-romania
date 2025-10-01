<?php
/**
 * Footer Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Footer_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_footer';
    }
    
    public function get_title() {
        return __('HeusTractors Footer', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-footer';
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
            'show_social',
            [
                'label' => __('Show Social Links', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'heustractors'),
                'label_off' => __('No', 'heustractors'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );
        
        $this->add_control(
            'copyright_text',
            [
                'label' => __('Copyright Text', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('© 2024 HeusTractors. All rights reserved.', 'heustractors'),
            ]
        );
        
        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('Footer', [
            'showSocial' => $settings['show_social'] === 'yes',
            'copyrightText' => $settings['copyright_text'],
        ]);
    }
}
