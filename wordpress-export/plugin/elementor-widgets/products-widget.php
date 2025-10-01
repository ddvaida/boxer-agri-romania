<?php
/**
 * Products Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Products_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_products';
    }
    
    public function get_title() {
        return __('HeusTractors Products', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-products';
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
            'category',
            [
                'label' => __('Category', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'all',
                'options' => [
                    'all' => __('All Products', 'heustractors'),
                    'tractors' => __('Tractors', 'heustractors'),
                    'agricultural' => __('Agricultural Machinery', 'heustractors'),
                    'forestry' => __('Forestry Machinery', 'heustractors'),
                    'grassland' => __('Grassland Cultivation', 'heustractors'),
                ],
            ]
        );
        
        $this->add_control(
            'limit',
            [
                'label' => __('Number of Products', 'heustractors'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'min' => 1,
                'max' => 50,
                'step' => 1,
                'default' => 6,
            ]
        );
        
        $this->add_control(
            'show_featured_only',
            [
                'label' => __('Show Featured Only', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SWITCHER,
                'label_on' => __('Yes', 'heustractors'),
                'label_off' => __('No', 'heustractors'),
                'return_value' => 'yes',
                'default' => 'no',
            ]
        );
        
        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('ProductGrid', [
            'category' => $settings['category'],
            'limit' => $settings['limit'],
            'featuredOnly' => $settings['show_featured_only'] === 'yes',
        ]);
    }
}
