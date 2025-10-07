<?php
/**
 * Elementor About Widget
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_About_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors-about';
    }
    
    public function get_title() {
        return __('Despre Noi', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-info-circle';
    }
    
    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Setări', 'heustractors'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'show_timeline',
            [
                'label' => __('Afișează Istoricul', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Da', 'heustractors'),
                'label_off' => __('Nu', 'heustractors'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->add_control(
            'show_team',
            [
                'label' => __('Afișează Echipa', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Da', 'heustractors'),
                'label_off' => __('Nu', 'heustractors'),
                'return_value' => 'yes',
                'default' => 'yes',
            ]
        );

        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('About', [
            'showTimeline' => $settings['show_timeline'] === 'yes',
            'showTeam' => $settings['show_team'] === 'yes'
        ]);
    }
}
