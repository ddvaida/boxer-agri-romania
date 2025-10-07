<?php
/**
 * Elementor Agricultural Machinery Widget
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Agricultural_Machinery_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors-agricultural-machinery';
    }
    
    public function get_title() {
        return __('Utilaje Agricole', 'heustractors');
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
                'default' => __('Utilaje Agricole', 'heustractors'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => __('Descriere', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Descoperiți gama completă de utilaje agricole profesionale pentru toate tipurile de exploatații', 'heustractors'),
            ]
        );

        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('AgriculturalMachinery', [
            'title' => $settings['title'],
            'description' => $settings['description']
        ]);
    }
}
