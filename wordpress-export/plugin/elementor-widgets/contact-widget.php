<?php
/**
 * Contact Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Contact_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_contact';
    }
    
    public function get_title() {
        return __('HeusTractors Contact', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-mail';
    }
    
    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'heustractors'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        
        $this->add_control(
            'show_map',
            [
                'label' => __('Show Map', 'heustractors'),
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
        
        $this->render_react_root('Contact', [
            'showMap' => $settings['show_map'] === 'yes',
        ]);
    }
}
