<?php
/**
 * FAQ Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_FAQ_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_faq';
    }
    
    public function get_title() {
        return __('HeusTractors FAQ', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-help-o';
    }
    
    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => __('Content', 'heustractors'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );
        
        $this->end_controls_section();
    }
    
    protected function render() {
        $this->render_react_root('FAQ', []);
    }
}
