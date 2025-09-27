<?php
/**
 * Functions.php pentru tema HeusTractors WordPress
 */

// Theme setup
function heustractors_theme_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    add_theme_support('customize-selective-refresh-widgets');
    
    // Register navigation menus
    register_nav_menus(array(
        'primary' => esc_html__('Primary Menu', 'heustractors'),
        'footer' => esc_html__('Footer Menu', 'heustractors'),
    ));
}
add_action('after_setup_theme', 'heustractors_theme_setup');

// Enqueue scripts and styles
function heustractors_scripts() {
    // Main theme styles
    wp_enqueue_style('heustractors-style', get_stylesheet_uri(), array(), '1.0.0');
    
    // Google Fonts
    wp_enqueue_style('heustractors-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Theme JavaScript
    wp_enqueue_script('heustractors-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '1.0.0', true);
    
    // Localize script
    wp_localize_script('heustractors-navigation', 'heustractorsAjax', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('heustractors_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'heustractors_scripts');

// Register widget areas
function heustractors_widgets_init() {
    register_sidebar(array(
        'name'          => esc_html__('Sidebar', 'heustractors'),
        'id'            => 'sidebar-1',
        'description'   => esc_html__('Add widgets here.', 'heustractors'),
        'before_widget' => '<section id="%1$s" class="widget %2$s">',
        'after_widget'  => '</section>',
        'before_title'  => '<h2 class="widget-title">',
        'after_title'   => '</h2>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Area 1', 'heustractors'),
        'id'            => 'footer-1',
        'description'   => esc_html__('Footer widget area 1.', 'heustractors'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Area 2', 'heustractors'),
        'id'            => 'footer-2',
        'description'   => esc_html__('Footer widget area 2.', 'heustractors'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => esc_html__('Footer Area 3', 'heustractors'),
        'id'            => 'footer-3',
        'description'   => esc_html__('Footer widget area 3.', 'heustractors'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="footer-widget-title">',
        'after_title'   => '</h3>',
    ));
}
add_action('widgets_init', 'heustractors_widgets_init');

// Custom logo support
function heustractors_custom_logo_setup() {
    add_theme_support('custom-logo', array(
        'height'      => 100,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array('site-title', 'site-description'),
    ));
}
add_action('after_setup_theme', 'heustractors_custom_logo_setup');

// Customizer settings
function heustractors_customize_register($wp_customize) {
    // Colors
    $wp_customize->add_section('heustractors_colors', array(
        'title'    => __('HeusTractors Colors', 'heustractors'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('primary_color', array(
        'default'           => '#0066cc',
        'sanitize_callback' => 'sanitize_hex_color',
    ));
    
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
        'label'    => __('Primary Color', 'heustractors'),
        'section'  => 'heustractors_colors',
        'settings' => 'primary_color',
    )));
    
    // Contact Information
    $wp_customize->add_section('heustractors_contact', array(
        'title'    => __('Contact Information', 'heustractors'),
        'priority' => 35,
    ));
    
    $wp_customize->add_setting('contact_phone', array(
        'default'           => '+40 742 123 456',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('contact_phone', array(
        'label'    => __('Phone Number', 'heustractors'),
        'section'  => 'heustractors_contact',
        'type'     => 'text',
    ));
    
    $wp_customize->add_setting('contact_email', array(
        'default'           => 'contact@heustractors.ro',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('contact_email', array(
        'label'    => __('Email Address', 'heustractors'),
        'section'  => 'heustractors_contact',
        'type'     => 'email',
    ));
    
    $wp_customize->add_setting('contact_address', array(
        'default'           => 'Strada Principală Nr. 123, București',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    
    $wp_customize->add_control('contact_address', array(
        'label'    => __('Address', 'heustractors'),
        'section'  => 'heustractors_contact',
        'type'     => 'textarea',
    ));
}
add_action('customize_register', 'heustractors_customize_register');

// Add custom CSS variables
function heustractors_custom_css() {
    $primary_color = get_theme_mod('primary_color', '#0066cc');
    
    echo '<style>
        :root {
            --primary-color: ' . esc_attr($primary_color) . ';
            --primary-rgb: ' . implode(', ', array_map('hexdec', str_split(str_replace('#', ''), 2))) . ';
        }
    </style>';
}
add_action('wp_head', 'heustractors_custom_css');

// SEO improvements
function heustractors_meta_description() {
    if (is_home() || is_front_page()) {
        echo '<meta name="description" content="HeusTractors - Furnizor premium de tractoare și utilaje agricole. Boxer, John Deere, Case IH. Servicii complete pentru fermieri profesioniști.">';
    } elseif (is_category()) {
        $category_description = category_description();
        if ($category_description) {
            echo '<meta name="description" content="' . esc_attr(strip_tags($category_description)) . '">';
        }
    } elseif (is_single()) {
        global $post;
        $excerpt = wp_trim_words($post->post_content, 25, '...');
        echo '<meta name="description" content="' . esc_attr($excerpt) . '">';
    }
}
add_action('wp_head', 'heustractors_meta_description');

// Structured data for products
function heustractors_structured_data() {
    if (is_single() && get_post_type() === 'heustractors_product') {
        global $post;
        
        $structured_data = array(
            '@context' => 'https://schema.org',
            '@type' => 'Product',
            'name' => get_the_title(),
            'description' => wp_trim_words(get_the_content(), 25),
            'brand' => array(
                '@type' => 'Brand',
                'name' => 'HeusTractors'
            )
        );
        
        if (has_post_thumbnail()) {
            $structured_data['image'] = get_the_post_thumbnail_url();
        }
        
        echo '<script type="application/ld+json">' . wp_json_encode($structured_data) . '</script>';
    }
}
add_action('wp_head', 'heustractors_structured_data');

// Contact form handler
function handle_contact_form() {
    if (!wp_verify_nonce($_POST['nonce'], 'heustractors_nonce')) {
        wp_die('Security check failed');
    }
    
    $name = sanitize_text_field($_POST['name']);
    $email = sanitize_email($_POST['email']);
    $phone = sanitize_text_field($_POST['phone']);
    $subject = sanitize_text_field($_POST['subject']);
    $message = sanitize_textarea_field($_POST['message']);
    
    $to = get_option('admin_email');
    $email_subject = 'Contact Form: ' . $subject;
    $email_body = "Nume: $name\nEmail: $email\nTelefon: $phone\n\nMesaj:\n$message";
    
    $sent = wp_mail($to, $email_subject, $email_body);
    
    if ($sent) {
        wp_send_json_success('Mesajul a fost trimis cu succes!');
    } else {
        wp_send_json_error('A apărut o eroare. Vă rugăm să încercați din nou.');
    }
}
add_action('wp_ajax_contact_form', 'handle_contact_form');
add_action('wp_ajax_nopriv_contact_form', 'handle_contact_form');

// Admin menu customization
function heustractors_admin_menu() {
    add_menu_page(
        'HeusTractors Settings',
        'HeusTractors',
        'manage_options',
        'heustractors-settings',
        'heustractors_settings_page',
        'dashicons-admin-tools',
        30
    );
}
add_action('admin_menu', 'heustractors_admin_menu');

function heustractors_settings_page() {
    ?>
    <div class="wrap">
        <h1>HeusTractors Settings</h1>
        <p>Configurați setările pentru site-ul HeusTractors.</p>
        
        <h2>Informații de Contact</h2>
        <p>Puteți modifica informațiile de contact din <a href="<?php echo admin_url('customize.php?autofocus[section]=heustractors_contact'); ?>">Customizer</a>.</p>
        
        <h2>Produse</h2>
        <p>Gestionați produsele din <a href="<?php echo admin_url('edit.php?post_type=heustractors_product'); ?>">Produse</a>.</p>
    </div>
    <?php
}
?>