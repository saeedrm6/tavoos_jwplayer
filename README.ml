<h1>Tavoos Player</h1>
<p>based on jwplayer ver 8</p>
<br>
<br>
<br>
<h2>Setup</h2>
<hr>
<p>Add these script tags in <head></head> of document</p>
<p>
    <pre>
        <code>
            <script src="https://tavoos.net/tavoos_player/jwplayer/jwplayer.js?ver=1"></script>
            <script src="https://tavoos.net/tavoos_player/jwplayer/vastlink.js"></script>
        </code>
    </pre>
</p>

<br>
<h2>Call Player</h2>
<hr>
<p>to call player in every place , first you need a div with id</p>
<p>for example : <code><div id="vidcounter"></div></code></p>
<p>then you need a script tag to call tavoos_init_player()</p>
<p>tavoos_init_player() need 5 parameters to execute. </p>
<p>tavoos_init_player(url_of_player_folder,target_div_id,image,source,vast_url) </p>
