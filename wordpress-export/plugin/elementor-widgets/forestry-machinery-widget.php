<?php
/**
 * Elementor Forestry Machinery Widget
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Forestry_Machinery_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors-forestry-machinery';
    }
    
    public function get_title() {
        return __('Utilaje Silvicultură', 'heustractors');
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
                'default' => __('Utilaje pentru Silvicultură', 'heustractors'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => __('Descriere', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Echipamente profesionale pentru lucrări forestiere - tocătoare de lemn, despicătoare și utilaje specializate', 'heustractors'),
            ]
        );

        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('ForestryMachinery', [
            'title' => $settings['title'],
            'description' => $settings['description']
        ]);
    }
}
