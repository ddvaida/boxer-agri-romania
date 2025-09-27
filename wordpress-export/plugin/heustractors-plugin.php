<?php
/**
 * Plugin Name: HeusTractors Site
 * Description: Plugin pentru integrarea site-ului HeusTractors în WordPress
 * Version: 1.0.0
 * Author: HeusTractors
 */

// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}

class HeusTractorsPlugin {
    
    public function __construct() {
        add_action('init', array($this, 'init'));
        add_action('wp_enqueue_scripts', array($this, 'enqueue_scripts'));
        add_action('wp_head', array($this, 'add_meta_tags'));
        add_shortcode('heustractors_app', array($this, 'render_app'));
        
        // Create custom post types
        add_action('init', array($this, 'create_post_types'));
        
        // Add custom rewrite rules
        add_action('init', array($this, 'add_rewrite_rules'));
        add_filter('query_vars', array($this, 'add_query_vars'));
        add_action('template_redirect', array($this, 'template_redirect'));
    }
    
    public function init() {
        // Plugin initialization
    }
    
    public function enqueue_scripts() {
        // Enqueue React build files
        wp_enqueue_script(
            'heustractors-app',
            plugin_dir_url(__FILE__) . 'assets/js/main.js',
            array(),
            '1.0.0',
            true
        );
        
        wp_enqueue_style(
            'heustractors-styles',
            plugin_dir_url(__FILE__) . 'assets/css/main.css',
            array(),
            '1.0.0'
        );
        
        // Localize script for WordPress data
        wp_localize_script('heustractors-app', 'wpData', array(
            'ajaxUrl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('heustractors_nonce'),
            'baseUrl' => home_url('/'),
        ));
    }
    
    public function add_meta_tags() {
        global $wp_query;
        
        // SEO meta tags
        echo '<meta name="description" content="HeusTractors - Utilaje agricole și tractoare de calitate superioară. Boxer, John Deere, Case IH și multe altele.">' . "\n";
        echo '<meta name="keywords" content="tractoare, utilaje agricole, boxer, john deere, case ih, cultivarea pajistilor, prelucrarea solului">' . "\n";
        echo '<meta name="viewport" content="width=device-width, initial-scale=1">' . "\n";
        
        // Open Graph tags
        echo '<meta property="og:title" content="HeusTractors - Utilaje Agricole Premium">' . "\n";
        echo '<meta property="og:description" content="Gama completă de tractoare și utilaje agricole pentru fermieri profesioniști.">' . "\n";
        echo '<meta property="og:type" content="website">' . "\n";
        echo '<meta property="og:url" content="' . home_url() . '">' . "\n";
        echo '<meta property="og:image" content="' . plugin_dir_url(__FILE__) . 'assets/images/hero-banner.jpg">' . "\n";
    }
    
    public function render_app($atts) {
        $atts = shortcode_atts(array(
            'page' => 'home'
        ), $atts);
        
        return '<div id="heustractors-root" data-page="' . esc_attr($atts['page']) . '"></div>';
    }
    
    public function create_post_types() {
        // Custom Post Type: Produse
        register_post_type('heustractors_product', array(
            'labels' => array(
                'name' => 'Produse',
                'singular_name' => 'Produs',
                'add_new' => 'Adaugă Produs',
                'add_new_item' => 'Adaugă Produs Nou',
                'edit_item' => 'Editează Produs',
                'new_item' => 'Produs Nou',
                'view_item' => 'Vezi Produs',
                'search_items' => 'Caută Produse',
                'not_found' => 'Nu s-au găsit produse',
                'not_found_in_trash' => 'Nu s-au găsit produse în coșul de gunoi'
            ),
            'public' => true,
            'has_archive' => true,
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'menu_icon' => 'dashicons-admin-tools',
            'rewrite' => array('slug' => 'produs')
        ));
        
        // Custom Taxonomy: Categorii Produse
        register_taxonomy('product_category', 'heustractors_product', array(
            'labels' => array(
                'name' => 'Categorii Produse',
                'singular_name' => 'Categorie Produs',
                'search_items' => 'Caută Categorii',
                'all_items' => 'Toate Categoriile',
                'edit_item' => 'Editează Categoria',
                'update_item' => 'Actualizează Categoria',
                'add_new_item' => 'Adaugă Categorie Nouă',
                'new_item_name' => 'Nume Categorie Nouă'
            ),
            'hierarchical' => true,
            'rewrite' => array('slug' => 'categorie-produse')
        ));
    }
    
    public function add_rewrite_rules() {
        // Custom routes pentru aplicația React
        add_rewrite_rule('^utilaje-agricole/?$', 'index.php?heustractors_page=utilaje-agricole', 'top');
        add_rewrite_rule('^utilaje-agricole/cultivarea-pajistilor/?$', 'index.php?heustractors_page=cultivarea-pajistilor', 'top');
        add_rewrite_rule('^utilaje-agricole/prelucrarea-solului/?$', 'index.php?heustractors_page=prelucrarea-solului', 'top');
        add_rewrite_rule('^utilaje-agricole/utilaje-silvicultura/?$', 'index.php?heustractors_page=utilaje-silvicultura', 'top');
        add_rewrite_rule('^tractoare/?$', 'index.php?heustractors_page=tractoare', 'top');
        add_rewrite_rule('^inventar/?$', 'index.php?heustractors_page=inventar', 'top');
        add_rewrite_rule('^despre/?$', 'index.php?heustractors_page=despre', 'top');
        add_rewrite_rule('^second-hand/?$', 'index.php?heustractors_page=second-hand', 'top');
        add_rewrite_rule('^produs/([^/]+)/?$', 'index.php?heustractors_page=produs&product_id=$matches[1]', 'top');
        add_rewrite_rule('^serie/([^/]+)/?$', 'index.php?heustractors_page=serie&series_id=$matches[1]', 'top');
    }
    
    public function add_query_vars($vars) {
        $vars[] = 'heustractors_page';
        $vars[] = 'product_id';
        $vars[] = 'series_id';
        return $vars;
    }
    
    public function template_redirect() {
        $heustractors_page = get_query_var('heustractors_page');
        
        if ($heustractors_page) {
            // Include template pentru aplicația React
            include plugin_dir_path(__FILE__) . 'templates/app-template.php';
            exit;
        }
    }
}

// Initialize plugin
new HeusTractorsPlugin();

// Activation hook
register_activation_hook(__FILE__, 'heustractors_activate');
function heustractors_activate() {
    // Flush rewrite rules on activation
    flush_rewrite_rules();
}

// Deactivation hook
register_deactivation_hook(__FILE__, 'heustractors_deactivate');
function heustractors_deactivate() {
    // Flush rewrite rules on deactivation
    flush_rewrite_rules();
}

// AJAX handlers pentru formulare
add_action('wp_ajax_submit_quote_request', 'handle_quote_request');
add_action('wp_ajax_nopriv_submit_quote_request', 'handle_quote_request');

function handle_quote_request() {
    // Verify nonce
    if (!wp_verify_nonce($_POST['nonce'], 'heustractors_nonce')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $product = sanitize_text_field($_POST['product']);
    $message = sanitize_textarea_field($_POST['message']);
    
    // Send email
    $to = get_option('admin_email');
    $subject = 'Cerere de Ofertă - ' . $product;
    $body = "Nume: $name\nEmail: $email\nTelefon: $phone\nProdus: $product\n\nMesaj:\n$message";
    
    $sent = wp_mail($to, $subject, $body);
    
    if ($sent) {
        wp_send_json_success('Cererea dumneavoastră a fost trimisă cu succes!');
    } else {
        wp_send_json_error('A apărut o eroare. Vă rugăm să încercați din nou.');
    }
}

// Custom API endpoints
add_action('rest_api_init', function () {
    register_rest_route('heustractors/v1', '/products', array(
        'methods' => 'GET',
        'callback' => 'get_products_api',
        'permission_callback' => '__return_true'
    ));
    
    register_rest_route('heustractors/v1', '/product/(?P<id>[a-zA-Z0-9-]+)', array(
        'methods' => 'GET',
        'callback' => 'get_product_api',
        'permission_callback' => '__return_true'
    ));
});

function get_products_api($request) {
    // Return products data (from your existing data structure)
    $products = include plugin_dir_path(__FILE__) . 'data/products.php';
    return rest_ensure_response($products);
}

function get_product_api($request) {
    $id = $request['id'];
    $products = include plugin_dir_path(__FILE__) . 'data/products.php';
    
    foreach ($products as $product) {
        if ($product['id'] === $id) {
            return rest_ensure_response($product);
        }
    }
    
    return new WP_Error('product_not_found', 'Produsul nu a fost găsit', array('status' => 404));
}
?>