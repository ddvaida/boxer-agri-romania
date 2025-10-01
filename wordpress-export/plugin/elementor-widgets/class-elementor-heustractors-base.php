<?php
/**
 * Base class for all HeusTractors Elementor widgets
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

abstract class Elementor_HeusTractors_Base extends \Elementor\Widget_Base {
    
    /**
     * Get widget categories
     */
    public function get_categories() {
        return ['heustractors'];
    }
    
    /**
     * Enqueue widget styles and scripts
     */
    public function enqueue_assets() {
        // Get the React app assets
        $plugin_dir = plugin_dir_path(dirname(__FILE__));
        $plugin_url = plugin_dir_url(dirname(__FILE__));
        
        // Enqueue React app CSS
        $css_files = glob($plugin_dir . 'assets/css/*.css');
        foreach ($css_files as $css_file) {
            $css_filename = basename($css_file);
            wp_enqueue_style(
                'heustractors-' . md5($css_filename),
                $plugin_url . 'assets/css/' . $css_filename,
                [],
                filemtime($css_file)
            );
        }
        
        // Enqueue React app JS
        $js_files = glob($plugin_dir . 'assets/js/*.js');
        foreach ($js_files as $js_file) {
            $js_filename = basename($js_file);
            wp_enqueue_script(
                'heustractors-' . md5($js_filename),
                $plugin_url . 'assets/js/' . $js_filename,
                [],
                filemtime($js_file),
                true
            );
        }
        
        // Localize script with WordPress data
        wp_localize_script(
            'heustractors-' . md5(basename($js_files[0])),
            'wpData',
            [
                'apiUrl' => rest_url('heustractors/v1/'),
                'nonce' => wp_create_nonce('wp_rest'),
                'siteUrl' => get_site_url(),
                'baseUrl' => home_url('/'),
            ]
        );
    }
    
    /**
     * Render the React root element
     */
    protected function render_react_root($component, $props = []) {
        $this->enqueue_assets();
        
        $data_attrs = '';
        foreach ($props as $key => $value) {
            $data_attrs .= sprintf(
                ' data-%s="%s"',
                esc_attr($key),
                esc_attr(is_array($value) ? json_encode($value) : $value)
            );
        }
        
        echo sprintf(
            '<div class="heustractors-widget" data-component="%s"%s></div>',
            esc_attr($component),
            $data_attrs
        );
    }
}
