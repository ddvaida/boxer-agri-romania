<?php
/**
 * Hero Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Hero_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_hero';
    }
    
    public function get_title() {
        return __('HeusTractors Hero', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-slider-push';
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
            'title',
            [
                'label' => __('Title', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Tractoare și Mașini Agricole', 'heustractors'),
                'placeholder' => __('Enter title', 'heustractors'),
            ]
        );
        
        $this->add_control(
            'subtitle',
            [
                'label' => __('Subtitle', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Soluții profesionale pentru agricultura modernă', 'heustractors'),
                'placeholder' => __('Enter subtitle', 'heustractors'),
            ]
        );
        
        $this->add_control(
            'show_cta',
            [
                'label' => __('Show Call to Action', 'heustractors'),
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
        
        $this->render_react_root('Hero', [
            'title' => $settings['title'],
            'subtitle' => $settings['subtitle'],
            'showCta' => $settings['show_cta'] === 'yes',
        ]);
    }
}
