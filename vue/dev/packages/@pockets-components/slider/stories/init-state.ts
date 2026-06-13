let slides = {
    "name": "slide",

    "direction": "right",
    "interval" : 2000,
    "duration": 1000,
    
    "shiftCount": 1,
    "index": 0,

    "pauseHovered": true,
    "debounceRotation": true,
    "swipeable": true,

    "slides": [
        {
            "title": "Hello world 1",
            "src": "https://picsum.photos/800/400?random=1"
        },
        {
            "title": "Hello world 1",
            "src": "https://picsum.photos/800/400?random=2"
        },
        {
            "title": "Hello world 1",
            "src": "https://picsum.photos/800/400?random=3"
        },
        {
            "title": "Hello world 1",
            "src": "https://picsum.photos/800/400?random=4"
        },
        // {
        //     "title": "Hello world 2",
        //     "src": "https://place-hold.it/300x300/835878/fff/000"
        // },
        // {
        //     "title": "Hello world 3",
        //     "src": "https://place-hold.it/300x300/ff6900/fff/000"
        // },
        // {
        //     "title": "Hello world 4",
        //     "src": "https://place-hold.it/300x300/0693e3/fff/000"
        // },
        // {
        //     "title": "Hello world 5",
        //     "src": "https://place-hold.it/300x300/ededed/fff/000"
        // },
        // {
        //     "title": "Hello world 6",
        //     "src": "https://place-hold.it/300x300/f00/fff/000"
        // }
    ]
}

export let initState = () => ({ props: slides })