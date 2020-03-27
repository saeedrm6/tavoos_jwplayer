Tavoos Player
based on jwplayer ver 8

/*****
Setup
******/

Add these script tags in <head></head> of document

            <script src="https://tavoos.net/tavoos_player/jwplayer/jwplayer.js?ver=1"></script>
            <script src="https://tavoos.net/tavoos_player/jwplayer/vastlink.js"></script>

/*****
Call Player
******/
to call player in every place , first you need a div with id
for example : <code><div id="vidcounter"></div></code>
then you need a script tag to call tavoos_init_player()
tavoos_init_player() need 5 parameters to execute.
tavoos_init_player(url_of_player_folder,target_div_id,image,source,vast_url)
    url_of_player_folder : current folder of player EXAMPLE : "https://tavoos.net/tavoos_player/jwplayer/"
    target_div_id : target div that you want to init player  Example : vidcounter
    image : the thumbnail photo of video (string/url)  Example : https://tavoos.net/tavoos_contents/uploads/contentuploads/2020/03/10/IXBco21xMa5Pyds2i10wIOpmDVCbO0mY0OAzCz5W.mp4-thumbnail.jpg
    source : (Type : Array) you have to pass videos via array format Example :
         [
            {
                 "file": "7r0nyf9RNmfxrky6mAFKFd0MYGmp3gItJIhi8sHk.mp4",
                 "type": "mp4",
                 "label": "720p"
            },
            {
                 "file": "7r0nyf9RNmfxrky6mAFKFd0MYGmp3gItJIhi8sHk.mp4",
                 "type": "mp4",
                 "label": "360p",
                 "default": "true"
            },
         ]

    vast_url : The Vast URL given from Tavoos Platform  Example : https://tavoos.net/services/vast/5JDKhdZ4-bPHG-wsFs-V3de-1DzKEWJdiHTd/59


    EXAMPLE :
            <script src="https://tavoos.net/tavoos_player/jwplayer/jwplayer.js?ver=3.50"></script>
            <script src="https://tavoos.net/tavoos_player/jwplayer/vastlink.js"></script>
            <div id="myplayer"></div>
            <script>
                tavoos_init_player(
                        'https://tavoos.net/tavoos_player/jwplayer/',
                        'myplayer',
                        'thumbnail'
                         [
                             {
                                 "file": "file.mp4",
                                 "type": "mp4",
                                 "label": "720px"
                             }
                         ],
                        'https://tavoos.net/services/vast/F9nDAKX7-k0ue-cViA-XgXB-F0lDAEzw717k/77'
                );
            </script>
