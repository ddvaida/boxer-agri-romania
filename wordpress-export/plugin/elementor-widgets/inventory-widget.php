<?php
/**
 * Inventory Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Inventory_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_inventory';
    }
    
    public function get_title() {
        return __('HeusTractors Inventory', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-archive';
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
            'filter_type',
            [
                'label' => __('Filter Type', 'heustractors'),
                'type' => \Elementor\Controls_Manager::SELECT,
                'default' => 'all',
                'options' => [
                    'all' => __('All Products', 'heustractors'),
                    'new' => __('New Only', 'heustractors'),
                    'used' => __('Second Hand Only', 'heustractors'),
                ],
            ]
        );
        
        $this->add_control(
            'show_filters',
            [
                'label' => __('Show Filters', 'heustractors'),
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
        
        $this->render_react_root('Inventory', [
            'filterType' => $settings['filter_type'],
            'showFilters' => $settings['show_filters'] === 'yes',
        ]);
    }
}
