<?php
/**
 * Elementor Integration Class
 * 
 * @package HeusTractors
 */

if (!defined('ABSPATH')) {
    exit;
}

class HeusTractors_Elementor_Integration {
    
    private static $instance = null;
    
    public static function get_instance() {
        if (null === self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    private function __construct() {
        add_action('elementor/widgets/register', [$this, 'register_widgets']);
        add_action('elementor/elements/categories_registered', [$this, 'add_widget_categories']);
        add_action('elementor/editor/after_enqueue_scripts', [$this, 'enqueue_editor_scripts']);
    }
    
    /**
     * Register custom widget category
     */
    public function add_widget_categories($elements_manager) {
        $elements_manager->add_category(
            'heustractors',
            [
                'title' => __('HeusTractors', 'heustractors'),
                'icon' => 'fa fa-tractor',
            ]
        );
    }
    
    /**
     * Register all widgets
     */
    public function register_widgets($widgets_manager) {
        // Load base class
        require_once plugin_dir_path(__FILE__) . 'elementor-widgets/class-elementor-heustractors-base.php';
        
        // Load and register widgets
        $widgets = [
            'hero-widget.php' => 'Elementor_HeusTractors_Hero_Widget',
            'products-widget.php' => 'Elementor_HeusTractors_Products_Widget',
            'boxer-series-widget.php' => 'Elementor_HeusTractors_Boxer_Series_Widget',
            'inventory-widget.php' => 'Elementor_HeusTractors_Inventory_Widget',
            'header-widget.php' => 'Elementor_HeusTractors_Header_Widget',
            'footer-widget.php' => 'Elementor_HeusTractors_Footer_Widget',
        ];
        
        foreach ($widgets as $file => $class) {
            $widget_file = plugin_dir_path(__FILE__) . 'elementor-widgets/' . $file;
            if (file_exists($widget_file)) {
                require_once $widget_file;
                $widgets_manager->register(new $class());
            }
        }
    }
    
    /**
     * Enqueue editor scripts
     */
    public function enqueue_editor_scripts() {
        wp_enqueue_style(
            'heustractors-elementor-editor',
            plugin_dir_url(__FILE__) . 'assets/css/elementor-editor.css',
            [],
            '1.0.0'
        );
    }
}

// Initialize the integration
function heustractors_init_elementor_integration() {
    // Check if Elementor is installed and activated
    if (!did_action('elementor/loaded')) {
        add_action('admin_notices', function() {
            echo '<div class="notice notice-warning is-dismissible">';
            echo '<p>' . __('HeusTractors Elementor Integration requires Elementor to be installed and activated.', 'heustractors') . '</p>';
            echo '</div>';
        });
        return;
    }
    
    HeusTractors_Elementor_Integration::get_instance();
}
add_action('plugins_loaded', 'heustractors_init_elementor_integration');
