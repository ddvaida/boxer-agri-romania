<?php
/**
 * Elementor Soil Cultivation Widget
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Soil_Cultivation_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors-soil-cultivation';
    }
    
    public function get_title() {
        return __('Prelucrarea Solului', 'heustractors');
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
                'default' => __('Prelucrarea Solului', 'heustractors'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => __('Descriere', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Utilaje profesionale pentru pregătirea eficientă a solului - freze rotative, grape și cultivatoare de înaltă calitate', 'heustractors'),
            ]
        );

        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('SoilCultivation', [
            'title' => $settings['title'],
            'description' => $settings['description']
        ]);
    }
}
