<?php
/**
 * Blog Widget for Elementor
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class Elementor_HeusTractors_Blog_Widget extends Elementor_HeusTractors_Base {
    
    public function get_name() {
        return 'heustractors_blog';
    }
    
    public function get_title() {
        return __('HeusTractors Blog', 'heustractors');
    }
    
    public function get_icon() {
        return 'eicon-posts-grid';
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
            'posts_per_page',
            [
                'label' => __('Posts Per Page', 'heustractors'),
                'type' => \Elementor\Controls_Manager::NUMBER,
                'default' => 6,
            ]
        );
        
        $this->end_controls_section();
    }
    
    protected function render() {
        $settings = $this->get_settings_for_display();
        
        $this->render_react_root('Blog', [
            'postsPerPage' => $settings['posts_per_page'],
        ]);
    }
}
