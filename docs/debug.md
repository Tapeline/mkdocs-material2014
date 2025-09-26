## Client info

<pre id="debug-output">
    
</pre>

## CSS @media

<code class="d-css-media-debug">Media state: </code>

<script type="text/javascript">
$(document).ready(() => {
    $("#debug-output").text(
        "User-Agent: \n" +
        window.navigator.userAgent + "\n\n" +
        ".userAgentData = " + JSON.stringify(
            window.navigator.userAgentData || {},
            null,
            2
        )
    )
});
</script>