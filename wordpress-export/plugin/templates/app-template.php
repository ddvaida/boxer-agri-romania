<?php
/**
 * Template pentru aplicația HeusTractors
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main">
        
        <?php
        $heustractors_page = get_query_var('heustractors_page');
        $product_id = get_query_var('product_id');
        $series_id = get_query_var('series_id');
        ?>
        
        <!-- SEO Meta Tags specifice pentru pagină -->
        <?php if ($heustractors_page === 'cultivarea-pajistilor'): ?>
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Utilaje pentru Cultivarea Pajiștilor",
                "description": "Gama completă de cositori, mulcitoare și utilaje pentru întreținerea pajiștilor",
                "brand": {
                    "@type": "Brand",
                    "name": "HeusTractors"
                },
                "category": "Utilaje Agricole"
            }
            </script>
        <?php endif; ?>
        
        <?php if ($product_id): ?>
            <script type="application/ld+json">
            {
                "@context": "https://schema.org",
                "@type": "Product",
                "productID": "<?php echo esc_js($product_id); ?>",
                "name": "Produs HeusTractors",
                "description": "Utilaj agricol profesional de la HeusTractors",
                "brand": {
                    "@type": "Brand",
                    "name": "HeusTractors"
                }
            }
            </script>
        <?php endif; ?>
        
        <!-- Container pentru aplicația React -->
        <div id="heustractors-root" 
             data-page="<?php echo esc_attr($heustractors_page); ?>"
             data-product-id="<?php echo esc_attr($product_id); ?>"
             data-series-id="<?php echo esc_attr($series_id); ?>"
             data-wp-api-url="<?php echo esc_url(rest_url('heustractors/v1/')); ?>"
             data-base-url="<?php echo esc_url(home_url('/')); ?>">
            
            <!-- Loading placeholder -->
            <div class="heustractors-loading" style="
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 400px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                color: #666;
            ">
                <div style="text-align: center;">
                    <div style="
                        width: 50px;
                        height: 50px;
                        border: 4px solid #f3f3f3;
                        border-top: 4px solid #0066cc;
                        border-radius: 50%;
                        animation: spin 1s linear infinite;
                        margin: 0 auto 20px;
                    "></div>
                    <p>Se încarcă...</p>
                </div>
            </div>
            
            <style>
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            </style>
        </div>
        
        <!-- Fallback content pentru SEO -->
        <noscript>
            <div class="heustractors-fallback">
                <h1>HeusTractors - Utilaje Agricole Premium</h1>
                <p>Descoperiți gama noastră completă de tractoare și utilaje agricole de la brandurile de top: Boxer, John Deere, Case IH și multe altele.</p>
                
                <h2>Categorii Principale:</h2>
                <ul>
                    <li><a href="<?php echo home_url('/utilaje-agricole/cultivarea-pajistilor'); ?>">Cultivarea Pajiștilor</a></li>
                    <li><a href="<?php echo home_url('/utilaje-agricole/prelucrarea-solului'); ?>">Prelucrarea Solului</a></li>
                    <li><a href="<?php echo home_url('/utilaje-agricole/utilaje-silvicultura'); ?>">Utilaje Silvicultură</a></li>
                    <li><a href="<?php echo home_url('/tractoare'); ?>">Tractoare</a></li>
                </ul>
                
                <p>Pentru a vedea site-ul complet, vă rugăm să activați JavaScript în browser.</p>
            </div>
        </noscript>
        
    </main>
</div>

<?php get_footer(); ?>