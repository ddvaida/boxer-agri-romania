<?php
/**
 * Elementor Tractors Widget
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Tractors_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors-tractors';
    }
    
    public function get_title() {
        return __('Tractoare', 'heustractors');
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
                'default' => __('Tractoare Agricole', 'heustractors'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => __('Descriere', 'heustractors'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => __('Descoperiți gama noastră completă de tractoare pentru toate tipurile de exploatații agricole', 'heustractors'),
            ]
        );

        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('Tractors', [
            'title' => $settings['title'],
            'description' => $settings['description']
        ]);
    }
}
