<?php
/**
 * Elementor Grassland Cultivation Widget
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Grassland_Cultivation_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors-grassland-cultivation';
    }
    
    public function get_title() {
        return __('Cultivarea Pajiștilor', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-gallery-grid';
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
            'title',
            [
                'label' => __('Titlu', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => __('Cultivarea Pajiștilor', 'heustractors'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => __('Descriere', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Echipamente specializate pentru întreținerea și cultivarea pajiștilor', 'heustractors'),
            ]
        );

        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('GrasslandCultivation', [
            'title' => $settings['title'],
            'description' => $settings['description']
        ]);
    }
}
