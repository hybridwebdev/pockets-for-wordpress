<?php
/**
    Template Name: Green Screen Youtube
    Template Type: static-template
    Template controller: options-controller
*/
$key = uniqid("chroma");

$playerArgs = wp_parse_args( ( $data['playerArgs'] ?? [] ), [
    'class' => 'background-video',
    "videoId" => "iAg4yMangmY",
    "playerVars" => [
        "controls" => 0,
        "autoplay" => 1,
        "mute" => 1,
    ],
] );

$colorMatrix = $data['colorMatrix'] ?? "
    1   0   0   0   0 
    0   1   0   0   0  
    0   0   1   0   0 
    1.5  -3.1   1.5   0   1
";
?>
<youtube 
    v-bind='<?php echo json_encode( $playerArgs ) ?>' 
    player-style='filter: url( #<?php echo $key // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?> ); '
>
    <svg class='d-none'>
        <filter 
            id="<?php echo $key // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped?>" 
            color-interpolation-filters="sRGB" 
            x="0" 
            y="0" 
            width='100%' 
            height='100%'
        >
            <feColorMatrix 
                values="<?php echo $colorMatrix // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>" 
            >
            </feColorMatrix>
        </filter>
    </svg>
</youtube>
 